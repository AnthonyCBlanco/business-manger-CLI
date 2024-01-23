const mysql = require('mysql2/promise');
const user_input = require('./utils/user_input.js')
const Questions = new(user_input)
const inquirer = require('inquirer');
const { Connection } = require('mysql2');


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
    switch(table)
}

function addNewData(table, newData){
    db.query('INSET INTO ?')
}

start()