const express = require('express');
const app = express();
const mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;
const database = require('./db/database');
const bodyParser = require('body-parser');
const crud = require('./api/routes-db');

console.log('server.js loaded up!');

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(bodyParser.json());

mongoClient.connect(database.url, function (err, db) {
    if (err) {
        return console.error(err);
    }
    crud(app, db);
});


app.listen(app.get('port'), function () {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});