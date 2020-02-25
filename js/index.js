$(document).ready(function() {
  //functionality for mobile menu
  const navSlide = () => {
    const burgerIcon = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    burgerIcon.addEventListener("click", () => {
      //Toggle Nav
      burgerIcon.classList.toggle("is-active");
      nav.classList.toggle("nav-active");
    });
  };
  navSlide();

  //adding links to home and contact buttons
  $("#homeBtn").click(() => {
    window.location = "index.html";
  });

  $("#contactBtn").click(() => {
    window.location = "contact.html";
  });

  //adding animation to images on mouseover utilizing animate css classes

  let arr = document.getElementsByClassName("artistImg");

  //iterating through the array of items that getElementsByClassName returns to add the animate css classes on mouseover event
  for (let k = 0; k < arr.length; k++) {
    arr[k].addEventListener("mouseover", function() {
      arr[k].classList.add("animated", "jackInTheBox");
    });
  }

  //iterating through the array of items that getElementsByClassName returns to remove the animate css classes once the animation event is finished
  for (let k = 0; k < arr.length; k++) {
    arr[k].addEventListener("animationend", function() {
      arr[k].classList.remove("animated", "jackInTheBox");
    });
  }
});
