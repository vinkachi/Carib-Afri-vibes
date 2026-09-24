// ========================================
// CARIB / AFRO VIBES SHOPPING CART
// ========================================

let cart = [];


// ========================================
// ADD PRODUCT TO CART
// ========================================

function addToCart(name, price) {

    const existingProduct = cart.find(
        product => product.name === name
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    openCart();

}


// ========================================
// UPDATE CART
// ========================================

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    if (!cartItems || !cartTotal || !cartCount) {
        return;
    }


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        cartTotal.textContent = "0.00";
        cartCount.textContent = "0";

        return;
    }


    let total = 0;
    let itemCount = 0;


    cartItems.innerHTML = "";


    cart.forEach((product, index) => {

        const productTotal =
            product.price * product.quantity;

        total += productTotal;

        itemCount += product.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h3>${product.name}</h3>

                <p>
                    $${product.price.toFixed(2)}
                    ×
                    ${product.quantity}
                </p>

            </div>


            <div class="cart-item-controls">

                <button
                    onclick="decreaseQuantity(${index})">
                    −
                </button>


                <span>
                    ${product.quantity}
                </span>


                <button
                    onclick="increaseQuantity(${index})">
                    +
                </button>


                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>


            <div class="cart-item-price">

                $${productTotal.toFixed(2)}

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        total.toFixed(2);

    cartCount.textContent =
        itemCount;

}


// ========================================
// INCREASE QUANTITY
// ========================================

function increaseQuantity(index) {

    cart[index].quantity += 1;

    updateCart();

}


// ========================================
// DECREASE QUANTITY
// ========================================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity -= 1;

    } else {

        cart.splice(index, 1);

    }

    updateCart();

}


// ========================================
// REMOVE PRODUCT
// ========================================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ========================================
// OPEN CART
// ========================================

function openCart() {

    const cartSection =
        document.getElementById("cart-section");

    if (!cartSection) {
        return;
    }

    cartSection.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// CHECKOUT
// ========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add a product first."
        );

        return;
    }


    const checkoutSection =
        document.getElementById("checkout-section");

    if (!checkoutSection) {
        return;
    }


    checkoutSection.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// PLACE ORDER
// ========================================

function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    const name =
        document.getElementById("customer-name").value;

    const email =
        document.getElementById("customer-email").value;

    const phone =
        document.getElementById("customer-phone").value;

    const address =
        document.getElementById("delivery-address").value;


    let total = 0;


    let orderHTML = `

        <h3>Order Details</h3>

        <p>
            <strong>Name:</strong>
            ${name}
        </p>

        <p>
            <strong>Email:</strong>
            ${email}
        </p>

        <p>
            <strong>Phone:</strong>
            ${phone}
        </p>

        <p>
            <strong>Delivery Address:</strong>
            ${address}
        </p>

        <hr>

        <h3>Products</h3>

    `;


    cart.forEach(product => {

        const productTotal =
            product.price * product.quantity;

        total += productTotal;


        orderHTML += `

            <p>

                ${product.name}

                ×

                ${product.quantity}

                -

                $${productTotal.toFixed(2)}

            </p>

        `;

    });


    orderHTML += `

        <hr>

        <h3>
            Total:
            $${total.toFixed(2)}
        </h3>

    `;


    document.getElementById(
        "order-details"
    ).innerHTML = orderHTML;


    // Hide checkout

    document.getElementById(
        "checkout-section"
    ).style.display = "none";


    // Hide cart

    document.getElementById(
        "cart-section"
    ).style.display = "none";


    // Show confirmation

    document.getElementById(
        "confirmation-section"
    ).style.display = "block";


    // Clear cart

    cart = [];

    updateCart();

}


// ========================================
// CONTINUE SHOPPING
// ========================================

function continueShopping() {

    document.getElementById(
        "confirmation-section"
    ).style.display = "none";


    document.getElementById(
        "products"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// MOBILE MENU
// ========================================

function toggleMenu() {

    const navMenu =
        document.getElementById("nav-menu");

    if (!navMenu) {
        return;
    }


    navMenu.classList.toggle("active");

}
