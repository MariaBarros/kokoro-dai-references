/*Javascript inheritance is prototype based. Each objetc has a private property called the prototype, and the prototype can have a prototype of its own. 
 Let's see and example:
*/

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

// What about we want to be more specific describing animals. 
// For example, we want to differentiate dogs, cats, etc. 
// So, we can modify Animal constructor and its custom prototype function as follow:

function Animal(name, age){
	this.name = name;
	this.age = age;	
}

// We replace getBread function for makeNoise function
Animal.prototype.makeNoise = function(){
	console.log(`generic animal noise`);
}

// And then, we define Dog that inherits from Animal
function Dog(name, age, breed){
	// Call Animal from Dog context
	Animal.call(this, name, age);	
	this.breed = breed;	
}

// In order to call the Animal prototype methods, 
// we have to copy the Animal prototype into Dog prototype before creating a new dog object
// and we also have to specify the Dog constructor
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// Now, if we want to re define the makeNoise function for Dog objects:
Dog.prototype.makeNoise = function(){
	console.log("Guau!");
}

const barky = New Dog("Barky", 1, "Labrador");
console.log(barky.name); // "Barky"
console.log(barky.makeNoise()); // "Guau!"

// Let's see a complete example for Cat object
function Cat(name, age, coloration){
	// Call Animal from Dog context
	Animal.call(this, name, age);	
	this.coloration = coloration;	
}

Cat.prototype.scratchPost = function(){
	console.log("Cat has scratched the post");
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeNoise = function(){
	console.log("Miau!");
}

const kitty = new Cat("Kitty", 3, "tabby");
kitty.makeNoise(); // "Miau"