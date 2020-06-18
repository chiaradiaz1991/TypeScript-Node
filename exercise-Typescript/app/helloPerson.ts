
import { Person } from './person';

function hello(person: Person) : string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let person: Person = { firstName: "Juana", lastName: "Ana" };

console.log(hello(person));