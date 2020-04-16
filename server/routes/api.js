// api route

// reference express
const express = require('express');
const router = express.Router();
router.use(express.json());

// import schema
const CharactersCollection = require('../models/CharactersSchema');

// POST: create new character
router.post('/',(req,res) => {
    // res.send('new character created');
    CharactersCollection.create(req.body, (errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// GET: read all characters
router.get('/',(req,res) => {
    // res.send('get all characters');
    CharactersCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// export
module.exports = router;
