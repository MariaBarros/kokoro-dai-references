// Getting a button by element id                          ` 
const clickableButton = document.getElementById("button1");

if (clickableButton){
	// Use the same function for responding to click and focus events
	clickableButton.addEventListener("click", btnEventListener);
	clickableButton.addEventListener("focus", btnEventListener);

	function btnEventListener(e){
		console.log(e.type);
		e.stopPropagation();
		// You also can remove the event listener
		clickableButton.removeEventListener(e.type);
	}	
}


// Event listener for a form
// Getting a form by element id 
const myForm = document.getElementById("myForm");
if(myForm){
	myForm.addEventListener("submit", formEventListener)

	function formEventListener(e){
		e.preventDefault();
	}

}

// Event listener for a DOM content loaded
document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(){
	console.log("DOM Content loaded");
}

// Event listener for load elements like images
window.addEventListener("load", checkImages);

function checkImages(){
	const myImage = document.getElementById("myImage");
	console.log(myImage.offsetWidth, myImage.offsetHeight);
}