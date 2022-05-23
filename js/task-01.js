const categoriesItemEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesItemEl.length);
categoriesItemEl.forEach((element) => {
    console.log("Category:", element.querySelector('h2').textContent),
    console.log("Elements:", element.querySelectorAll('li').length)
});

