{
    type Person = {
        name: string;
        age: number;
        gender: string;
        birthPlace: string;
    } // Person type
    type Bike = {
        name: string;
        price: number;
        color: string;
        model: string;
    } // Bike type
    type GetProperty = <T, Y extends keyof T>(person: T, propertyName: Y) => T[Y]; // GetProperty function type
    const getProperty: GetProperty = (person, propertyName) => {
        return person[propertyName]; // returned the property value
    }

    const person: Person = {
        name: 'John Doe',
        age: 25,
        gender: 'male',
        birthPlace: 'BD'
    }; // person object
    const bike: Bike = {
        name: 'Yamaha',
        price: 200000,
        color: 'black',
        model: '2022'
    } // bike object
    const name = getProperty<Person, 'name'>(person, 'name'); // name property of person object
    const age = getProperty<Person, 'age'>(person, 'age'); // age property of person object

    const bikeColor = getProperty<Bike, 'color'>(bike, 'color'); // color property of bike object
    const bikePrice = getProperty<Bike, 'price'>(bike, 'price'); // price property of bike object
    console.log('Person', name, age); // output of person object
    console.log('Bike', bikeColor, bikePrice);  // output of bike object
} 