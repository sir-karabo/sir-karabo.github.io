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
          primary: "#1a202c", // Dark gray
          secondary: "#2d3748", // Slightly lighter gray
          accent: "#4a5568", // Accent color
          highlight: "#2b6cb0", // Blue highlight
          red: "#f56565", // Red color for sections
          yellow: "#ecc94b", // Yellow color for sections
          green: "#48bb78", // Green color for sections
          blue: "#4299e1", // Blue color for sections
          purple: "#9f7aea", // Purple color for sections
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
