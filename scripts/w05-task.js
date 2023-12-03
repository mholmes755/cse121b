/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = {};

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);  
    });

};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.textContent = '';
};
/* sortBy Function */
const sortBy = () => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter)
    {
        case "utah":
        let utahTemples = templeList.filter(temple => temple.location.includes("Utah"));
        displayTemples(utahTemples);
        break;

        case "notutah": 
        let nonUtahTemples = templeList.filter(temple => !temple.location.includes("Utah"));
        displayTemples(nonUtahTemples);
        break;

        case "older": 
        displayTemples(templeList.filter(temple => new Date(temple.dedicated) <new Date(1950, 0, 1)));
        break;

        case "all": 
        displayTemples(templeList)
        break;
    };
};




/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});



getTemples();
// console.log(templeList);