// ESERCIZIO 7:
function changeH1Content() {
  document.getElementById('storeName').innerText = "Qui vendiamo Smartphones costosi";
}

// ESERCIZIO 8:
function changeBackgroundColor() {
  document.body.style.backgroundColor = "#f8f8ff";
}

// ESERCIZIO 9:
function changeFooterAddress() {
  document.getElementById('storeAddress').innerText = "Piazza del Colosseo, 00184 Roma, Italia";
}

// ESERCIZIO 10:
function addClassToAmazonLinks() {
  const links = document.querySelectorAll('.amazon-link');
  links.forEach(link => {
      link.classList.add('link-highlighted');
  });
}

// ESERCIZIO 11:
function toggleImagesVisibility() {
  const images = document.querySelectorAll('.tdImage img');
  images.forEach(image => {
      image.classList.toggle('invisible');
  });
}

// ESERCIZIO 12:
function changePriceColor() {
  let prices = document.querySelectorAll('#productsTable td:nth-child(4)');
  for (let i = 0; i < prices.length; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    prices[i].style.color = randomColor;
  }
}

changeH1Content();
changeBackgroundColor();
changeFooterAddress();
addClassToAmazonLinks();
//toggleImagesVisibility(); Ho commentato il testo per far vedere le pics, "scommentando" la funzione fa sparire le immagini. La classe invisible è presente nel css.
changePriceColor();
