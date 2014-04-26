function toColour() {

	var input = document.getElementById('input').value; // get ascii input
	
	var hexOutput = "";
	
	var hexArray = new Array();
	var arrayNum = 0;
	
	// Convert ascii to hex and distribute them appropriately into hexArray
	// Each array element only stores 6 chars as hex colours have 6 chars,
	for (i = 0; i < input.length; i++) {
		hexOutput += input.charCodeAt(i).toString(16);
		if (hexOutput.length >= 6) {
			hexArray[arrayNum] = hexOutput;
			hexOutput ="";
			arrayNum++;
		}
	}
	
	var elem = document.getElementById("bohday"); // css element to change
	
	var percentage = 100 / hexArray.length; // find percentage for columned background
	var percentageAdded = 0;
	
	var style = "linear-gradient(to right, "; // css change
	
	// append to css change eg. linear-gradient(to right,
	// 646667 25%, 646667 25%,
	// 747975 25%, 747975 50%,
	// 626e6d 25%, 626e6d 75%,
	// 776572 25%, 776572 100%) idk if this is correct but it works lol
	for (j=0; j < hexArray.length; j++) {
		style += hexArray[j] + " " + percentage + "%";
		percentageAdded += percentage;
		style += ", " + hexArray[j] + " " + percentageAdded + "%";
		
		if (j != hexArray.length-1 ) {
			style += ", ";
		}
	}
	style += ")";
	
	elem.style.background=style; // change css element
	
	// append "+" to extra hex outputs
	if (hexOutput.length > 0) {
		hexOutput = "+ " + hexOutput;
	}
	
	// append hex output to html
	document.getElementById("junk").innerHTML = hexOutput;
	
	console.log(percentage);
	console.log(style);
	console.log(hexArray);
}