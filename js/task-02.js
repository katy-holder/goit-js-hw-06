const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItem = ingredients.map(ingredient => {
  const navItemEl = document.createElement('li');

  navItemEl.classList.add('item');

  navItemEl.textContent = ingredient;

  return navItemEl;

});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsItem);
