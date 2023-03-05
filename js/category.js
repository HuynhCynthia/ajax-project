
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
    var $divCategory = document.querySelector('.product-tiles-category');
    $categoryTile.appendChild($divCategory);
    for (let i = 0; i < categoryArray.response.length; i++) {
      var imageUrl = categoryArray.response[i].image;
      var $span = document.createElement('span');
      var $imgDiv = document.createElement('div');
      var $img = document.createElement('img');
      var $productTitle = document.createElement('h1');
      var $price = document.createElement('p');
      var $titlePrice = document.createElement('div');
      $imgDiv.className = 'image-product-category-div';
      $titlePrice.className = 'title-price-category';
      $productTitle.className = 'product-title-category';
      $productTitle.textContent = categoryArray.response[i].title;
      $price.className = 'price-category';
      $price.textContent = '$' + categoryArray.response[i].price;
      $span.className = 'category-list-item';
      $img.setAttribute('data-imageid', categoryArray.response[i].id);
      $img.className = 'category-tile-image';
      $img.src = imageUrl;
      $imgDiv.appendChild($img);
      $span.appendChild($imgDiv);
      $titlePrice.appendChild($productTitle);
      $titlePrice.appendChild($price);
      $span.appendChild($titlePrice);
      $divCategory.appendChild($span);
    }
    clickProduct();

  });
  categoryArray.send();
}

// Add event listener to each product span
function clickProduct() {
  var $productTiles = document.querySelectorAll('.category-list-item');
  $productTiles.forEach(function (individualproduct) {
    individualproduct.addEventListener('click', productStorage);
  });
}

function productStorage(e) {
  localStorage.setItem('productId', e.target.getAttribute('data-imageid'));
}

categoryWelcomeTile(localStorage.getItem('categoryId'));
listCategoryProducts(localStorage.getItem('categoryId'));
