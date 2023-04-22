// values are stored in the stack

const name="krishna"
const age=27

// Reference values are stored in heap

const person={
    name:'krishna',
    age:26
}

let newName=name;

newName="koitty"
let newPerson=person;
person.name="new Person"

console.log(name,newName)
console.log(person,newPerson)