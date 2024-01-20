const inquirer = require('inquirer')

//
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
        }
    ]
    update_employee_role = [
        {
            type: 'input',
            message: 'Please Enter The ID or Full Name Of the Employee',
            name: 'update_employee'
        }
    ]
    
}
