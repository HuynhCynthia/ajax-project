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

// Generating Welcome Tile Content
function backgroundHomeImg(string) {
  var $backgroundImg = document.querySelector('#homepage-background-img');
  $backgroundImg.alt = 'picture of model';
  $backgroundImg.src = string;
}

generateTopBarCategories(['Men', 'Women', 'Jewelry'], ['men\'s clothing', 'women\'s clothing', 'jewelery']);
backgroundHomeImg('/images/man-blue-edited.png');
