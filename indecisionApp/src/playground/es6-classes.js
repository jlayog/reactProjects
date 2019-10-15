// class keyword in JSX is usually uppercased first letter like so:

class Person {
// constructor function is used whenever we make a new instance of a class
// you can set defaults for arguments as well like so:
    constructor(name = 'Anonymous', age) {
    //this method refers to the class instance
    this.age = age;
    this.name = name;
    }
    getGreeting() {
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// for a new instance of a class we use the 'new' keyword
// const me = new Person('Jerel Layog');
// console.log(me.getGreeting());
// 
// const other = new Person();
// console.log(other.getGreeting);



// using the 'extends' key, gives all the functionality and identitcal to the Person class, but can also add on to the class without affecting the original
// BUT anything modified from the original into the new class will override the parent class
//example:

class Student extends Person {
    // to add support to major, we need to add a constructor like the class above
    constructor(name, age, major = 'Undecided') {
        // We must call the parent class for this to work, using the key word 'super'
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        //
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}


// Challenge
// Traveler - Person
// Add support for homeLocation
// Override getGreeting
// 1. If there is a homelocation - 'Hi. I am ${name}. I am visiting from ${homeLocation}.
// 2. if there is none - 'Hi I am ${name}.'

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I am from ${this.homeLocation}.`;
        }

        return greeting;
    }
}



const me = new Traveler('Jerel Layog', '25', 'Computer Science', 'Lake Worth');
console.log(me.getGreeting());