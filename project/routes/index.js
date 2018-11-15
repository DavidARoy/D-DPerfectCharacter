var express = require('express');
var router = express.Router();
const request = require('request');

/* Set up mongoose in order to connect to mongo database */
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/characterDB', { useNewUrlParser: true }); //Connects to a mongo database called "characterDB"

var characterSchema = mongoose.Schema({ //Defines the Schema for this database
    Name: String,
    STR: Number,
    CONST: Number,
    DEX: Number,
    INT: Number,
    WIS: Number,
    CHAR: Number,
    TOTAL: Number
});

var Character = mongoose.model('Character', characterSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html', { title: 'public' });
});

router.get('/die', function(req, res, next) {
    res.sendFile('dice.html', { root: 'public' });
});

router.post('/character', function(req, res, next) {
    console.log("POST comment route");
    console.log(req.body);

    var newcharacter = new Character(req.body);
    //console.log(newcharacter);
    newcharacter.save(function(err, post) {
        if (err) return console.error(err);
        console.log(post);
        res.sendStatus(200);
    });
});

/* GET characters from database */
router.get('/character', function(req, res, next) {
    console.log("In the GET route?");
    Character.find(function(err, charactersList) { //Calls the find() method on your database
        if (err) return console.error(err); //If there's an error, print it out
        else {
            var newCharactersList = [];
            //console.log(charactersList); //Otherwise console log the characters you found
            for (var i = 0; i < charactersList.length; i++) {
                if (charactersList[i].Name == req.query.q) {
                    newCharactersList.push(charactersList[i]);
                }
            }
            if (req.query.q != "") {
                res.json(newCharactersList);
            }
            else {
                res.json(charactersList);
            }
        }
    });
});

router.delete('/character', function(req, res, next) {
    console.log("In the DELETE route?");
    mongoose.connect('mongodb://localhost/character', function() {
        /* Drop the DB */
        mongoose.connection.db.dropDatabase();
    });
});

module.exports = router;
