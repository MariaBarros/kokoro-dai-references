/*
	A callback function is a function that is passed to another function as a parameter.
	This inner function is called at some point during the execution of the containing function.
	In other words is "called back" at come specified point inside  the containing function's body.
*/

// For example, we have the following functions
function shouldGoFirst(){
	console.log("I should always go first");
}

function shouldGoSecond(){
	console.log("I should always go second");	
}

shouldGoFirst();
shouldGoSecond();

// This is fine if the code is fully syncronous. But it does not always the case.
// Ofter, specially when you're getting a request or waiting for a callback for to do something with that data
// Let's change the shouldGoFirst function

function shouldGoFirst(){
	// Wait for 1 second
	setTimeout(()=>{
		console.log("I should always go first");
	}, 1000);
}

// Now, if we call the functions again
shouldGoFirst();
shouldGoSecond();

// We'll see in the console: "I should always go second" "I should always go first"
// This doesn't work as we expected because the setTimeout function
// Then, we need to change the shouldGoFirst again adding a callback function as a parameter

function shouldGoFirst(callback){
	// Wait for 1 second
	setTimeout(()=>{
		console.log("I should always go first");
		callback();
	}, 1000);
}

// The functions will work as we expected now
shouldGoFirst(shouldGoSecond);


// Validating functions
// Before call a function we can validate the function argument as a function

function shouldGoFirst(callback){
	// Wait for 1 second
	setTimeout(()=>{
		console.log("I should always go first");
		if(callback && typeof(callback) === 'function'){
			callback();
		}else{
			console.log("callback arg is not a function");
		}
	}, 1000);
}

// If we view a common web page we can find another example of callback function in the DOM
// Getting the element
const divMain = document.getElementByID("main");
if(divMain){
	const myButton = divMain.querySelector("button");
	if(myButton){
		myButton.addEventListener("click", function(){
			console.log("clicked");
		});
	}
}