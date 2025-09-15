const hamburger = document.querySelector(".toggle");
const navItems = document.querySelector(".mobile-nav");

const toggleNav = () => {
  navItems.classList.toggle("navToggle");
  console.log("clicked");
};
