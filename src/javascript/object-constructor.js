/* With OOP (Object Oriented Programming) the basic idea is to use objects to represent real world things. 
   Objects have own properties and functions (methods), and can contain data and other code to represent info about you're trying to model.
   Data and methods inside the object are encapsulated.
   Javascript is dynamic and does not provide a traditional class implementation per se. 
   In Javascript we can define a "class" declaring a function. For example:
*/

function Ship(){
  this.floats = true;
  this.material = "steel";
  this.whatAmI = function(){
    console.log(this.material);
  }
}

// Now, in order to use this function we do the instanciating

const myShip = new Ship();
myShip.whatAmI();

// When the instance is created, all the properties and methods are copied(!!!) over to the instance.
// Javascript inheritance is prototype based. 
// Each objetc has a private property called the prototype, and the prototype can have a prototype of its own. 
// An example of this is a json object:


const myObj = {a: 1, b: 2};
console.log(myObj.valueOf()); // [object Object]{a: 1, b: 2}


// Let's see the above example:
// Does myObject have a method called valueOf()? **NO**
// Does Object prototype have a method called valueOf()? **YES**
// Another example:

const myString = "hello";
console.log(myString.charAt(0)); // "h"
console.log(myString.valueOf()); // "hello"


// Does myString have a method called valueOf()? **NO**
// Does String prototype have a method called valueOf()? **NO**

// Does Object prototype have a method called valueOf()? **YES**

// In this case, myString inherits from String which inherits from Object.
// Nearly all objects in Javascript are instances of Object which sits in top of the prototype chain.
// For references to Global Objects in Javascript, see [Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects).

// As we said above, Javascript inheritance is prototype based. Let's see the following example: 

function Animal(name, age, breed){
	this.name = name;
	this.age = age;
	this.breed = breed;
}

//And if we want to create a method for getting an animal breed. So, we have two ways for archieving it:

// The first one: defining the method into the constructor 
function Animal(name, age, breed){
	this.name = name;
	this.age = age;
	this.breed = breed;
	this.getBreed = function(){
		console.log(`My breed is ${this.breed}`);
	}
}

const dog1 = new Animal("Boby", 3, "Labrador");
console.log(dog1.getBreed()); // "My breed is Labrador"
console.log(dog1.hasOwnProperty("getBreed")); // false
console.log(Animal.hasOwnProperty("getBreed")); // true

// The second one: Defining the method into its prototype
function Animal(name, age, breed){
	this.name = name;
	this.age = age;
	this.breed = breed;
}

Animal.prototype.getBreed = function(){
	console.log(`My breed is ${this.breed}`);
}

const dog2 = new Animal("Boby", 3, "Labrador");
console.log(dog2.getBreed()); // "My breed is Labrador"
console.log(dog2.hasOwnProperty("getBreed")); // false
console.log(Animal.hasOwnProperty("getBreed")); // false
console.log(Animal.prototype.hasOwnProperty("getBreed")); // true

// As we can see is more efficient to define the method into the prototype than the constructor