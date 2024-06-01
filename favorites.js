const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", function(){
    window.location.href = "index.html";
});

// TODO - create a list of first, middle, and whole names
let retString = localStorage.getItem("favorites");
let retArray = JSON.parse(retString);
let favoritesList = document.getElementById("favorites-list");
if (retArray != null) {
    for (let i = 0; i < retArray.length; i ++) {
    let li = document.createElement("LI");
    li.innerText = retArray[i];
    favoritesList.appendChild(li);
    }
}

// TODO - remove function
/* function removeFromFavorites () {
    localStorage.removeItem(fullName);
    favorites.filter(function (name) {
        return name !== fullName;
    });
} */

// TODO - function to choose a name then takes you back to main page storing that name


