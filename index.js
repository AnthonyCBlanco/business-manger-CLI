const mysql = require('mysql2');
const user_input = require('./utils/user_input.js')
const Questions = new(user_input)
const inquirer = require('inquirer')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1470',
        database: 'employer_db'
    },
    console.log('Conntected to employer_db')
)
prompt= () => {   
    inquirer.prompt(Questions.main).then((data) => {
        console.log('prompt created')
        switch(data.main){
            case 'View All Roles':
                displayDATA('roles')
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
}
function displayDATA(table){
    db.query('SELECT * FROM ?', table, (err, result) =>{
        if(err) console.log(err)
        console.log(result)
    })
}

function addNewData(table, newData){
    db.query('INSET INTO ?')
}

 function init(){
    console.log
    prompt()   
 }

 init()