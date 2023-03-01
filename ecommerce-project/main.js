
// Generating categories listed at the top bar
function generateTopBarCategories(array) {
  var $middleBar = document.querySelector('#middle-bar');
  for (let i = 0; i < array.length; i++) {
    var $newAnchor = document.createElement('a');
    $newAnchor.className = 'categories-top-bar';
    $newAnchor.href = '';
    $newAnchor.textContent = array[i];
    $middleBar.appendChild($newAnchor);
  }
}

// Generating Welcom Tile Content
function backgroundHomeImg(string) {
  var $backgroundImg = document.querySelector('#homepage-background-img');
  $backgroundImg.src = string;
}

function backgroundText(array) {
  var $newWelcomeDiv = document.createElement('div');

  $newWelcomeDiv.className = 'welcome-text';

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      var $newWelcomeText = document.createElement('h3');
      $newWelcomeText.className = 'welcome-decription';
      $newWelcomeText.textContent = array[1];
      $newWelcomeDiv.appendChild($newWelcomeText);
    } else {
      var $newWelcomeTitle = document.createElement('h1');
      $newWelcomeTitle.className = 'welcome-title';
      $newWelcomeTitle.textContent = array[0];
      $newWelcomeDiv.appendChild($newWelcomeTitle);
    }
  }

  $welcomeTile.appendChild($newWelcomeDiv);

  return $newWelcomeDiv;
}

function createShopNowButton(array) {
  var $button = document.createElement('button');
  $button.textContent = array[1];
  array[0].appendChild($button);
}

var $welcomeTile = document.querySelector('.welcome');
generateTopBarCategories(['Men', 'Women', 'Jewelry']);
backgroundHomeImg('/images/woman-orange-edited.png');
var populatedWelcomeDiv = backgroundText(['The Collection is Here', 'From dresses, shirts and jewerly']);
createShopNowButton([populatedWelcomeDiv, 'SHOP NOW']);
/* function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://fakestoreapi.com/products/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone'); */

/* function addData(imgArray) {
  var nextImgId = 1;
  for (let i = 0; i < imgArray.length; i++) {
    var imgValues = {};
    imgValues.imgId = nextImgId;
    imgValues.url = imgArray[i].url;
    imgValues.name = imgArray[i].name;
    nextImgId++;
    data.entries.push(imgValues);
  }
  return data;
}

// Populating Circle Menu
function populateCircles(data) {
  for (let i = 1; i <= data.entries.length; i++) {
    if (i !== 1) {
      var newCircleSpan = createSpan(i);
      $ul.appendChild(newCircleSpan);
    } else {
      newCircleSpan = createSpan(i);
      var $solidId = newCircleSpan.querySelector('#solid-circle');
      $solidId.classList.remove('hidden');
      $ul.appendChild(newCircleSpan);
    }
  }
}

function createSpan(i) {
  var $newSpan = document.createElement('span');
  var $newIconOpen = document.createElement('i');
  var $newIconSolid = document.createElement('i');

  $newSpan.className = 'circle-icon';
  $newIconOpen.setAttribute('data-num', i);
  $newIconOpen.className = 'fa-regular fa-circle';
  $newIconOpen.id = 'open-circle';
  $newIconSolid.setAttribute('data-num', i);
  $newIconSolid.className = 'fa-solid fa-circle hidden';
  $newIconSolid.id = 'solid-circle';

  $newSpan.appendChild($newIconOpen);
  $newSpan.appendChild($newIconSolid);

  return $newSpan;
}

// Circle Switch
function switchCircle(e) {
  e.preventDefault();
  var i = Number(e.target.getAttribute('data-num'));
  $img.src = data.entries[i - 1].url;
  $img.alt = data.entries[i - 1].name;
  for (let j = 0; j < $solid.length; j++) {
    $solid[j].classList.add('hidden');
  }
  $solid[i - 1].classList.remove('hidden');
}

// Arrows Keys
function arrow(e) {
  var srcValue = $img.getAttribute('src');
  for (let i = 0; i < data.entries.length; i++) {
    if (srcValue === data.entries[i].url) {
      var carouselIndex = i;
    }
  }
  if (e.target.id === 'left') {
    carouselIndex--;
  } else {
    carouselIndex++;
  }

  if (carouselIndex > data.entries.length - 1) {
    carouselIndex = 0;
    $img.src = data.entries[carouselIndex].url;
    $img.alt = data.entries[carouselIndex].name;
  } else if (carouselIndex < 0) {
    carouselIndex = data.entries.length - 1;
    $img.src = data.entries[carouselIndex].url;
    $img.alt = data.entries[carouselIndex].name;
  } else {
    $img.src = data.entries[carouselIndex].url;
    $img.alt = data.entries[carouselIndex].name;
  }

  for (let j = 0; j < $solid.length; j++) {
    $solid[j].classList.add('hidden');
  }
  $solid[carouselIndex].classList.remove('hidden');
}

function countdown() {
  var srcValue = $img.getAttribute('src');
  for (let i = 0; i < data.entries.length; i++) {
    if (srcValue === data.entries[i].url) {
      var carouselIndex = i;
    }
  }
  carouselIndex++;

  if (carouselIndex > data.entries.length - 1) {
    carouselIndex = 0;
    $img.src = data.entries[carouselIndex].url;
    $img.alt = data.entries[carouselIndex].name;
  } else {
    $img.src = data.entries[carouselIndex].url;
    $img.alt = data.entries[carouselIndex].name;
  }

  for (let j = 0; j < $solid.length; j++) {
    $solid[j].classList.add('hidden');
  }
  $solid[carouselIndex].classList.remove('hidden');
}

var $ul = document.querySelector('ul');
var $img = document.querySelector('img');
document.addEventListener('DOMContentLoaded', populateCircles(addData(pokemonImgArry)));
var $span = document.querySelectorAll('span');
var $solid = document.querySelectorAll('#solid-circle');
var $left = document.querySelector('.fa-chevron-left');
var $right = document.querySelector('.fa-chevron-right');

$left.addEventListener('click', arrow);
$right.addEventListener('click', arrow);

$span.forEach(function (individualCircle) {
  individualCircle.addEventListener('click', switchCircle);
}); */
