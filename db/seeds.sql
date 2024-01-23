INSERT INTO department (name)
VALUES ("Pharmacy"),
       ("Grocery"),
       ("Clothing"),
       ("OutDoors");

INSERT INTO role ( title, salary, department_id)
VALUES ("Sales_Lead", 45.000, 002);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Anthony", "Blanco", 001, NULL),
       ("Angel", "Green", 001, 001);