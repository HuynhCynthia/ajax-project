/* Category Product Page */
function categoryView(e) {
  // console.log(e.target.id);
  var category = e.target.id;

  var categoryArray = new XMLHttpRequest();
  categoryArray.open('GET', 'https://fakestoreapi.com/products/category/' + category);
  categoryArray.responseType = 'json';
  categoryArray.addEventListener('load', function () {
    // console.log(categoryArray.response);
  });

  /* for (let i = 0; i < categoryArray.length; i++) {

  } */
  categoryArray.send();
}

var $categoryOptions = document.querySelectorAll('.categories-top-bar');
$categoryOptions.forEach(function (individual) {
  individual.addEventListener('click', categoryView);
});
