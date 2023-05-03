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
  const searchQuery = searchInput.value;

  fetch(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      handleResults(data);
    })
    .catch(error => console.log(error));
});

// Takes out the recipe title, image, and source URL from the data and displays it on the page
function handleResults(data) {
  resultsContainer.innerHTML = '';

  data.results.forEach(result => {
    const recipe = document.createElement('article');
    recipe.classList.add('recipe');

    const title = document.createElement('h3');
    title.textContent = result.title;

    const anchor = document.createElement('a');
    anchor.href = `${result.sourceUrl}`;

    const image = document.createElement('img');
    image.src = `https://spoonacular.com/recipeImages/${result.image}`;

    anchor.appendChild(image);
    recipe.appendChild(title);
    recipe.appendChild(anchor);

    resultsContainer.appendChild(recipe);
  });
}
// End of Spoonacular API Recipe Search

// Spoonacular API Random Recipe Redirect
const randomButton = document.getElementById('random'); // Corrected method name

randomButton.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      randomHandle(data);
    })
    .catch(error => console.log(error));

  function randomHandle(data) {
    // Get the source URL from the fetched data
    const sourceUrl = data.recipes[0].sourceUrl;

    // Redirect to the source URL of the random recipe
    window.location.href = sourceUrl;
  }
});
// End of Spoonacular API Random Recipe Redirect

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
