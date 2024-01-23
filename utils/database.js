const mysql = require('mysql2')

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1470',
    database: 'employee_db'
})

Connection.connect((err) =>{
    if(err) throw err;
})

module.exports = Connection