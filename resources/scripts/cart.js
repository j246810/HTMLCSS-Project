//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now;

//Retrieve cart items from local storage
let savedCartItems = localStorage.getItem("cartItems");
//Convert string to JSON object
let cartItems = JSON.parse(savedCartItems);
updateCart(cartItems);

//Update cart page with cart items
function updateCart(cartItems) {
    //Selecting root element to add cart items
    const cartmain = document.querySelector('.cart-items');
    //Clearing main section for updated cart items
    cartmain.innerHTML = "";
    if (cartItems.length > 0) {
        //Mapping cartItems with html
        cartItems.map(item => {
            let newHtml = `
            <div class="cart-item">
            <div class="cart-item-detail">
            <img src=${item.image} alt="test" />
            <p>${item.title}</p>
            
            </div>
            <div class="cart-item-price">
                <label for="quantity">Quantity</label>
                <input id="quantity" name="quantity" type="text" value=${item.quantity} size="1" />
                <label for="price">Price</label>
                <input id="price" name="price" type="text" value=$${parseInt(item.quantity) * parseInt(item.price)} size="1" readonly />
                <button class = "deleteItem" data-id ="${item.productId}" type="button"><i class="fa fa-trash-o"></i></button>
            </div>
            </div>`

            cartmain.innerHTML += newHtml;
        })
        attachDeleteEventHandler();
    }
    else{
        cartmain.innerHTML = "<h2>Cart is empty</h2>"
    }
    calculateCartTotal();
}
//Calculate total price
function calculateCartTotal() {
    const priceElements = document.querySelectorAll('#price');
    let totalPrice = 0;
    priceElements.forEach(element =>
        totalPrice = totalPrice + parseInt(element.value.replace("$", ""))
    );
    const totalPriceElement = document.querySelector('#totalprice');
    totalPriceElement.value = `$${totalPrice}`;
}
//Attach on click event handler for all updated cart items' remove button
function attachDeleteEventHandler() {
    const deleteCartitem = document.querySelectorAll('.deleteItem');
    for (let i = 0; i < deleteCartitem.length; i++) {
        const btnDeleteItem = deleteCartitem[i]
        btnDeleteItem.addEventListener('click', deleteCartItem);
    }
}
//Event handler for remove button on click event
function deleteCartItem(event) {
    //Since there is an icon for remove button, the actual click action target is on the icon. 
    let buttonClick = event.currentTarget;
    let productId = buttonClick.dataset.id;
    console.log(`Deleting product id ${productId}`);

    for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        if (element.productId === productId) {
            cartItems.splice(i, 1)
            console.log(`Updated cart items ${cartItems}`);
            updateCart(cartItems);
        }
    }
}
