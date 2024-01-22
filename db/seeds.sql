INSERT INTO department (id, name)
VALUES (001, "Pharmacy"),
       (002, "Grocery"),
       (003, "Clothing"),
       (004, "OutDoors");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Sales_Lead", 45.000, 002);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Anthony", "Blanco", 001, NULL),
       (002, "Angel", "Green", 001, 001);