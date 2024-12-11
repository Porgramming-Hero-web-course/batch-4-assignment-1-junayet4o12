type Person = {
    name: string;
    age: number;
    email: string;
}  // person object type
type Person2 = {
    name: string;
    age: number;
    dateOfBirth: string;
} // person2 object type


const person: Person = {
    name: 'John',
    age: 30,
    email: 'jhon@gmail.com'
} // person object
const person2: Person2 = {
    name: 'John',
    age: 30,
    dateOfBirth: '12-12-1990'
} // person2 object


const validateKeys = <T extends object>(person: T, keys: string[]): boolean => {
    const validKey = keys.map(key => key in person); // checked if key is in person object

    const isAllKeyValid = !validKey.includes(false);
    return isAllKeyValid; // return true if all keys are valid
}



const keys = ['name', 'age', 'email'];
const isValid = validateKeys<Person>(person, keys);
console.log(isValid); // result of person object

const keys2 = ['name', 'age', 'dateOfBirth'];
const isValid2 = validateKeys<Person2>(person2, keys2);
console.log(isValid2); // result of person2 object
