function toggle_nav_open() {
	document.getElementById('nav-open').style.display="none";
	document.getElementById('nav-close').style.display="inherit";
	document.getElementById('mobile-nav').style.display="inherit";
}
function toggle_nav_close() {
	document.getElementById('nav-open').style.display="inherit";
	document.getElementById('nav-close').style.display="none";
	document.getElementById('mobile-nav').style.display="none";
}