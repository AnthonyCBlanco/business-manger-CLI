const mysql = require('mysql2/promise');
const user_input = require('./utils/user_input.js')
const Questions = new(user_input)
const inquirer = require('inquirer');
const Connection = require('./utils/database.js');


function start(){   
    inquirer.prompt(Questions.main)
        .then((data) => {
            switch(data.main){
                case 'View All Roles':
                case 'View All Departments': 
                case 'View All Employees':
                    displayDATA(data.main)
                    break                      
                case 'Add An Employee':
                case 'Add Department':
                case 'Add Role':
                    addDATA(data.main)
                    break
                    
                case 'Update Employee Role':
                    updateEmployeeRole()
                    break
            }
        })
    }

function displayDATA(table){
    const Connection = require('./utils/database.js')
    switch(table){
        case 'View All Departments':
            Connection.query('SELECT * FROM department', (err, result) =>{
                if(err) console.log(err)
                console.log(result)
                start()
            })
        break
        case 'View All Roles':
            Connection.query('SELECT * FROM role', (err, result) =>{
                if(err) console.log(err)
                console.log(result)
                start()
            })
        break
        case 'View All Employees':
            Connection.query('SELECT * FROM employee', (err, result) =>{
                if(err) console.log(err)
                console.log(result)
                start()
            })
        break
    }
}

function addDATA(table){
    const Connection = require('./utils/database.js')
    switch(table){
        case 'Add An Employee':
            inquirer.prompt(Questions.add_employee).then((data) => {
                console.log(data)
                Connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?);', [data.add_employee_first_name, data.add_employee_last_name, data.add_employee_id, data.add_employee_manager], (err, result) =>{
                    if(err) console.log(err)
                    console.log(result)
                    start()
                })
            })
        break
        case 'Add Department':
            inquirer.prompt(Questions.add_department).then((data) =>{
                console.log(data)
                Connection.query('INSERT INTO department(name) values(?);', data.add_department, (err, result) =>{
                    if(err) console.log(err)
                    console.log(result)
                    start()
                })
            })
        break
        case 'Add Role':
            inquirer.prompt(Questions.add_role).then((data) =>{
                console.log(data)
                Connection.query('INSERT INTO role(title, salary, department_id) VALUES(?, ?, ?);', [data.add_role, data.add_role_salary, data.add_role_department], (err, result) =>{
                    if(err) console.log(err)
                    console.log(result)
                    start()
                })
            })
        break
    }
}

function updateEmployeeRole(){
    inquirer.prompt(Questions.update_employee_role).then((data) =>{
        console.log(data)
        Connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [data.update_employee_role_id, data.update_employee_id], (err, result) =>{
            if(err) console.log(err)
            console.log(result)
            start()
        })
    })
}

start()