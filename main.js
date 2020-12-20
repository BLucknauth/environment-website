//this function anchors the navbar when the user scrolls
window.onscroll = function() {anchoredNav()};

let earthLeft = document.querySelector("#earthLeft");
let earthRight = document.querySelector("#earthRight");

//these functions change the two earth images to different 
//images when moused over, then changes them back when
//moused out
earthLeft.addEventListener("mouseover", changeImageLeft);
earthLeft.addEventListener("mouseout", changeImageBack);
earthRight.addEventListener("mouseover", changeImageRight);
earthRight.addEventListener("mouseout", changeImageBack);


function changeImageLeft() {
	let earthLeft = document.querySelector("#earthLeft");
	earthLeft.src = 'images/SavePlanet.jpg';
	earthLeft.srcset = 'images/SavePlanet2x.jpg 2x';
}

function changeImageRight() {
	let earthRight = document.querySelector("#earthRight");
	earthRight.src = 'images/SavePlanet.jpg';
	earthRight.srcset = 'images/SavePlanet2x.jpg 2x';
}

function changeImageBack() {
	let earthLeft = document.querySelector("#earthLeft");
	let earthRight = document.querySelector("#earthRight");
	earthLeft.src = 'images/earth.png';
	earthRight.src = 'images/earth.png';
	earthLeft.srcset = 'images/earth2x.png 2x';
	earthRight.srcset = 'images/earth2x.png 2x';
}

var navBar = document.getElementById("nav");
var sticky = navBar.offsetTop;
function anchoredNav() {
	if(window.pageYOffset >= sticky) {
		navBar.classList.add("sticky");
	} else {
		navBar.classList.remove("sticky");
	}
}



