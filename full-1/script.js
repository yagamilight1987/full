let state = "OPEN";
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  if (state === "OPEN") {
    state = "CLOSE";
    document.getElementById("menu").classList.remove("open");
    document.getElementById("main").classList.remove("open");
    hamburger.classList.remove("open");
  } else if (state === "CLOSE") {
    state = "OPEN";
    document.getElementById("menu").classList.add("open");
    document.getElementById("main").classList.add("open");
    hamburger.classList.add("open");
  }
});
