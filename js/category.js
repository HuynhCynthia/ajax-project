
// Generating large category image banner
function categoryWelcomeTile(categoryId) {
  var $backgroundDiv = document.querySelector('.category-background-image');
  var $imgCategory = document.createElement('img');
  $imgCategory.alt = 'picture of category chosen';
  $imgCategory.className = 'category-title-image';
  $imgCategory.src = '/images/category-images/' + categoryId + '.jpg';
  $backgroundDiv.appendChild($imgCategory);
}

// Create DOM tree of category product list
function listCategoryProducts(categoryId) {
  var categoryArray = new XMLHttpRequest();
  categoryArray.open('GET', 'https://fakestoreapi.com/products/category/' + categoryId);
  categoryArray.responseType = 'json';
  categoryArray.addEventListener('load', function () {
    var $categoryTile = document.querySelector('.category-tile');
    var $divCategory = document.createElement('div');
    $divCategory.className = 'product-tiles-category';
    $categoryTile.appendChild($divCategory);
    for (let i = 0; i < categoryArray.response.length; i++) {
      var imageUrl = categoryArray.response[i].image;
      var $span = document.createElement('span');
      $span.className = 'category-list-item';
      var $img = document.createElement('img');
      $img.setAttribute('data-imageid', categoryArray.response[i].id);
      $img.className = 'category-tile-image';
      $img.src = imageUrl;
      $span.appendChild($img);
      $divCategory.appendChild($span);
    }
    // Add event listener to each product span
    var $productTiles = document.querySelectorAll('.category-list-item');
    $productTiles.forEach(function (individualproduct) {
      individualproduct.addEventListener('click', productStorage);
    });
  });
  categoryArray.send();
}

function productStorage(e) {
  localStorage.setItem('productId', e.target.getAttribute('data-imageid'));
}

categoryWelcomeTile(localStorage.getItem('categoryId'));
listCategoryProducts(localStorage.getItem('categoryId'));
