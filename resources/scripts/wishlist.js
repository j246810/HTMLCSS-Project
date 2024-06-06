//Get the current time and date
const now = new Date();
document.getElementById("datetime").innerHTML = now.toLocaleString();

const mainContainer = document.querySelector(".main-container");
const wishlistItems = [
  {
    image: "resources/images/coffeeForest.jpg",
    title: "Coffee",
    description: "Exquisite, Fresh coffee",
    price: "$2.00",
  },
  {
    image: "resources/images/winterPancakesCherry.jpg",
    title: "Pancakes",
    description: "Fluffy, golden pancakes",
    price: "$4.00",
  },
  {
    image: "resources/images/chickenAndMash.jpg",
    title: "Fried Chicken",
    description: "Crispy golden fried chicken and Mash Potatoes",
    price: "$7.00",
  },
];
wishlistItems.forEach((item) => {
  const wishItem = `
    <div class="wishlist-container">
      <img src = ${item.image}>
      <div class="desc-container">
        <h2>${item.title}</h2>
        <p> ${item.description}</p>
        <div class="price"> 
          <p> ${item.price}</p>   
        </div>
      </div> 
      <button>Remove</button>
    </div>
  `;
  mainContainer.innerHTML += wishItem;
});
