let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

function getAverageAge(users) {
    const reducer = (accumulator, currentPerson) => accumulator + currentPerson.age;
    const totalAge = users.reduce(reducer, 0);
    return totalAge/users.length
}

console.log(getAverageAge(users));
