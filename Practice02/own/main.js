var cnt = 1;

function previousImage(pre) {
	var img = document.getElementById("display");

	if (cnt == 3) {
		var next = document.getElementById("next");
		next.disabled = false;
		next.classList.remove("disabled");
	}
	cnt--;
	var str = "images/pizza0" + cnt + ".jpg";
	img.src = str;
	document.getElementById("source").innerHTML = "source: " + str;
	if (cnt <= 1) {
		pre.setAttribute("disabled", true);
		pre.classList.add("disabled");
		pre.getElementsByClassName("preview")[0].style.display = "none";
	}
	else {
		preview(pre);
	}
}

function nextImage(next) {
	var img = document.getElementById("display");

	if (cnt == 1) {
		var pre = document.getElementById("pre");
		pre.disabled = false;
		pre.classList.remove("disabled");
	}
	cnt++;
	var str = "images/pizza0" + cnt + ".jpg";
	img.src = str;
	document.getElementById("source").innerHTML = "source: " + str;
	if (cnt >= 3) {
		next.setAttribute("disabled", true);
		next.classList.add("disabled");

		next.getElementsByClassName("preview")[0].style.display = "none";
	}
	else {
		preview(next);
	}
}

function preview(btn) {
	var pv = btn.getElementsByClassName("preview");
	if (btn.id == "next") {
		var tmp = cnt + 1;
	}
	else {
		var tmp = cnt - 1;
	}
	pv[0].style.backgroundImage = "url('images/pizza0"+tmp+".jpg')";
	pv[0].style.display = "block";
}

function preview_end(btn) {
	var pv = btn.getElementsByClassName("preview");
	pv[0].style.display = "none";
}