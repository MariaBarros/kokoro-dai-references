/*
	Classes in ES6 are just syntatical sugar in Javascript's existing prototype-based inheritance
	It just provides a simple, clean syntaxis to create objects and takes care of inheritance 
*/

// Let's compare the Pre-ES6 way vs the ES6 way
// The Pre-ES6 way
function Person(name, age){
	this.name = name;
	this.age = age;	
}

Person.prototype.greetings = function(){
	console.log(`Greetings!`);
}

const bill = new Person("Bill", 30);
bill.greetings(); // "Greetings!"

// The ES6 way: using the key class
class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greetings(){
		console.log("Greetings!");
	}
}

const bob = new Person("Bob", 20);
// We can view the Person methods
console.log(Person.prototype); // the methods are constructor and greetings
bob.greetings(); // "Greetings!"

// What it does happen if we want to change the greetings method?
// We have to change the method in the Person prototype
Person.prototype.greetings = function(){
	console.log("Now I say something else");
}

bob.greetings(); // "Now I say something else"

// Inheritance
// The Pre-ES6 way:
// Employee inherits from Person
function Employee(name, age, role){
	Person.call(this, name, age);
	this.role = role;
}

// Copy prototype methods from Person
Employee.prototype = Object.create(Person.prototype);
// Declare Employee constructor
Employee.prototype.constructor = Employee;

const employee = new Employee("Bob", 20, "admin");

// The ES6 way
// Super keyword calls functions of an object's parent class
class Employee extends Person{
	constructor(name, age, role){
		super(name, age); // Use supper instead of Person.call. It must be in the first line of the class constructor
		this.role = role;
	}
	sayGreeting(){
		const parentString = super.greetings();
		console.log(`${this.name} says ${parentString}`);
	}
}

const employee = new Employee("Bob", 20, "admin");
employee.sayGreeting(); // "Bob says Now I say something else"
employee.greetings(); // "Now I say something else"

// Another type of method we can have in a class is a static method
// The difference between the regular and the static method is that only the class can invoke the static method; 
// a class instance can't. 
// For example, let's define the static method: router:
class Employee extends Person{
	constructor(name, age, role){
		super(name, age); 
		this.role = role;
	}
	sayGreeting(){
		const parentString = super.greetings();
		console.log(`${this.name} says ${parentString}`);
	}
    static router(){
        return 'employee';
    }
}

const employee2 = new Employee("Carl", 20, "admin");
employee2.sayGreeting(); // "Carl says Now I say something else"
employee2.router(); // "Error employee2.router is not a function"
console.log(Employee.router()); // "employee"
