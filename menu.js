// CART
const menu = () => {
  const menuBtn = document.querySelector(".menuBtn");
  const menuBtnImg = document.querySelector(".menuBtn .menu");
  const sideNav = document.querySelector(".sideNav");

  menuBtn.onclick = function () {
    sideNav.classList.toggle("open");
    const isOpen = sideNav.classList.contains("open");

    menuBtnImg.classList = isOpen
      ? "material-symbols-outlined"
      : "material-symbols-outlined";
  };
};
export default menu;
