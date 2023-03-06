// Generating categories listed at the top bar
function generateTopBarCategories(categoryMenuNames, categoriesApiNames) {
  var $middleBar = document.querySelector('#middle-bar-desktop');
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

function generateMobileCategories(categoryMenuNames, categoriesApiNames) {
  var $middleBar = document.querySelector('#middle-bar-mobile');
  for (let i = 0; i < categoryMenuNames.length; i++) {
    var $newAnchor = document.createElement('a');
    var $mobileLinks = document.createElement('div');
    $mobileLinks.className = 'mobile-categories-span';
    $newAnchor.className = 'categories-mobile-bar';
    $newAnchor.href = '/html/category.html';
    $newAnchor.id = categoriesApiNames[i];
    $newAnchor.textContent = categoryMenuNames[i];
    $mobileLinks.appendChild($newAnchor);
    $middleBar.appendChild($mobileLinks);
  }
}

// Show Mobile Menu
function showMenu() {
  var $mobileMenu = document.querySelector('.mobile-menu-container');
  $mobileMenu.classList.remove('hidden');
}

// Generating categories listed at the top bar
generateTopBarCategories(['Men', 'Women', 'Jewelry'], ['men\'s clothing', 'women\'s clothing', 'jewelery']);
generateMobileCategories(['Men', 'Women', 'Jewelry'], ['men\'s clothing', 'women\'s clothing', 'jewelery']);

// Category Options
var $categoryOptions = document.querySelectorAll('.categories-top-bar');
$categoryOptions.forEach(function (individualCategoryLink) {
  individualCategoryLink.addEventListener('click', populateStorage);
});

// Mobile Category Options
var $mobileCategoryOptions = document.querySelectorAll('.categories-mobile-bar');
$mobileCategoryOptions.forEach(function (individualCategoryLink) {
  individualCategoryLink.addEventListener('click', populateStorage);
});

// Show Menu
var $dashMenu = document.querySelector('.right-icon');
$dashMenu.addEventListener('click', showMenu);
