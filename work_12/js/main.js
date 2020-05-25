var eat = document.getElementById("eat");
eat.onclick=eatt;
var drink = document.getElementById("drink");
drink.onclick=drinkk;
var left = document.getElementById("left")
var right = document.getElementById("right")
var block = "display: block;"
var none = "display: none;"
var bgc = "background-color: grey; color: #fff;"
var bgc2 = "background-color: inherit; color: inherit;"
var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
function eatt(){
	left.setAttribute("style",block)
	right.setAttribute("style",none)
	p1.setAttribute("style",bgc)
	p2.setAttribute("style",bgc2)
}
function drinkk(){
	right.setAttribute("style",block)
	left.setAttribute("style",none)
	p1.setAttribute("style",bgc2)
	p2.setAttribute("style",bgc)
}