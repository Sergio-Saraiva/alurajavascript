var mysql = require('mysql');
function crateDbConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        passwotd : '',
        database : 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function(){
    return crateDbConnection;
}