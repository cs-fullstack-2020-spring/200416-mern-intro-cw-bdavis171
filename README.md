# 20-04-16 MERN Intro CW - Create and Read All

### File Structure + Set Up
- Create a directory called `server` - this is where our server will be 
- Create a react app called `client` - this is where our react app will be
- Create an express server with a create endpoint and read all endpoint mounted to an `api` path
- Test endpoints
- In the react app create a class based `AppContainer` component and render the text `Simple MERN Application`
- Run React App to view in browser

### Backend Development (Node JS + Express + Mongoose) - Server Directory
- Create a `Characters` schema and export as `characters200416` collection
    - Properties : name (string), gender (string), age (number)
- Connect to Mongo Database in entry point file
- Create a new document in your database at the correct end point
- Read all documents from your database at at the correct end point
- Check in postman

### Fronted Development (React + API) - Client Directory
- In `AppContainer` display a form with fields `Character Name`, `Character Gender` and `Character Age`
- In `AppContainer` map through an array of character objects in a div

### Connecting the frontend and backend
- In `package.json` file add proxy - this allows the frontend and backend to communicate
- The port number MUST match the port number your express server is running on

### Communicate from backend to frontend
- Add a fetch to `AppContainer` to get all documents from the database at the endpoint `/api` when the component mounts
- Map through all documents
- Add a fetch to `AppContainer` to create a document in the database at the endpoint `/api` when the form is submitted
