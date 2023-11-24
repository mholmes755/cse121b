// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element


// Use foreach to make favorite foods an array and output its contents 
const foodsElement= document.querySelector('#favorite-foods');
function createandAppendFoodItem(food)
{
  let favoriteFood = document/createElement("li");
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.foreach(createandAppendFoodItem)
{}


// Use map() to make favorite foods an array and output its contents 

const foodiesElement= document.querySelector('#favorite-foods');
function mapFooditem(food)
{
  let favoriteFood = document/createElement("li");
  favoriteFood.textContent = food;
  return favoriteFood;
}
const foodListElements = myInfo.favoriteFoods.map(mapFooditem);
foodsElement.innerHTML = foodListElements.join('');
{}
