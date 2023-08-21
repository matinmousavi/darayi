let user = document.getElementById("user");
let logoutDiv = document.getElementById("log-out");
let navIcon = document.getElementById("icon");
let closeIcon = document.getElementById("close-icon");
let sideBar = document.getElementById("side-bar");

user.addEventListener("click", () => {
  logoutDiv.classList.toggle("hidden");
  logoutDiv.classList.toggle("flex");
});

navIcon.addEventListener("click", () => {
  if (
    navIcon.childNodes[1].childNodes[1].getAttribute("d") ===
    "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  ) {
    sideBar.classList.toggle("right-0");
    sideBar.classList.toggle("-right-96");
    sideBar.classList.toggle("w-full");
    navIcon.childNodes[1].childNodes[1].setAttribute(
      "d",
      "M6 18L18 6M6 6l12 12"
    );
  } else {
    sideBar.classList.toggle("right-0");
    sideBar.classList.toggle("-right-96");
    sideBar.classList.toggle("w-full");
    navIcon.childNodes[1].childNodes[1].setAttribute(
      "d",
      "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    );
  }
});
