const db  = require('../index');

db.collection('Users').forEach(element => {
    console.log(element);
});