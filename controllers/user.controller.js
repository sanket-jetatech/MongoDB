const { getDb } = require('../db');
const mongodb = require("mongodb");

const getAllUsers = (req, res) => {
    try {
        let db = getDb();
        db.collection('Users').find().toArray((err, docs) => {
            res.send(docs);
        });
    } catch (err) {
        res.send(err);
    }
}

const createUser = (req, res) => {
    try {
        let db = getDb();
        let user = req.body;
        db.collection('Users').insertOne(user, (err, result) => {
            res.send("user added successfully!");
        });
    } catch (err) {
        res.send(err);
    }
}

const deleteUser = (req, res) => {
    try {
        let db = getDb();
        let userId = req.params.id;
        db.collection('Users').deleteOne({ _id: mongodb.ObjectId(userId) }, (err, result) => {
            res.send("user deleted successfully!");
        });
    } catch (err) {
        res.send(err);
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}