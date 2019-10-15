function square(x) {
    return x * x;
};

console.log(square(3));

// function square can be rewritten as an arrow function show below:

const squareArrow = (x) => {
    return x * x;
};

console.log(square(3));

// but new syntax can have arrow functions rewritten as:

const squareArrow2 = (x) => x * x;

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

// More in-depth arrow functions syntax:
// arugements object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(1, 2, 1000)); // 3 and would still log 1000 as an argument

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

console.log(add(1, 2, 1000)); // Error, arguments undefined.



// 'this' keyword - no longer bound

const user = {
    name: 'Jerel',
    cities: ['Lake Worth', 'Gainesville', 'St. Rosa'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived(); // TypeError cannot read property - 'this' is only accessible to the first function, but not the second.

//With ES6 arrow functions, 'this' is no longer bound. Example shown below:

const me = {
    name: 'Jerel',
    cities: ['Lake Worth', 'Gainesville', 'St. Rosa'],
    printPlacesLived() {
        // instead of forEach we can use the .map() method
        // unlike forEach, the map() method can be altered, affecting each item in an array
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
me.printPlacesLived(); // there are places you don't want to use arrow functions such as the first function in the object, because the first initial 'this' needs to be bound somewhere.

// Challenge area




const multiplier = {
    // array of numbers
    numbers: [2, 4, 6, 7, 8, 90],
    multiplyBy: 3,
    // multiplyBy - single number
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());