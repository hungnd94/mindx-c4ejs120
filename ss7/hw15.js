let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function groupByID(usersArr) {
    const resultObj = {};
    for (const eachPerson of usersArr) {
        resultObj[eachPerson.id] = eachPerson;
    }
    return resultObj
}

let usersById = groupByID(users);
console.log(usersById);