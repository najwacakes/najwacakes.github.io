// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika shop 2 di klik
document.querySelector("#shop-2").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const shop2 = document.querySelector("#shop-2");

document.addEventListener("click", function (e) {
  if (!shop2.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
