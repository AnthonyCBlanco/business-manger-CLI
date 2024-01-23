const inquirer = require('inquirer')

class Questions {
    main = [
        {
            type:'list',
            choices:['View All Roles', 'View All Departments', 'View All Employees', 'Add Department', 'Add Role', 'Add An Employee', 'Update Employee Role'],
            message: 'What would you like to do',
            name: 'main'
        }
    ] 
    add_department = [
        {
            type: 'input',
            message: 'Please Enter the Department You Would Like to Add',
            name: 'add_department'
        }
    ]
    add_role = [
        {
            type: 'input',
            message: 'Please Enter the Role You Would Like to Add',
            name: 'add_role'
        },
        {
            type: 'input',
            message: 'Please Enter the salary for the role',
            name: 'add_role_salary'
        },
        {
            type: 'input',
            message: 'Please Enter the Role Department ID',
            name: 'add_role_department'
        }
    ]
    add_employee = [
        {
            type: 'input',
            message: 'Please Enter the First Name Of the Employee You Would Like to Add',
            name: 'add_employee_first_name'
        },
        {
            type: 'input',
            message: 'Please Enter the Last Name Of the Employee You Would Like to Add',
            name: 'add_employee_last_name'
        },
        {
            type: 'input',
            message: 'Please Enter the ID of their role',
            name: 'add_employee_id'
        },
        {
            type: 'input',
            message: 'Please Enter the ID of their managers/leave empty if none',
            name: 'add_employee_manager'
        }
    ]
    update_employee_role = [
        {
            type: 'input',
            message: 'Please Enter The ID Of the Employee',
            name: 'update_employee_id'
        },
        {
            type: 'input',
            message: 'Please Enter The ID Of the New Role',
            name: 'update_employee_role_id'
        }
    ]  
}

module.exports = Questions