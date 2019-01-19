// Destructuring objects
// There are two ways for defining a destructured object
const obj = {"firstName": "Anne", "lastName": "May"};


// The object's keys should match with the variables names or attach to the object a key with a default value
const {firstName, lastName, order = "100"} = obj; // order not match with a object key but it exists into the object with a default value = 100

console.log(firstName, lastName); // Anne May

// Another way for defining
let firstName, lastName;
({firstName, lastName} = obj);

// Using functions
function stateUser({username: "Bob", role}){
	console.log(username);
}

function stateUser2(obj){
	const {username: "Bob", role} = obj;
	console.log(username);
}

stateUser({username: "Steve", role: "Invited"}); // Steve
stateUser2({role: "Invited"}); // Bob

function sayIfValid({prop: s}){
	console.log(s);
}

sayIfValid({prop: "It's valid!"}); // "It's valid!"
sayIfValid({propp: "It's valid!"}); // undefined

// Nested objects
const nestedObj = {
	title: "My address book",
	entries:[
		{
			name: "Bob",
			number: "12345",
			address: "123 Madison St"
		},
		{
			name: "Peter",
			number: "678",
			address: "23 Madison St"
		}
	]
};

const {title, entries} = nestedObj;
console.log(entries); // [object Object] {name: "Bob", number: "12345", address: "123 Madison St"}
// If we want to show the address value of all elements of entries:
for(const {name, address} of entries){
	console.log(`Name: ${name}, address: ${address}`);
}

// What about if we want to extract a value from de entries object?
// For example, we want to show the address value. So, we define 
const {title, entries: [{address}]};

// Now, if we want to show the entries value, the console will show us an error: 'entries is not defined'
console.log(entries);

// But if we want to show the address variable, the console will show us "123 Madison St"
console.log(address);
// Although, the avove only will show the address value of the first element in entries


// Even if we assign new variables
const {title, entries: [{name: nnn, address}]};
console.log(nnn, address) // "Bob" "123 Madison St"

// Another example
const properties = {
	id: "1234",
	quantity: [20,50]
};

const {id, quantity: [, y]} = properties;
console.log(y): // 50