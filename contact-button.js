// This file adds functionality to the "contact-button"
const button = document.getElementById("contact-button");
button.addEventListener("click", function () {
  console.log("Click!");
  this.classList.toggle("active");
  const links = document.getElementById("nav-items-expanded");
  if (this.classList.contains("active")) {
    links.style.maxWidth = "500px";
    links.style.opacity = "1";
  } else {
    links.style.maxWidth = "0px";
    links.style.opacity = "0";
  }
});
