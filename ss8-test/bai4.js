var employees = [{name: "Hanh", age: 20, salary: 1000, role: "Engineer"}, 
                {name: "Nam", age: 25, salary: 2000, role: "QA"}, 
                {name: "Thang", age: 30, salary: 2500, role: "Project Manager"}];

function read(arr) {
    var userID = parseInt(prompt("Enter user id: "));
    console.log(arr[userID]);
}

function create(arr) {
    var newName = prompt("Enter name of new employee: ");
    var newAge = parseInt(prompt("Enter age: "));
    var newSalary = parseInt(prompt("Enter salary: "));
    var newRole = prompt("Enter role: ");
    var newEmployee = {name: newName, age: newAge, salary: newSalary, role: newRole};
    employees.push(newEmployee);
    console.log(employees);
}

function update(arr) {
    var userID = parseInt(prompt("Enter user id to be updated: "));
    var attr = parseInt(prompt("Enter attribute to update: 1=salary, 2=role: "));
    switch (attr) {
        case 1:
            var newSalary = parseInt(prompt("Enter new salary: "));
            arr[userID].salary = newSalary;
            console.log(arr[userID]);
            break;
        case 2:
            var newRole = prompt("Enter new role: ");
            arr[userID].role = newRole;
            console.log(arr[userID]);
            break;
        default:
            break;
    }
}

function rm(arr) {
    var userID = parseInt(prompt("Enter user id to be removed: "));
    if (userID < 0 || userID > arr.length) {
        return "Error"
    }
    arr.splice(userID, 1);
    console.log(arr);
}

while (true) {
    var s = parseInt(prompt("Choose action: 1=read, 2=create, 3=update, 4=delete, 0=quit: "));
    var isQuit = false;
    switch (s) {
        case 1:
            read(employees);
            break;
        case 2:
            create(employees);
            break;
        case 3:
            update(employees);
            break;
        case 4:
            rm(employees);
            break;
        case 0:
            isQuit = true;
            break;
    }
    if (isQuit) {
        console.log("Thanks for using the program");
        break;
    }
}
