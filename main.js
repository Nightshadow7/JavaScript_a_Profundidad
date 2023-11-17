const logOut = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");

logOut.addEventListener("click", toggleLogOut);

function toggleLogOut() {
  menu.classList.toggle("inactive");
}
