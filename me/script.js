let state = "CLOSE";
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  if (state === "CLOSE") {
    state = "OPEN";
    document.getElementById("menu").classList.add("open");
  }
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
  if (state === "OPEN") {
    state = "CLOSE";
    document.getElementById("menu").classList.remove("open");
  }
});
