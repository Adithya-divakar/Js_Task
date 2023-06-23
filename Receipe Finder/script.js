const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const recipeContainer = document.getElementById('recipe-container');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchValue = searchInput.value;
    searchRecipes(searchValue);
});

function searchRecipes(ingredient) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.example.com/recipes?ingredient=${ingredient}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            recipeContainer.innerHTML = '';

            if (data.length === 0) {
                recipeContainer.innerHTML = '<p>No recipes found.</p>';
            } else {
                data.forEach(recipe => {
                    const recipeCard = createRecipeCard(recipe);
                    recipeContainer.appendChild(recipeCard);
                });
            }
        })
        .catch(error => {
            console.log('Error fetching recipes:', error);
            recipeContainer.innerHTML = '<p>Failed to fetch recipes.</p>';
        });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.title;
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = recipe.title;
    card.appendChild(title);

    const ingredients = document.createElement('p');
    ingredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
    card.appendChild(ingredients);

    const instructions = document.createElement('p');
    instructions.textContent = `Instructions: ${recipe.instructions}`;
    card.appendChild(instructions);

    return card;
}
