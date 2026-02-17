/* Start Header */
let otherLinks = document.querySelector(
  "header .container .nav li:last-of-type"
);
let others = document.querySelector("header .container .nav .others");

let isOpen = false;
otherLinks.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click
  if (isOpen) {
    // If it's open, close it
    others.classList.remove("active");
  } else {
    // If it's closed, open it
    others.classList.add("active");
  }
  isOpen = !isOpen; // Toggle the isOpen flag
});
// when pressed "Esc" close it
document.onkeyup = function (e) {
  if (e.key == "Escape") {
    others.classList.remove("active");
    isOpen = false;
  }
};

document.addEventListener("click", function (event) {
  if (isOpen) {
    others.classList.remove("active");
    isOpen = false;
  }
});

// Prevent the click inside .others from closing it
others.addEventListener("click", function (event) {
  event.stopPropagation();
});
/* End Header */

/* Start Our Skills */

let our_skills = document.querySelector(".our_skills");
let progressSpans = document.querySelectorAll(
  ".our_skills .skill .the-progress span"
);

window.addEventListener("scroll", () => {
  if (window.scrollY > our_skills.offsetTop - 400) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

/* End Our Skills */

/* Start Latest Events */
// Counter Down
let eventDate = new Date("27 Jul 2024 21:00:00").getTime();
let Counter = setInterval(function () {
  let date = new Date().getTime();
  // Get The Diff between now and event time
  let dateDiff = eventDate - date;

  // Get units time
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  // stop time
  if (dateDiff < 0) {
    clearInterval(Counter);
  }
}, 1000);

// Clear Place holder On focus
let eventInput = document.querySelector(
  ".events .subscribe form input[type='email']"
);
eventInput.onfocus = function () {
  if (this.placeholder == "Enter Your Email") {
    this.placeholder = "";
  }
};
eventInput.onblur = function () {
  if (this.placeholder == "") {
    this.placeholder = "Enter Your Email";
  }
};
/* End Latest Events */
/* Start Videos*/
/* Start Videos*/
let lisVideo = document.querySelectorAll(".videos .list ul li");
let imgVideo = document.querySelector(".videos .preview img");
let titleVideo = document.querySelector(".videos .preview .info");

lisVideo.forEach((li) => {
  li.addEventListener("click", function (e) {
    // remove active class from all elements
    lisVideo.forEach((li) => {
      li.classList.remove("active");
    });
    // add class active to the current element
    this.classList.add("active");
    imgVideo.src = this.dataset.img;
    titleVideo.textContent = this.dataset.content;
  });
});

/* End Stats */
let stats = document.querySelector(".stats");
let statsNumber = document.querySelectorAll(".stats .number");

function countStats(stat) {
  let goal = stat.dataset.goal;
  let count = setInterval(function () {
    stat.textContent++;
    if (stat.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
let isCounted = true;
window.onscroll = () => {
  if (window.scrollY > stats.offsetTop - 400) {
    if (isCounted) {
      statsNumber.forEach((stat) => countStats(stat));
      isCounted = !isCounted;
    }
  }
};
/* End Stats */

/* Start Discount   */
let discountImg = [
  "./imgs/discount-background1.jpg",
  "./imgs/discount-background2.jpg",
  "./imgs/discount-background3.jpg",
  "./imgs/discount-background4.jpg",
  "./imgs/discount-background5.jpg",
  "./imgs/discount-background6.jpg",
];
let discount = document.querySelector(".discounts .discount");
let currentIndex = 0;
let discountChangeBackground = setInterval(function () {
  discount.style.backgroundImage = `url(${discountImg[currentIndex]})`;
  currentIndex = (currentIndex + 1) % discountImg.length;
}, 4000);
/* End Discount   */
