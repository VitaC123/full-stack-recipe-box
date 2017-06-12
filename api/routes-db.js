const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

module.exports = function (app, db) {
    app.use(bodyParser.json());

    // Create Mongo document
    app.post('/recipes', (req, res) => {
        console.log('POST request being sent to DB');
        db.collection('recipes').insert(req.body, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                var infoSaved = result.ops[0];
                res.send(infoSaved);
            }
        });
    });

    // Read Mongo document
    app.get('/recipes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('recipes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    // Update Mongo document
    app.put('/recipes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };

        db.collection('recipes').update(details, req.body, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send(req.body);
            }
        });
    });

    // Delete Mongo document
    app.delete('/recipes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('recipes').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
};
