// Author: Aaron Carrigan
// Date: 03/05/2023
// JavaScript for a recipe website that uses the Spoonacular API to search for recipes.
// The website is located at https://www.thecarrigan.com

//Spoontacular API Recipe Search
const apiKey = '0db351a970e1413b9ffb8d3e823aea03';
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('recipe-list');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const searchInput = document.getElementById('search-input');

  // Get the search query from the input field
  const searchQuery = searchInput.value;

  // Make an API request to the Spoonacular API's recipe search endpoint
  fetch(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`)
  .then(response => response.json())
  .then(data => {obj = data;})
  .then(data => console.log(obj))
  .then(data => handleResults(obj))
  .catch(error => console.log(error));
});

function handleResults(data) {

  // Clear any existing results from the results container
  resultsContainer.innerHTML = '';

  // Process the search results and display them on the webpage
  data.results.forEach(result => {
    const recipe = document.createElement('article');
    recipe.classList.add('recipe');
  
    const title = document.createElement('h3');
    title.textContent = result.title;
  
    const anchor = document.createElement('a');
    anchor.href = `${result.sourceUrl}`;
  
    const image = document.createElement('img');
    image.src = `https://spoonacular.com/recipeImages/${result.image}`;
  
    anchor.appendChild(image); // Add the image as a child of the anchor element
    recipe.appendChild(title); // Add the title as a child of the recipe element
    recipe.appendChild(anchor); // Add the anchor with the image inside it to the recipe element
  
    resultsContainer.appendChild(recipe);
  });
}
// End of Spoonacular API Recipe Search

// Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");
    setActiveTab(tabId);
  });
});

// Set the active tab to tabId activated by the event listener
function setActiveTab(tabId) {
  tabs.forEach(tab => {
    if (tab.getAttribute("data-tab") === tabId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  tabContents.forEach(content => {
    if (content.getAttribute("data-tab") === tabId) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}
// End of Tabs