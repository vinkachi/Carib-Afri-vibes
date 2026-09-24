// Mobile Menu
function toggleMenu() {

    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");

}


// Shopping Cart
let cart = [];


// Add product to cart
function addToCart(productName, productPrice) {

    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);

    updateCart();

}


// Update cart
function updateCart() {

    // Update cart number
    document.getElementById("cart-count").textContent = cart.length;


    // Get cart container
    const cartItems = document.getElementById("cart-items");


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        document.getElementById("cart-total").textContent = "0.00";

        return;
    }


    // Clear previous items
    cartItems.innerHTML = "";


    let total = 0;


    // Display products
    cart.forEach(function(product, index) {

        total += product.price;

        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <h3>${product.name}</h3>

            <p>$${product.price.toFixed(2)}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(item);

    });


    // Display total
    document.getElementById("cart-total").textContent =
        total.toFixed(2);

}


// Remove product
function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Open cart
function openCart() {

    document.getElementById("cart-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add a product first.");

        return;
    }

    let total = 0;

    cart.forEach(function(product) {

        total += product.price * product.quantity;

    });

    alert(
        "Thank you for shopping with Carib/Afro Vibes!\n\n" +
        "Your order total is $" + total.toFixed(2)
    );

}
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add a product first.");

        return;
    }

    document.getElementById("checkout-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}
function placeOrder(event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert("Your cart is empty.");

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

    cart.forEach(function(product) {

        total += product.price * product.quantity;

    });


    alert(
        "Order received!\n\n" +
        "Customer: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address + "\n\n" +
        "Order Total: $" + total.toFixed(2)
    );

}