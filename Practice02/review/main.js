var count = 0;
var images = ['images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg', 'images/06.jpg', 'images/07.jpg', 'images/08.jpg', 'images/09.jpg'];
var gif = 'images/loading.gif'
var len = images.length;
var leftButton, rightButton, img, caption;

window.onload = function init() {
	leftButton = document.getElementById("back");
	rightButton = document.getElementById("next");
	img = document.getElementById("display");
	caption = document.getElementById("caption");
}

function reload(count) {
	img.src = images[count];
	caption.innerHTML = "Source: " + images[count];
}


function prevImage() {
	if (count === 0)
		return;

	reload(count -= 1);
	rightButton.classList.remove("disabled");

	if (count === 0)
		leftButton.classList.add("disabled");
}

function nextImage() {
	if (count === len-1)
		return;

	reload(count += 1);
	leftButton.classList.remove("disabled");

	if (count === len-1)
		rightButton.classList.add("disabled");
}


