// Fixed header
export const scrollFunction = () => {
  let header = document.querySelector('.header');
  let headerMenu = document.querySelector('.js-header-menu');
  if (document.body.scrollTop > header.scrollHeight || document.documentElement.scrollTop > header.scrollHeight) {
    headerMenu.classList.add('fixed');
  } else {
    headerMenu.classList.remove('fixed');
  }
}

window.addEventListener('scroll', () => {
  scrollFunction();
});

window.addEventListener('load', () => {
  scrollFunction();
});
