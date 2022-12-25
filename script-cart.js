/* cart page*/
let productInCart2 = localStorage.getItem("product-in-cart");
productInCart2 = JSON.parse(productInCart2);

const ContainerEmptyCart = document.querySelector("#empty-cart");
const ContainerProductsCart = document.querySelector("#cart-products");
const ContainerProceduresCart = document.querySelector("#cart-procedures");
const ContainerBuyCart = document.querySelector("#cart-buy");
let buttonsDelete = document.querySelectorAll(".delete-product-cart");
const buttonEmpty = document.querySelector("#cart-procedures-empty");
const ContainerTotal = document.querySelector("#total");
const buttonBuy = document.querySelector("#cart-procedures-buy");


function loadProductsCart() {
    if (productInCart2 && productInCart2.length > 0) {

        ContainerEmptyCart.classList.add("disabled");
        ContainerProductsCart.classList.remove("disabled");
        ContainerProceduresCart.classList.remove("disabled");
        ContainerBuyCart.classList.add("disabled");
    
        ContainerProductsCart.innerHTML = "";
    
        productInCart2.forEach(product => {
    
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = `
                <div class="menu_card">
                    <button class="delete-product-cart" id="${product.id}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <div class="menu_image">
                        <img class="cart-product-image" src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="cart-product-title">
                        <p>
                            <small>Title</small>
                            <p>${product.title}</p>
                        </p>
                    </div>
                    <div class="cart-product-count">
                        <p>
                            <small>Count</small>
                            <p>${product.count}</p>
                        </p>
                    </div>
                    <div class="cart-product-price">
                        <p>
                            <small>Price</small>
                            <p>$${product.price}.00</p>
                        </p>
                    </div>
                    <div class="cart-product-subtotal">
                        <p>
                            <small>Subtotal</small>
                            <p>$${product.price * product.count}.00</p>
                        </p>
                    </div>
                </div>
            `;
    
            ContainerProductsCart.append(div);
        })
    
    } else {
        ContainerEmptyCart.classList.remove("disabled");
        ContainerProductsCart.classList.add("disabled");
        ContainerProceduresCart.classList.add("disabled");
        ContainerBuyCart.classList.add("disabled");
    }

    updateDeleteButton();
    updateTotal();
}

loadProductsCart();

function updateDeleteButton() {
    buttonsDelete = document.querySelectorAll(".delete-product-cart");

    buttonsDelete.forEach(button => {
        button.addEventListener("click", removeFromCart);
    });
}

function removeFromCart(e) {
    const idButton = e.currentTarget.id;
    const index = productInCart2.findIndex(product => product.id === idButton);
    
    productInCart2.splice(index, 1);
    loadProductsCart();

    localStorage.setItem("product-in-cart", JSON.stringify(productInCart2));

}

buttonEmpty.addEventListener("click", emptyCart);
function emptyCart() {
  productInCart2.length = 0;
    localStorage.setItem("product-in-cart", JSON.stringify(productInCart2));
    loadProductsCart();
}


function updateTotal() {
    const totalCalculated = productInCart2.reduce((acc, product) => acc + (product.price * product.count), 0);
    total.innerText = `$${totalCalculated}.00`;
}

buttonBuy.addEventListener("click", buyCart);
function buyCart() {

  productInCart2.length = 0;
    localStorage.setItem("product-in-cart", JSON.stringify(productInCart2));
    
    ContainerEmptyCart.classList.add("disabled");
    ContainerProductsCart.classList.add("disabled");
    ContainerProceduresCart.classList.add("disabled");
    ContainerBuyCart.classList.remove("disabled");
}