//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now;


//list of products

const container = document.querySelector('.container');
const products = [
    {image:"resources/images/coffeeForest.jpg",title:"Coffee",description:"Exquisite, Fresh coffee",price:"$2.00"},
    {image:"resources/images/winterPancakesCherry.jpg",title:"Pancakes",description:"Fluffy, golden pancakes",price:"$4.00"},
    {image:"resources/images/chickenAndMash.jpg",title:"Fried Chicken",description:"Crispy golden fried chicken and Mash Potatoes",price:"$7.00"},
    {image:"resources/images/soup.jpg",title:"Vegtable Soup",description:"Savory, hearty vegetable soup delight",price:"$4.00"},
    {image:"resources/images/stewSeaport.jpg",title:"Spicy Beef Stew",description:"Rich, hearty beef stew",price:"$4.00"}
]
products.map(product => {
    let newHtml = `
    <div class="item-container">
    <img src = ${product.image}>
        <h2>${product.title}</h2>
        <p> ${product.description}</p>
        <div class="price">
        <p> ${product.price}</p>   
        </div> 
        <button>Add to Cart</button>
    </div>
`
container.innerHTML+=newHtml;
})