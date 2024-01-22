const mysql = require('mysql2/promise');
const user_input = require('./utils/user_input.js')
const Questions = new(user_input)
const inquirer = require('inquirer');
const { Connection } = require('mysql2/typings/mysql/lib/Connection.js');

function start(){   
    inquirer.prompt(Questions.main).then((data) =>{
        console.log(data.main)
        
         mysql.getConnection(
            {
                host: 'localhost',
                user: 'root',
                password: '1470',
                database: 'employer_db'
            },
            console.log(db)
        ).then((conn) =>{
            const res = conn.query('SELECT * FROM role');
            conn.release();
            return res;
        }).then((result) => {
            console.log(result)
            switch(data.main){
                case 'View All Roles':
                   connection.query('SELECT * FROM role', function(err, results){
                    console.log(results)})
                    break
                    
                case 'View All Departments':
                    displayDATA('departments')
                    break
    
                case 'View All Employees':
                    displayDATA('employee')
                    break
    
                case 'Add Department':
                    inquirer.prompt(Questions.add_department).then((data) =>{
                        console.log(data)
                        return data
                    })
                    break
    
                case 'Add Role':
                    inquirer.prompt(Questions.add_role).then((data) =>{
                        console.log(data.add_role)
                        return data
                    })
                    break
    
                case 'Add An Employee':
                    inquirer.prompt(Questions.add_employee).then((data) =>{
                        console.log(data.add_employee)
                        return data
                    })
                    break
                    
                case 'Update Employee Role':
                    inquirer.prompt(Questions.update_employee_role).then((data) =>{
                        console.log(data.update_employee)
                        return data
                    })
                    break
            }
        })
        })

        
}

async function createConnection(){
    const mysql = require('mysql2')
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1470',
        database: 'employer_db'
    })
    const [rows, fields] = await conn.execute('SELECT *')
}

function displayDATA(table){
    db.query('SELECT * FROM ?', table, (err, result) =>{
        if(err) console.log(err)
        return result;
    })
}

function addNewData(table, newData){
    db.query('INSET INTO ?')
}

start()