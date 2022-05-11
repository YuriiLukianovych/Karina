const anchors = document.querySelectorAll('[data-link]');
const up = document.querySelector('[data-up]');

// получаем координаты элемента в контексте документа
function getCoords(elem) {
   let box = elem.getBoundingClientRect();

   return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset,
   };
}

for (let anchor of anchors) {
   anchor.addEventListener('click', e => {
      e.preventDefault();
      // отримати значення атрибута href(там id секції) посилання, по якому відбувся клік
      const blockID = anchor.getAttribute('href');
      // отримати достув в DOM до елемента по отриманому id
      const ourElem = document.querySelector(blockID);
      // отримати його координати
      const blockIDcoords = getCoords(ourElem);

      window.scrollTo({
         top: blockIDcoords.top,
         behavior: 'smooth', // плавний скролл
      });
   });
}

up.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth', // плавний скролл
   });
});
let lastScroll = 0;
document.addEventListener('scroll', () => {
   if (getCoords(up).top > 1200) {
      up.classList.remove('is-hidden');
   } else {
      up.classList.add('is-hidden');
   }
});
