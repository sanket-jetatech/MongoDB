const MongoClient = require('mongodb').MongoClient;
const { url } = require('./config/db.config');
let _db;

module.exports = {
    connectToServer: function () {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            _db = client.db();
            console.log(`Connected to ${url}`);
        });
    },

    getDb: function () {
        return _db;
    }
};