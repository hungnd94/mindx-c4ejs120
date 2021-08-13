let john = { name: "John", surname: "Smith", id: 25 };
let pete = { name: "Pete", surname: "Holmes", id: 30 };
let mary = { name: "Mary", surname: "Jane", id: 28 };

let users = [ john, pete, mary ];

function withFullName(person) {
    const fullName = person.name + " " + person.surname;
    return { fullName: fullName, id: person.id}
}

let usersWithFullName = users.map(withFullName);
console.log(usersWithFullName);