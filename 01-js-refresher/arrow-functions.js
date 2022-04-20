//normal
function printMyName(name) {
    console.log(name);
}
printMyName('Dimka');

//arrow
const printMyNameArrow = (name) => {
    console.log(name);
}
printMyNameArrow('Dimka Arrow');

//without body (if just return smth)
const multiply = (number) => number * 2;
console.log(multiply(2));