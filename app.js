const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

let open = false;

const openMenu = () => {
  menu.classList.add("open");
  open = true;
};
const closeMenu = () => {
  menu.classList.remove("open");
  open = false;
};

menuBtn.addEventListener("click", () => {
  console.log(open);
  console.log(menu.classList);
  if (open) {
    closeMenu();
  } else {
    openMenu();
  }
});
