let cart = [];
let total = 0;
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    let totalSpan = document.getElementById("total");
    cartList.innerHTML = "";
    total = 0;

    for (let item of cart) {
        let li = document.createElement("li");
        li.textContent = `👜 ${item.name} - ₹${item.price.toFixed(2)}`;
        cartList.appendChild(li);
        total += item.price;
    }

    totalSpan.textContent = `💰️₹${total.toFixed(2)}`;
}

function checkout() {
    alert(`Your Order Is Confirmed! 👌\n💰️ Total Amount: ₹${total.toFixed(2)}\nThanks for Your order!  🙏`);
    cart = [];
    updateCart();
}

updateCart();
