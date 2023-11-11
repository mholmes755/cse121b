/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Michael Holmes";
let currentYear = 2023;
let profilePicture = "images/aboutMePic.png";

/* Step 3 - Element Variables */

// Sets a variable for the id "name" in the HTML page
const nameElement = document.getElementById("name");

// Sets a variable for the id "food" in the HTML page
const foodElement = document.getElementById("food");

// Sets a variable for the id "year" in the HTML page. The # is the needed syntax for the 'quearySelector'
const yearElement = document.querySelector("#year");

// Sets a variable for the element "f the picture block in the HTML page similar to using CSS to access things
//Ex. header font{insert CSS here}
const imageElement = document.querySelector("picture img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute ("alt", `"Profile image of ${fullName}"`);





/* Step 5 - Array */

let favoriteFoods = ["Zupa Tescana", " Arroz con Leche", " Banana Bread", " BLT's", " Curry"];
foodElement.innerHTML = `${favoriteFoods}`;
let anotherFavFood = " Finendeni BBQ";
favoriteFoods.push(anotherFavFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`



