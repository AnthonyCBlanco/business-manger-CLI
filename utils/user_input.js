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
            type: 'input'
            message: ''
        }
    ]

    
}
