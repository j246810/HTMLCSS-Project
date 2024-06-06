//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();


//Fetching container to add products
const container = document.querySelector('.container');
//list of products
const products = [
    { productId: 1, image: "resources/images/coffeeForest.jpg", title: "Coffee", description: "Exquisite, Fresh coffee", price: "2.00" },
    { productId: 2, image: "resources/images/winterPancakesCherry.jpg", title: "Pancakes", description: "Fluffy, golden pancakes", price: "4.00" },
    { productId: 3, image: "resources/images/chickenAndMash.jpg", title: "Fried Chicken", description: "Crispy golden fried chicken and Mash Potatoes", price: "7.00" },
    { productId: 4, image: "resources/images/soup.jpg", title: "Vegtable Soup", description: "Savory, hearty vegetable soup delight", price: "4.00" },
    { productId: 5, image: "resources/images/stewSeaport.jpg", title: "Spicy Beef Stew", description: "Rich, hearty beef stew", price: "4.00" }
]
//Mapping products to Products Page
products.map(product => {
    let newHtml = `
    <div class="item-container">
    <img src = ${product.image}>
        <h2>${product.title}</h2>
        <p> ${product.description}</p>
        <div class="price">
        <p> ${product.price}</p>   
        </div> 
        <button class = "addcart" data-id ="${product.productId}">Add to Cart</button>
        
    </div>
`
    container.innerHTML += newHtml;
})

//Cart items
const cartItems = [];
debugger;
//Fetching add to cart button
const btnAddcart = document.querySelectorAll('.addcart');
//Looping through buttons array - queryselectorall returns all buttons having addcart class name
for (let i = 0; i < btnAddcart.length; i++) {
    const element = btnAddcart[i]
    //Click event listener for add to cart button
    element.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let productId = buttonClick.dataset.id;
        let itemFound = false;
        //Items already present in cart
        if (cartItems.length > 0) {
            //Check if the current item is already existing in the cart - if available increment the quantity
            cartItems.forEach(item => {
                if (item.productId == productId) {
                    item.quantity++;
                    itemFound = true;
                }
            });
            //If current item doesn't exist in the cart add it to the cart
            if (itemFound === false) {
                cartItems.push(selectedItem(productId, 1))
                console.log(cartItems);
            }

        }
        //Cart is empty - directly add item to the cart
        else cartItems.push(selectedItem(productId, 1))
        console.log(cartItems);
        let cartItemsString = cartItems;
        //Add cart items to local storage - this is needed to make cart items available in the cart page
        localStorage.setItem("cartItems", JSON.stringify(cartItemsString));
        savedCartItems = localStorage.getItem("cartItems");
    })
}

function selectedItem(productId, quantity) {
    let addedProduct = {
        productId: 0,
        image: "",
        title: "",
        price: 0,
        quantity: 0
    }
    //Loop throught products to find the current selected product by id and fill cart item with product details
    products.forEach(element => {
        if (element.productId == productId) {
            addedProduct = 
            {
                productId: productId,
                image: element.image,
                title: element.title,
                price: element.price,
                quantity: quantity
            }

        }

    });
    return addedProduct;

}

