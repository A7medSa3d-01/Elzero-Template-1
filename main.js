let links = document.querySelector(".header .links");
let linksUl = document.querySelector(".header .links ul");

function handler() {
  if(linksUl.style.display === "none") {
    linksUl.style.display = "block"
  }else {
    linksUl.style.display = "none"
  }
};

links.addEventListener("click", handler)