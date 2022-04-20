//spread
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

const person = {
    name: 'Dimka'
};
const newPerson = {
    ...person,
    age: 28
}
console.log(newPerson);

//rest
const filter = (...args) => {
    return args.filter(el => el === 2);
}
console.log(filter(1,2, 2, 2, 3,4,5));