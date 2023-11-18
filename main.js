// menu log out en la vista desktop
const logOut = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
// menu del navbar en la vista movil
const iconmobile = document.querySelector(".menu");
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

const productList = [
  {
    name: "Bicicleta de montaña",
    price: 120.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
  },
  {
    name: "Zapatillas de running",
    price: 80.0,
    image: "https://images.pexels.com/photos/276518/pexels-photo-276518.jpeg",
  },
  {
    name: "Guantes de boxeo",
    price: 50.0,
    image: "https://images.pexels.com/photos/276519/pexels-photo-276519.jpeg",
  },
  {
    name: "Paleta de pádel",
    price: 100.0,
    image: "https://images.pexels.com/photos/276520/pexels-photo-276520.jpeg",
  },
  {
    name: "Raqueta de tenis",
    price: 70.0,
    image: "https://images.pexels.com/photos/276521/pexels-photo-276521.jpeg",
  },
  {
    name: "Pelota de fútbol",
    price: 20.0,
    image: "https://images.pexels.com/photos/276522/pexels-photo-276522.jpeg",
  },
  {
    name: "Casco de fútbol",
    price: 40.0,
    image: "https://images.pexels.com/photos/276523/pexels-photo-276523.jpeg",
  },
  {
    name: "Paleta de ping pong",
    price: 30.0,
    image: "https://images.pexels.com/photos/276524/pexels-photo-276524.jpeg",
  },
  {
    name: "Raqueta de bádminton",
    price: 60.0,
    image: "https://images.pexels.com/photos/276525/pexels-photo-276525.jpeg",
  },
  {
    name: "Caña de pescar",
    price: 150.0,
    image: "https://images.pexels.com/photos/276526/pexels-photo-276526.jpeg",
  },
  {
    name: "Tablero de surf",
    price: 200.0,
    image: "https://images.pexels.com/photos/276527/pexels-photo-276527.jpeg",
  },
  {
    name: "Casco de bicicleta",
    price: 60.0,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    name: "Lentes de sol deportivos",
    price: 50.0,
    image: "https://images.pexels.com/photos/276529/pexels-photo-276529.jpeg",
  },
  {
    name: "Camiseta deportiva",
    price: 30.0,
    image: "https://images.pexels.com/photos/276530/pexels-photo-276530.jpeg",
  },
  {
    name: "Shorts deportivos",
    price: 20.0,
    image: "https://images.pexels.com/photos/276531/pexels-photo-276531.jpeg",
  },
  {
    name: "Medias deportivas",
    price: 10.0,
    image: "https://images.pexels.com/photos/276532/pexels-photo-276532.jpeg",
  },
  {
    name: "Botella de agua deportiva",
    price: 20.0,
    image: "https://images.pexels.com/photos/276533/pexels-photo-276533.jpeg",
  },
  {
    name: "Toalla de playa",
    price: 30.0,
    image: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg",
  },
  {
    name: "Sombrero de sol",
    price: 20.0,
    image: "https://images.pexels.com/photos/276535/pexels-photo-276535.jpeg",
  },
  {
    name: "Par de calcetines de compresión",
    price: 40.0,
    image: "https://images.pexels.com/photos/276536/pexels-photo-276536.jpeg",
  },
  {
    name: "Reloj deportivo",
    price: 100.0,
    image: "https://images.pexels.com/photos/276537/pexels-photo-276537.jpeg",
  },
  {
    name: "GPS para bicicleta",
    price: 200.0,
    image: "https://images.pexels.com/photos/276538/pexels-photo-276538.jpeg",
  },
];

for (product of productList) {
  const htmlCards = `
    <div class="product-card">
      <img src=${product.image} alt=${product.name}>
      <div class="product-info">
        <div>
          <p>$${product.price}</p>
          <p>${product.name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>
  `;
  const cardContainer = document.querySelector('.cards-container')
  cardContainer.innerHTML += htmlCards;
}

