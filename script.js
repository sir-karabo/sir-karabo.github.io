//Menu
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
  });
});

//Accordion
const panes = document.querySelectorAll(".pane");
let activePaneIndex = 0;

panes.forEach((pane, index) => {
  pane.addEventListener("click", () => {
    panes[activePaneIndex].classList.remove("active");
    activePaneIndex = index;
    panes[activePaneIndex].classList.add("active");
  });
});

//Accrdion - Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        "red-img": 'url("./images/assets/image-01.jpg")',
        "yellow-img": 'url("./images/assets/image-02.jpg")',
        "green-img": 'url("./images/assets/image-03.jpg")',
        "blue-img": 'url("./images/assets/image-04.jpg")',
        "purple-img": 'url("./images/assets/image-05.jpg")',
        "orange-img": 'url("./images/assets/image-06.jpg")',
        "white-img": 'url("./images/assets/image-07.jpg")',
        "gray-img": 'url("./images/assets/image-08.jpg")',
      },

      colors: {
        gray: {
          900: "#0f1011",
        },
      },

      minHeight: {
        14: "3.5rem",
      },

      minWidth: {
        14: "3.5rem",
      },

      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.2, 1, 0.25, 1)",
      },
    },
  },
};
