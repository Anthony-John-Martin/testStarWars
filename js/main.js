function toggleMenu() {
	var menuIcon = document.getElementById("icon-mobile-menu");
	var menuIconClose = document.getElementById("icon-mobile-menu-close");
	var x = document.getElementById("myLinks");
	var topnav = document.getElementById("mobile-nav");
	if (x.style.display === "block") {
		x.style.display = "none";
		menuIcon.style.display = "block";
		menuIconClose.style.display = "none";
		topnav.classList.remove("menu-background");
		topnav.classList.remove("h100");
	} else {
		x.style.display = "block";
		menuIcon.style.display = "none";
		menuIconClose.style.display = "block";
		topnav.classList.add("menu-background");
		topnav.classList.add("h100");
	}
}

var image = document.getElementsByClassName('parallax-image');
new simpleParallax(image, {
	scale: 1.5
});