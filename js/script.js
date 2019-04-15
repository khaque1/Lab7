function init(){
//add your javascrip between these two lines of code
 
	var click = document.getElementById("entrybutton");
	click.addEventListener("click", function () {
		var msg = document.getElementById('entryinput').value;
		alert("Kinza Haque: " + msg);
		console.log(msg);
		document.getElementById('textoutput').innerHTML = msg; 
	});
}

window.addEventListener('load', init);