# Baby Name Randomizer
#### [Video Demo]([url](https://youtu.be/TJI23U5vilM))
#### Description:
## Project Overview
Baby Name Randomizer serves to help parents-to-be name their baby. Often parents will have a name they like, but can't decide on the middle or first name to go with it. Baby Name Randomizer allows parents to test thousands of names, discovering what they look and sound like when paired together. Users can also save favorite versions of names to reference again when they need help making that most difficult decision.


## Project Pages
### favorites.html
This page hosts the html for the page that displays a list of names that were saved by the user. It uses bootstrap’s navbar to style to top of the page and includes a button to go back to the main page in the navbar. It has a simple ordered list that displays the saved names. As I continue working on this project, this page will also have options to filter the favorite name list by gender, first names, middle names, or full names. More on that in the favorites.js page.

### favorites.js
This page is the javascript code that runs on the favorites.html page. It has an event listener for the “Home” button that take a user back to the main index.html page. It then utilizes localStorage to show a list of names that have been previously saved by the user. Perhaps the most underdeveloped part of my project, I plan to add functions to remove a name from the list as well as functions to filter the favorite name lists by gender and first, middle, or whole name. Additionally, I’d like to add an option where the user can select a name from the favorites list and use it as a starting point when playing with new random names.

### index.html
This page hosts the main page’s html. I chose the default green because green is typically used when creating gender neutral spaces for babies. The page start with the option to select a gender. Once a gender is selected, that button goes away and cards are displayed to select a first, middle, and last name. Then the background color of the navbar and name cards changes to pink for girl, blue for boy, or stays green for gender neutral. The first and middle name cards give the option of creating a list of five random names for the user to pick from. A new list can be generated if the user doesn’t like any of the names or just wants to try other names. The user also has the option of typing a name into the text box in case they already have a name they like. For the last name, the user only has the option of typing a name, since last names are usually not random or chosen by parents. As the user enters and chooses names, the full name appears in the space above the cards, giving the user the chance to see what the baby name would look like, giving it life. Additionally, once the user gets into the name selecting phase, 3 more buttons show up that give the option to change the font of the name, switch the first and middle names, or add the name to their favorites. Finally, the top navbar has options to view the favorites page or start over.

### main.js
This file is the main script page written in javascript. It has all of the functions that index.html needs to run effectively. As I was building this file, I attempted to reduce redundancies wherever possible. One example of this was creating global variables for the different background colors. I also created global variables for the different elements that I would access later on. I did this so I would not need to create them more than once and in case I made a change to the element ID I would only have to update it one time. Below the global variables are the event listener functions. Anytime I wanted to to add an event listener to an element I put it at the top so they would be easy to find. As mentioned above in the favorites pages, I would add functions to main.js to create separate lists for girl, boy, and gender neutral names as well as separate lists for first, middle, and full names. These lists are created in the main.js and stored in localStorage to then be used in the favorites.js script.

### names.js
The names.js page is where I saved arrays with baby names. It has three arrays, one for boy names, one for girl names, and one for gender neutral names. I added these arrays to their own file because I did not want to clutter my main script file. There are over 2,000 names in the file and that was taking up a lot of lines of code.

### style.css
Finally, this is my css file where I wrote all my styling decisions. I used the same styling sheet for both of my html pages so there would be consistency and branding across the pages. I created some variables in the :root element so I could easily update these colors and the changes would apply without having to manually change it it too many places. There are still some styling changes that I need to make so the website is more user-friendly across different platforms.

## Acknowledgments
This was my final project submission for Harvard’s CS50 course. This course gave me the foundation I needed to feel like I can become a successful programing no matter what path I take.

Thank you so my husband for believing in my and pushing me to pursue this passion. Thank you to my children for inspiring me everyday and giving me new ideas.

## Author:
Jessica Vargas

