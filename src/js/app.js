const Person = require('./Person');

function greetings(person) {
    console.log(`Hello ${person.getName()}`);
}
const p = new Person('Marcos');
greetings(p);

// test
