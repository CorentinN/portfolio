var angle = 0;
var HEADER = document.getElementById("header");
var changeBackground = function(){
	angle = angle + .5;

	HEADER.style.backgroundImage = "linear-gradient("+ angle +"deg,  #ff4141, #2727e6)"

	requestAnimationFrame(changeBackground)
}
changeBackground()