"use strict";
const box = document.querySelector(".box1");
const ratingBtn = document.querySelectorAll(".rating__btn");
const submitBtn = document.querySelector(".submit__btn");
const bedge = document.querySelector(".bedge__inner");
const hidden = document.querySelector(".box2");
const back = document.querySelector(".back__btn");

let num = 0;
ratingBtn.forEach((el) => {
  el.addEventListener("click", function () {
    num = this.innerText;
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (num === 0) {
    alert("!!!");
  } else {
    bedge.textContent = num;
    box.classList.add("hidden");
    hidden.classList.remove("hidden");
  }
});

back.addEventListener("click", () => {
  box.classList.remove("hidden");
  hidden.classList.add("hidden");
});
