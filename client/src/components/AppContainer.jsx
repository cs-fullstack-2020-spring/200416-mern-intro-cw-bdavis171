import React, { Component } from 'react';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            age: 0,
            characterList: []
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    // load data
    loadData = async () => {
        let response = await fetch('/api');
        let json = await response.json();
        console.table(json);
        this.setState({ characterList: json });
    }

    // handle changes to fields
    handleChanges = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'gender') {
            this.setState({ gender: event.target.value });
        }
        else if (event.target.name === 'age') {
            this.setState({ age: event.target.value });
        }
    }

    // handle submission
    handleSubmission = async (event) => {
        event.preventDefault();
        let formBody = {
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age
        };

        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formBody)
        });

        let json = await response.json();
        console.log(json);
    }

    render() {
        return (
            <div className='container'>
                <h1>Character App</h1>
                <form action="">
                    <fieldset>
                        <legend>Add a New Character</legend>

                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChanges}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender" onChange={this.handleChanges}>
                                <option value="">--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input type="number" name='age' id='age' value={this.state.age} onChange={this.handleChanges}/>
                        </div>

                        <div className="form-group">
                            <button onClick={this.handleSubmission}>Add Character</button>
                        </div>
                    </fieldset>
                </form>

                <div>
                    <fieldset>
                        <legend>List of Characters</legend>
                        {this.state.characterList.map(
                            (character) => {
                                return(
                                    <div key = {character._id}>
                                        <p>Name: {character.name}</p>
                                        <p>Gender: {character.gender}</p>
                                        <p>Age: {character.age}</p>
                                    </div>
                                )
                            }
                        )}
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default AppContainer;