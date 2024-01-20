const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1470',
        database: 'employer_db'
    },
    console.log('Conntected to employer_db')
)
