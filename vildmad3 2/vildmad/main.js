











const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", () => {
    dropdown.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseout", () => {
    dropdown.querySelector(".dropdown-content").style.display = "none";
  });
});