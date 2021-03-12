const button = document.getElementById("switch-button");
const video = document.getElementById("video-container");
const preloader = document.getElementById("preloader");

function hidePreloader() {
  preloader.classList.add("hide-preloader");
}

function toggleButton() {
  if (!button.classList.contains("slide")) {
    button.classList.add("slide");
    video.pause();
  } else {
    button.classList.remove("slide");
    video.play();
  }
}

window.addEventListener("load", hidePreloader);
button.addEventListener("click", toggleButton);
