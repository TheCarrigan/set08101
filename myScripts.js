/*function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }*/

/*// Get the Spoonacular API key.
const apiKey = "0db351a970e1413b9ffb8d3e823aea03";

// Create a new Spoonacular object.
const spoonacular = new spoonacular(apiKey);

// When the search button is clicked, make a request to the Spoonacular API for the list of recipes that match the search term.
document.getElementById(["search"]).onclick = function() {
  // Get the search term from the input box.
  const searchTerm = document.getElementById("search").value;

  // Make a request to the Spoonacular API for the list of recipes that match the search term.
  spoonacular.searchRecipes(searchTerm, (err, recipes) => {
    if (err) {
      console.error(err);
      return;
    }

    // Loop through the recipes and display them on the website.
    recipes.forEach(recipe => {
      // Create a new HTML element for the recipe.
      const li = document.createElement("li");

      // Set the text of the element to the recipe's title.
      li.textContent = recipe.title;

      // Add the element to the list of recipes.
      document.getElementById("recipes").appendChild(li);
    });
  });
};*/

const apiKey = '0db351a970e1413b9ffb8d3e823aea03';
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('recipes');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the search query from the input field
  const searchQuery = searchInput.value;

  // Make an API request to the Spoonacular API's recipe search endpoint
  fetch(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // Clear any existing results from the results container
      resultsContainer.innerHTML = '';

      // Process the search results and display them on the webpage
      data.results.forEach(result => {
        const recipe = document.createElement('li');
        recipe.classList.add('recipe');

        const title = document.createElement('h3');
        title.textContent = result.title;

        const image = document.createElement('img');
        image.src = `https://spoonacular.com/recipeImages/${result.image}`;

        recipe.appendChild(title);
        recipe.appendChild(image);

        resultsContainer.appendChild(recipe);
      });
    });
});