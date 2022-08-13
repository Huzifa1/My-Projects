function showMenu() {
  var menu = document.getElementById("mega-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days p").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours p").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes p").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds p").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressSpans = document.querySelectorAll(
  ".our-skills .container .progress span"
);
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .container .box span");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No
window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 170) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width + "%";
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 320) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let number = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == number) {
      clearInterval(count);
    }
  }, 2000 / number);
}
