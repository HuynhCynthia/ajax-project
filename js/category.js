/* Category Product Page */
function categoryView(e) {
  var category = e.target.getElementById();
  // console.log(category);

  var productArray = new XMLHttpRequest();
  productArray.open('GET', 'https://fakestoreapi.com/products/category/' + category);
  productArray.responseType = 'json';
  productArray.addEventListener('load', function () {
    // console.log(productArray.response);
  });
  productArray.send();
}

var $categoryOptions = document.querySelectorAll('.categories-top-bar');
$categoryOptions.forEach(function (individual) {
  individual.addEventListener('click', categoryView);
});
