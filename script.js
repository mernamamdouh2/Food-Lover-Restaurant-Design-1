/* NavBar */
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        //document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

/*Search*/
let searchForm = document.querySelector('.search-form');
let searchInput = document.querySelector('.search');

document.getElementById("searchBtn").onclick=function(){
  document.querySelector("[type=search]").classList.toggle("search");
  searchForm.classList.toggle('active');
}
searchInput.onchange = ()=>{
  if (searchInput.value)
  {
    searchForm.setAttribute("action","index.html#"+ searchInput.value);
  }
}
/* NavBar */

/*Animation for all page*/
const sr = ScrollReveal ({
  distance : '45px',
  duration : 2500,
  reset : true,
})

sr.reveal('.home-image',{ delay:250, origin:'left' , easing: 'ease-in-out'})
sr.reveal('.home-text-content',{ delay:250, origin:'right' , easing: 'ease-in-out'})

sr.reveal('.myimageabout',{ delay:250, origin:'left' , easing: 'ease-in-out'})
sr.reveal('.about-text-content',{ delay:250, origin:'right' , easing: 'ease-in-out'})

sr.reveal('.quality-content',{ delay:250, origin:'left' , easing: 'ease-in-out'})
sr.reveal('.qulity-image',{ delay:250, origin:'top' , easing: 'ease-in-out'})

sr.reveal('.gallery-image',{ delay:250, origin:'top' , easing: 'ease-in-out'})

sr.reveal('.food-main-content',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

sr.reveal('.container-products',{ delay:250, origin:'top' , easing: 'ease-in-out'})

sr.reveal('.review_card',{ delay:250, origin:'top' , easing: 'ease-in-out'})

sr.reveal('.team_box',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

sr.reveal('.box',{ delay:250, origin:'top' , easing: 'ease-in-out'})

sr.reveal('.before',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})

sr.reveal('.footer-logo',{ delay:250, origin:'bottom' , easing: 'ease-in-out'})
/*Animation for all page*/


/* header sticky & back to top*/
const backTopBtn = document.querySelector(".linkUp");

backTopBtn.addEventListener("click", e=> {
  window.scrollTo(
    {
      top: 0 ,
      left: 0 ,
      behavior: "smooth"
    }
  );
});

window.addEventListener("scroll", e=> {
    backTopBtn.style.display = window.screenY > 100 ? 'none' : 'block';
});
/* header sticky & back to top*/


/* Loading Page */
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader, 1000);
}
window.onload = fadeOut;
/* Loading Page */


///////////////////////////////////////////////////////////////////// Products/////////////////////////////////////////////////////

// var products;
// var xhr = new XMLHttpRequest();
// xhr.open("get","./menuproducts.json");
// xhr.send();
// xhr.onload = function(){
//   console.log(xhr.readyState);
//   console.log(xhr.status);
//   if(this.readyState == 4 && this.status == 200)
//   {
    
//   // console.log(xhr.readyState);
//   // console.log(xhr.status);
//     products = JSON.parse(this.responseText);
//     let response = "";
//     console.log(products);
//     console.log(response);
//   }
// } ;

const products = [
  {
      id: "menu1",
      title: "chicken burger1",
      image: "images/menu1.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 25.00
  },
  {
      id: "menu2",
      title: "double beef burger1",
      image: "images/menu2.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 30.00
  },
  {
      id: "menu3",
      title: "beef burger",
      image: "images/menu3.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 20.00
  },
  {
      id: "menu4",
      title: "chicken burger2",
      image: "images/menu4.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 20.00
  },
  {
      id: "menu5",
      title: "snacks1",
      image: "images/menu5.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 10.00
  },
  {
      id: "menu6",
      title: "cold meat",
      image: "images/menu6.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 40.00
  },
  {
      id: "menu7",
      title: "shrimp",
      image: "images/menu7.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 45.00  
  },
  {
      id: "menu8",
      title: "crispy chicken",
      image: "images/menu8.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 35.00
  },
  {
      id: "menu9",
      title: "double beef burger2",
      image: "images/menu9.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 30.00
  },
  {
      id: "menu10",
      title: "snacks2",
      image: "images/menu10.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 10.00
  },
  {
      id: "menu11",
      title: "chicken & snacks",
      image: "images/menu11.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 35.00
  },
  {
      id: "menu12",
      title: "fish & shrimp",
      image: "images/menu12.webp",
      category: {
          number: "menu",
          id: "menu"
      },
      price: 50.00
  }
];

const containerProduct = document.querySelector("#container-products");
const buttonsCategories = document.querySelectorAll(".button-cart");
const titleProduct = document.querySelector("#title-product");
let menuBtn = document.querySelectorAll(".menu_btn");
const number = document.querySelector("#number");


function cartsProducts(menuProducts) {

  containerProduct.innerHTML = "";

  menuProducts.forEach(product => {

      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
          <div class="menu_card">
              <div class="menu_image">
                  <img src="${product.image}" alt="${product.title}">
              </div>

              <div class="small_card">
                  <i class="fa-solid fa-heart"></i>
              </div>

              <div class="menu_info">
                  <h2 id="${product.title}">${product.title}</h2>
                  <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda voluptates
                  </p>
                  <h3>$${product.price}.00</h3>
                  <div class="menu_icon">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <a href="#menu" class="menu_btn" id="${product.id}">Order Now</a>
              </div>
          </div>
      `;

      containerProduct.append(div);
  })

  updateMenuBtn();
}

cartsProducts(products);

buttonsCategories.forEach(button => {
  button.addEventListener("click", (e) => {

    buttonsCategories.forEach(button => button.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "all") 
      {
        const productCategory = products.find(product => product.category.id === e.currentTarget.id);
        titleProduct.innerText = productCategory.category.number;
        const productsButton = products.filter(product => product.category.id === e.currentTarget.id);
        cartsProducts(productsButton);
      } 
      else {
        titleProduct.innerText = "All the products";
        cartsProducts(products);
      }

  })
});

function updateMenuBtn() {
  menuBtn = document.querySelectorAll(".menu_btn");

  menuBtn.forEach(button => {
      button.addEventListener("click", addToCart);
  });
}

let productInCart;

let productInCartLs = localStorage.getItem("product-in-cart");

if (productInCartLs) {
  productInCart = JSON.parse(productInCartLs);
  updateNumber();
} else {
  productInCart = [];
}

function addToCart(e) {
  const idButton = e.currentTarget.id;
  const productAdded = products.find(product => product.id === idButton);

  if(productInCart.some(product => product.id === idButton)) {
      const index = productInCart.findIndex(product => product.id === idButton);
      productInCart[index].count++;
  } else {
    productAdded.count = 1;
      productInCart.push(productAdded);
  }

  updateNumber();

  localStorage.setItem("product-in-cart", JSON.stringify(productInCart));
}

function updateNumber() {
  let newNumber = productInCart.reduce((acc, product) => acc + product.count, 0);
  number.innerText = newNumber;
}