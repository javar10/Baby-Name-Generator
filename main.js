
// TODO import names from helper file
import { boyNames, girlNames, unisexNames } from "./names.js";

// global variables
let firstName = "";
let middleName = "";
let lastName = "";
let fullName = document.getElementById("full-name");
let fullNameVar = "";
const boyColor = "#BCF0FF";
const girlColor = "#FFD5E7";
const neutralColor = "#DFEFDF";


// set element constants from HTML
const genderElement = document.getElementById("gender");
const fullNameDiv = document.getElementById("full-name-div");
const fontElement = document.getElementById("name-font");
const firstTyped = document.getElementById("first-typed");
const middleTyped = document.getElementById("middle-typed");
const lastTyped = document.getElementById("last-typed");
const firstTypedBtn = document.getElementById("first-typed-btn");
const middleTypedBtn = document.getElementById("middle-typed-btn");
const lastTypedBtn = document.getElementById("last-typed-btn");
const firstRandomBtn = document.getElementById("first-random-btn");
const middleRandomBtn = document.getElementById("middle-random-btn");
const firstNewListBtn = document.getElementById("first-new-list");
const middleNewListBtn = document.getElementById("middle-new-list");
const startOverBtn = document.getElementById("start-over");
const switchNamesBtn = document.getElementById("switch-names");
const addToFavoritesBtn = document.getElementById("add-to-favorites");
const viewFavoritesBtn = document.getElementById("view-favorites");
const nameOptionsDivBtns = document.getElementById("name-options-div");
const nameCardsDiv = document.getElementById("name-cards-div");
const h1 = document.getElementById("h1");
const cards = document.querySelectorAll(".card");
const nav = document.getElementById("main-navbar");
const nav2 = document.getElementById("name-options-navbar");
const firstRandomDiv = document.getElementById("first-random-div");

// add event listeners
genderElement.addEventListener("change", selectGender);
fontElement.addEventListener("change", fontChange);
firstTyped.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        selectTypedName('first');
        firstTyped.blur();
    }
});
middleTyped.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        selectTypedName('middle');
        middleTyped.blur();
    }
});
lastTyped.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        selectTypedName('last');
        lastTyped.blur();
    }
});
firstTypedBtn.addEventListener("click", () => {selectTypedName('first') });
middleTypedBtn.addEventListener("click", () => {selectTypedName('middle') });
lastTypedBtn.addEventListener("click", () => {selectTypedName('last') });
firstRandomBtn.addEventListener("click", () => {selectRandomName('first') });
middleRandomBtn.addEventListener("click", () => {selectRandomName('middle') });
firstNewListBtn.addEventListener("click", () => {generateNewList('first') });
middleNewListBtn.addEventListener("click", () => {generateNewList('middle') });
startOverBtn.addEventListener("click", startOver);
switchNamesBtn.addEventListener("click", switchNames);
addToFavoritesBtn.addEventListener("click", addToFavorites);
viewFavoritesBtn.addEventListener("click", function(){
    window.location.href = "favorites.html";
});


// Select gender and set variable
function selectGender() {
    const gender = genderElement.value;
    genderElement.style.display = "none";
    nameCardsDiv.style.display = "flex";
    if (gender == "boy") {
        changeBackgroundColor(gender);
        return boyNames;
    } else if (gender == "girl") {
        changeBackgroundColor(gender)
        return girlNames;
    } else if (gender == "unisex") {
        changeBackgroundColor(gender)
        return unisexNames;
    }
}


// Change background color
function changeBackgroundColor(gender) {
    let color = neutralColor;
    if (gender == "boy") {
        color = boyColor;
    } else if (gender == "girl") {
        color = girlColor;
    } else if (gender == "unisex") {
        color = neutralColor;
    }
    h1.style.backgroundColor = color;
    nav.style.backgroundColor = color;
    nav2.style.backgroundColor = color;
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = color;
    }
}


// Display full name
function setFullName() {
    fullNameVar = firstName + " " + middleName + " " + lastName;
    fullName.innerHTML = fullNameVar;
    fullNameDiv.style.display = "block";
    nameOptionsDivBtns.style.display = "inline";
    addToFavoritesBtn.innerHTML = "Add to Favorites";
}


// Change name font
function fontChange() {
    let font = fontElement.value;
    fullName.style.fontFamily = font;
}


// User types a name
function selectTypedName(name) {
    let typedName = document.getElementById(name + "-typed").value;
    const genderList = selectGender();
    if (genderList == boyNames || genderList == girlNames || genderList == unisexNames) {
        if (name == "middle") {
            middleName = typedName.charAt(0).toUpperCase() + typedName.slice(1);;
        }
        else if (name == "first") {
            firstName = typedName.charAt(0).toUpperCase() + typedName.slice(1);
        }
        else if (name == "last") {
            lastName = typedName.charAt(0).toUpperCase() + typedName.slice(1);;
        }

        setFullName();
        document.getElementById(name + "-typed").value = "";
    } else {
        alert("Choose gender");
        genderElement.style.display = "inline";
    }
}


// Display a list of 5 random names
function generateRandomNameList(list, name) {
    const randomList = document.getElementById(name + "-random-list");
    const names = [];
    for (let i = 0; i < 5; i++) {
        let randomName = "";
        let li = document.createElement("LI");
        do {
            randomName = list[Math.floor(Math.random() * list.length)];
        } while (names.includes(randomName));
        li.innerHTML = randomName;
        li.class = "randomNamesLI";
        li.id = name + i;
        randomList.appendChild(li);
        names.push(randomName);
    }
}


// Choose a name from the random list
function selectRandomName(name) {
    const list = document.getElementById(name + "-random-div");
    const listBtn = document.getElementById(name + "-random-btn");
    const genderList = selectGender();
    if (genderList == boyNames || genderList == girlNames || genderList == unisexNames) {
        list.style.display = "block";
        listBtn.style.display = "none";
        generateRandomNameList(genderList, name);
        for (let i = 0; i < 5; i++) {
            let selectedName = document.getElementById(name + i);
            selectedName.addEventListener("click", function() {
                if (name == "middle") {
                    middleName = selectedName.innerHTML;
                }
                if (name == "first") {
                    firstName = selectedName.innerHTML;
                }
                setFullName();
            });
        }
    }
    else {
        alert("Choose gender");
        genderElement.style.display = "inline";
    }
}

// Get a new list of random names
function generateNewList(name) {
    const randomList = document.getElementById(name + "-random-list");
    const names = [];
    const genderList = selectGender();
    for (let i = 0; i < 5; i++) {
        let randomName = ""
        let li = document.getElementById(name + i);
        do {
            randomName = genderList[Math.floor(Math.random() * genderList.length)];
        } while (names.includes(randomName));
        li.innerHTML = randomName;
        randomList.appendChild(li);
        names.push(randomName);
    }
}

// If "start over" button is clicked, go back to default settings
function startOver() {
    firstName = "";
    middleName = "";
    lastName = "";
    setFullName();
    fontElement.value = "";
    fullName.style.fontFamily = "Brush Script MT";
    genderElement.value = "";
    genderElement.style.display = "inline";
    firstRandomBtn.style.display = "inline";
    middleRandomBtn.style.display = "inline";
    firstRandomDiv.style.display = "none";
    document.getElementById("middle-random-div").style.display = "none";
    addToFavoritesBtn.innerHTML = "Add to Favorites";
    nameOptionsDivBtns.style.display = "none";
    nameCardsDiv.style.display = "none";
    fullNameDiv.style.display = "none";
    for (let i = 0; i < 5; i++) {
        let li = document.getElementById("first" + i);
        if (li != null) {
            li.remove();
        }
    }
    for (let i = 0; i < 5; i++) {
        let li = document.getElementById("middle" + i);
        if (li != null) {
            li.remove();
        }
    }
    changeBackgroundColor("unisex");
}

// Switch first and middle names with a click
function switchNames() {
    let tempName = firstName;
    firstName = middleName;
    middleName = tempName;
    setFullName();
}

// Add names to a list of favorites
// TODO - create separate list of first, middle, and full names
// TODO - create separate boy and girl name lists
function addToFavorites () {
    if (!localStorage.getItem("favorites")) {
        let favorites = [];
        if(!fullNameVar || !fullNameVar.trim()) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            favorites.push(fullNameVar);
            addToFavoritesBtn.innerHTML = "Saved ⭐";
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    } else {
        let retString = localStorage.getItem("favorites");
        let favorites = JSON.parse(retString);
        if(!fullNameVar || !fullNameVar.trim()) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            if (favorites.includes(fullNameVar) == false) {
                favorites.push(fullNameVar);
                addToFavoritesBtn.innerHTML = "Saved ⭐";
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }
}




