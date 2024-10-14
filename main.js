// !declare variables
const navbarToggle = document.querySelector("[data-js-toggle]");




// !add event listener
navbarToggle.addEventListener("click", () => {
  const isExpanded = navbarToggle.getAttribute("aria-expanded");

  if (isExpanded === "false") {
    navbarToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflowY = "hidden";

  } else {
    navbarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflowY = "";

  }

})

// !close the navigation menu when a Escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navbarToggle.setAttribute("aria-expanded", "false");
  }
})

// !adds a underline when you use your arrow keys to navigate
document.addEventListener("DOMContentLoaded", () => {
  const navbarList = document.querySelector(".navbar-list"),
    navbarItem = navbarList.querySelectorAll("li");
  let currentIndex = 0;

  const updateUnderline = () => {
    for (let i = 0; i < navbarItem.length; i++) {
      navbarItem[i].classList.remove("underline");
    }
    navbarItem[currentIndex].classList.add("underline");
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      currentIndex = (currentIndex + 1) % navbarItem.length;
      updateUnderline();

    } else if (event.key === "ArrowUp") {
      currentIndex = (currentIndex - 1 + navbarItem.length) % navbarItem.length;
      updateUnderline();
    }
  });

  updateUnderline();

})