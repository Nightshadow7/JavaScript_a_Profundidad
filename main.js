// menu log out en la vista desktop
const logOut = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
// menu del navbar en la vista movil
const iconmobile= document.querySelector(".menu");
const navmobile = document.querySelector(".mobile-menu");
// menu del carrito de compras
const carritoCompras = document.querySelector(".navbar-shopping-cart");
const listaItems = document.querySelector(".product-detail");

logOut.addEventListener("click", toggleLogOut);
iconmobile.addEventListener("click", toggleNavMobile);
carritoCompras.addEventListener("click", toggleCartItems);

function toggleLogOut() {
  menu.classList.toggle("inactive");
  listaItems.classList.add("inactive");
}

function toggleNavMobile() {
  navmobile.classList.toggle("inactive");
  listaItems.classList.add("inactive");

}

function toggleCartItems() {
  listaItems.classList.toggle("inactive");
  menu.classList.add("inactive");
  navmobile.classList.add("inactive");

}
