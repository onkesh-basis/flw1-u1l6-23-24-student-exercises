// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

  // 1. Select the placeholder and update the src.
  // - The image address should be a picture of a place you want to travel to.
  // - Use Google Search, find a photo you want, right-click, and copy the image address.

  placeholder.src = "https://i.pinimg.com/originals/35/4e/7e/354e7e527b9e0f12a8bb686ced450bee.jpg";
});

// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

  // 2. Select the placeholder and update the src.
  // - The image address should be a picture that represents your mood.
  // - Use Google Search, find a photo you want, right-click, and copy the image address.

  placeholder.src = "https://cdn.vectorstock.com/i/1000x1000/34/81/good-mood-template-design-vector-33653481.webp";

});