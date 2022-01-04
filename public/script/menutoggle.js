export function close() {
  const menuToogle = document.querySelector(".menu-toggle");

  menuToogle.addEventListener("click", () => {
    const closeToggle = document.querySelectorAll(".menu-toggle span");
    const menuBar = document.querySelector(".navigation");
    closeToggle.forEach((element, index) => {
      element.classList.toggle(`rotate-${index + 1}`);
    });
    menuBar.classList.toggle("show");
  });
}
