export function close() {
  const menuToogle = document.querySelector(".menu-toggle");
  const navBotLink = document.querySelectorAll(".navBotLink");

  menuToogle.addEventListener("click", () => {
    navBotLink.forEach((element) => {
      element.classList.toggle("show");
    });
  });
}
