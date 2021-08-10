const { getDb } = require('../db');

const getAllUsers = (req, res) => {
    let db = getDb();
    db.collection('Users').find().toArray((err, docs) => {
        res.send(docs);
    });
}

module.exports = {
    getAllUsers
}