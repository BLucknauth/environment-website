//this function changes the image on the "what you can do page"
//to better fit the website layout based on window size
window.onresize = function() {youImageChange()}; 
youImageChange();

function youImageChange() {
	let youImage = document.querySelector("#youPic");
	let width = window.innerWidth;

	if (width >= 960) {
		youImage.src= 'images/sustainable-cropped.jpg';
		youImage.height= '698';
		youImage.width= '450';
		youImage.srcset= 'images/sustainable-cropped2x.jpg 2x';
	} else {			youImage.src= 'images/sustainable.jpg';
		youImage.height= '349';
		youImage.width= '620';
		youImage.srcset= 'images/sustainable.jpg 2x';
	}
	
}