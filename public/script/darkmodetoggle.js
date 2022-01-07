const darkToggle = document.querySelector(".dark-mode-toggle");
const logo = document.querySelector(".logo");
const menuToggle = document.querySelector(".menu-toggle");
const main = document.getElementsByTagName("main");

export function darkMode() {
  darkToggle.addEventListener("click", () => {
    const darkIcon = document.querySelector(".darkIcon");
    if (darkIcon.classList.contains("bi-lightbulb")) {
      darkIcon.classList.remove("bi-lightbulb");
      darkIcon.classList.add("bi-moon-fill");
    } else {
      darkIcon.classList.remove("bi-moon-fill");
      darkIcon.classList.add("bi-lightbulb");
    }
    document.body.classList.toggle("dark");
    logo.classList.toggle("dark");
    menuToggle.classList.toggle("dark");
    main[0].classList.toggle("dark");
    darkToggle.classList.toggle("dark");
    console.log(main);
  });
}
