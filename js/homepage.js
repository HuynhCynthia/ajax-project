// Generate DOM tree of homepage welcome text
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

// Generate DOM tree of shop now button on homepage
function createShopNowButton(array) {
  var $button = document.createElement('button');
  $button.textContent = array[1];
  $button.className = 'now-button';
  array[0].appendChild($button);
}

// Query API for product images and populate images for carousel
function carousel(productIdArray, interval) {
  var productArray = new XMLHttpRequest();
  productArray.open('GET', 'https://fakestoreapi.com/products');
  productArray.responseType = 'json';
  productArray.addEventListener('load', function (e) {
    produceCarouselImg(e, productIdArray, interval);
  });

  function produceCarouselImg(e, productIdArray, interval) {
    var $carousel = document.querySelector('.carousel-row');
    var section = 0;

    for (let i = 0; i < productIdArray.length; i++) {
      if (i % interval === 0 && i === 0) {
        var $ul = document.createElement('ul');
        $ul.setAttribute('data-groupid', section);
        $ul.className = 'carousel-group';
        $carousel.appendChild($ul);
        section++;
      } else if (i % interval === 0 && i > 0) {
        $ul = document.createElement('ul');
        $ul.setAttribute('data-groupid', section);
        $ul.className = 'carousel-group hidden';
        $carousel.appendChild($ul);
        section++;
      }

      var $spanImg = document.createElement('span');
      var $carouselGroup = document.querySelector('.carousel-group');
      var $imgProduct = document.createElement('img');
      if (section === 1) {
        $spanImg.className = 'carousel-tile';
        $spanImg.setAttribute('data-spanId', i);
        $imgProduct.setAttribute('data-imageid', i);
        $imgProduct.src = productArray.response[productIdArray[i] - 1].image;
        $imgProduct.alt = productArray.response[productIdArray[i] - 1].title;
        $imgProduct.className = 'carousel-image';
        $spanImg.appendChild($imgProduct);
        $carouselGroup.appendChild($spanImg);
      } else {
        var $carouselNodeList = document.querySelectorAll('.carousel-group');
        $spanImg.className = 'carousel-tile';
        $spanImg.setAttribute('data-spanId', i);
        $imgProduct.setAttribute('data-imageid', i);
        $imgProduct.src = productArray.response[productIdArray[i] - 1].image;
        $imgProduct.alt = productArray.response[productIdArray[i] - 1].title;
        $imgProduct.className = 'carousel-image';
        $spanImg.appendChild($imgProduct);
        $carouselNodeList[section - 1].appendChild($spanImg);
      }
    }

    var $arrows = document.querySelectorAll('.fa-sharp');
    $arrows.forEach(function (individualArrow) {
      individualArrow.addEventListener('click', clickDirection);
    });
  }
  productArray.send();
}

//  Change Carousel View by clicking first or last image
function clickDirection(e) {
  var $ulNodeList = document.querySelectorAll('ul');
  var $hidden = document.querySelector('.hidden');
  var groupId = parseInt($hidden.getAttribute('data-groupid'));
  $hidden.classList.remove('hidden');

  for (let i = 0; i < $ulNodeList.length; i++) {
    if (groupId !== i) {
      $ulNodeList[i].classList.add('hidden');
    }
  }
  clearInterval(nIntervId);
  nIntervId = setInterval(cycle, 2000);
}

// Automatic view change in carousel
function cycle() {
  var $ulNodeList = document.querySelectorAll('ul');
  var $hidden = document.querySelector('.hidden');
  var groupId = parseInt($hidden.getAttribute('data-groupid'));
  $hidden.classList.remove('hidden');

  for (let i = 0; i < $ulNodeList.length; i++) {
    if (groupId !== i) {
      $ulNodeList[i].classList.add('hidden');
    }
  }
}

var $welcomeTile = document.querySelector('.welcome');
var populatedWelcomeDiv = backgroundText(['The Collection is Here.', 'The latest styles.']);
createShopNowButton([populatedWelcomeDiv, 'SHOP NOW']);
carousel([1, 2, 3, 4, 10, 11, 12, 13], 4);
var nIntervId = setInterval(cycle, 3000);
