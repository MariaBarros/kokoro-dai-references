//Getting the button by element id                          ` 
const clickableButton = document.getElementById("button1");
  if (clickableButton){
	// Use the same function for responding to click and focus events
	clickableButton.addEventListener("click", btnEventListener);
	clickableButton.addEventListener("focus", btnEventListener);

	function btnEventListener(e){
		console.log(e.type);
	}

	
}