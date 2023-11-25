/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Michael Holmes",
    photo: "images/aboutMePic.png",
    favoriteFoods: [
        'Beef Stroganaugh',
        'Spaghetti',
        'Honey Garlic Chicken',
        'Strawberry Cheesecake',
        'Steak'
    ],
    hobbies: [
        'Hiking',
        'Dancing',
        'Wrestling',
        'Watching Sports',
        'Reading'
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Morehead City, NC',
        length: '12 years'
    },
    {
        place: 'Waynesboro, VA',
        length: '9 years'
    },
    {
        place: 'Rexburg, ID',
        length: '1 year'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
let imgElement = document.getElementById('photo');
imgElement.src = myProfile.photo;
imgElement.alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})


/* Places Lived DataList */
myProfile.placesLived.forEach(placeObj => {
    let dt = document.createElement('dt');
    dt.textContent = placeObj.place;
    let dd = document.createElement('dd');
    dd.textContent = placeObj.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    
})
