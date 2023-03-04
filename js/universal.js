// Generating categories listed at the top bar
function generateTopBarCategories(categoryMenuNames, categoriesApiNames) {
  var $middleBar = document.querySelector('#middle-bar');
  for (let i = 0; i < categoryMenuNames.length; i++) {
    var $newAnchor = document.createElement('a');
    $newAnchor.className = 'categories-top-bar';
    $newAnchor.href = '/html/category.html';
    $newAnchor.id = categoriesApiNames[i];
    $newAnchor.textContent = categoryMenuNames[i];
    $middleBar.appendChild($newAnchor);
  }
}

function populateStorage(e) {
  localStorage.setItem('categoryId', e.target.id);
}

// Generating categories listed at the top bar
generateTopBarCategories(['Men', 'Women', 'Jewelry'], ['men\'s clothing', 'women\'s clothing', 'jewelery']);

// Category Page
var $categoryOptions = document.querySelectorAll('.categories-top-bar');
$categoryOptions.forEach(function (individualCategoryLink) {
  individualCategoryLink.addEventListener('click', populateStorage);
});
