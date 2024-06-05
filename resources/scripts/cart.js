//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now;
//Retrieve cart items from local storage
let savedCartItems = localStorage.getItem("cartItems");
//Convert string to JSON object
let cartItems = JSON.parse(savedCartItems);
//Selecting root element to add cart items
const cartmain = document.querySelector('.cart-items');
cartItems.map(item => {
    let newHtml = `
    <div class="cart-items">
    <div class="cart-item">
    <div class="cart-item-detail">
    <img src=${item.image} alt="test" />
    <p>${item.title}</p>
    
</div>
<div class="cart-item-price">
    <label for="quantity">Quantity</label>
    <input id="quantity" name="quantity" type="text" value=${item.quantity} size="1" readonly />
    <label for="price">Price</label>
    <input id="price" name="price" type="text" value=$${parseInt(item.quantity)*parseInt(item.price)} size="1" readonly />
    <button type="button"><i class="fa fa-trash-o"></i></button>
</div>
</div>
</div>`

    cartmain.innerHTML += newHtml;
})
debugger;
//Calculate total price
const priceElements = document.querySelectorAll('#price');
let totalPrice = 0;
priceElements.forEach(element =>
    totalPrice = totalPrice + parseInt(element.value.replace("$", ""))
);
const totalPriceElement = document.querySelector('#totalprice');
totalPriceElement.value = `$${totalPrice}`;