let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

users.sort(function (person1, person2) {
    return person1.age - person2.age;
});

console.log("After sorting by age");
console.log(users);