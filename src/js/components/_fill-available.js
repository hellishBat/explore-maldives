// Fill available height (Fullscreen element)
export const fillAvailable = () => {
  let root = document.documentElement;
  let vh = window.innerHeight;
  root.style.setProperty('--vh', vh + 'px');
}

fillAvailable();

window.addEventListener('resize', () => {
  fillAvailable();
});
