function switchOff(){
document.getElementById("bulbImage").src = "images/bulb-go-off-img.png";
document.getElementById("catImage").src= "images/cat-eyes-img.png";
document.getElementById("switchStatus").textContent= "Switch Off";
document.getElementById("switchOn").style.backgroundColor="#22c55e";
document.getElementById("switchOff").style.backgroundColor="#cbd2d9";

}

function switchOn(){
document.getElementById("bulbImage").src = "images/bulb-go-on-img.png"
document.getElementById("catImage").src= "images/cat-img.png"
document.getElementById("switchStatus").textContent= "Switch On"
document.getElementById("switchOn").style.backgroundColor="#cbd2d9";
document.getElementById("switchOff").style.backgroundColor="#e12d39";
}