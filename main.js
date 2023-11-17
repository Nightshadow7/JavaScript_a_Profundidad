const logOut = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const iconmobile= document.querySelector(".menu");
const navmobile = document.querySelector(".mobile-menu");

logOut.addEventListener("click", toggleLogOut);
iconmobile.addEventListener("click", toggleNavMobile);

function toggleLogOut() {
  menu.classList.toggle("inactive");
}

function toggleNavMobile() {
  navmobile.classList.toggle("inactive");
}
