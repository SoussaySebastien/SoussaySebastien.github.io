// Mode dark
const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

/* MENU */
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burgerMenu');

burgerMenu.addEventListener('click', function (e) {
  e.preventDefault;
  menu.classList.toggle('active');
  burger.classList.toggle('fa-bars');
  burger.classList.toggle('fa-times');
});

// Mode Loki
const fonts = [
  'Kirang Haerang',
  'Indie Flower',
  'Rye',
  'Amatic SC',
  'Bangers',
  'Fredericka the Great',
  'Comforter',
  'Lobster',
  'Fjalla One',
  'Praise',
  'Teko',
  'Kings',
  'Cookie',
  'Kalam',
  'Black Ops One',
  'Mr Dafoe',
  'Aclonica',
  'Kaushan Script',
  'Cabin Sketch',
  'Are You Serious',
  'Henny Penny'
];

const letters = document.querySelectorAll('.letter');

let count = 0;

const rollIntro = () => {
  letters.forEach(letter => {

    let randomFontIndex = Math.floor(Math.random() * fonts.length);
    let randomFont = fonts[randomFontIndex];

    letter.style.fontFamily = randomFont;
  });
}

let introAnimation = setInterval(function () {
  rollIntro();
  if (count > 9999)
    clearInterval(introAnimation);
  count++;
}, 350);

// Ajouter au clic de mon image d'un effet de hack
document.getElementById('myDrawing').addEventListener('click', function () {
  if (this.src = 'assets/img/SOUSSAY-Sébastien.jpg') {
    this.src = 'assets/img/sombra-skull.gif';
  } else if (this.src = 'assets/img/sombra-skull.gif') {
    this.src = 'assets/img/SOUSSAY-Sébastien.jpg';
  }
});

document.getElementById('imgRound').addEventListener('click', function () {
  if (this.src = 'assets/img/SOUSSAY-Sébastien-laugh.jpg') {
    this.src = 'assets/img/sombra-skull.gif';
  } else if (this.src = 'assets/img/sombra-skull.gif') {
    this.src = 'assets/img/SOUSSAY-Sébastien-laugh.jpg';
  }
});
