// Fixed header
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".js-header-menu");

export const scrollFunction = () => {
  if (
    document.body.scrollTop > header.scrollHeight ||
    document.documentElement.scrollTop > header.scrollHeight
  ) {
    headerMenu.classList.add("fixed");
  } else {
    headerMenu.classList.remove("fixed");
  }
};

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);
