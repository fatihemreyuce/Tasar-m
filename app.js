const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function openMenu() {
	mobileMenu.classList.remove("translate-x-full");
	document.body.style.overflow = "hidden";
	document.body.style.backgroundColor = "black";
}

function closeMenu() {
	mobileMenu.classList.add("translate-x-full");
	document.body.style.overflow = "auto";
	document.body.style.backgroundColor = "white";
}

mobileMenuButton.addEventListener("click", openMenu);

document.addEventListener("click", (e) => {
	if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
		closeMenu();
	}
});
