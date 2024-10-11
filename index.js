//Imports
import { pageLoad } from "./pageload.js";

// Variables and Constants

// Event Listeners

console.log("Page is loaded");
pageLoad();

// CODE REFERENCE [1.a] Chat GPT - Rotating texts
// Code explaination in README file

const texts = ["Hi.", "Hola..", "Bonjour...", "Namaste...."];
let index = 0;

const textElement = document.querySelector(".text");

function changeText() {
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1; // Fades in the new text

    index = (index + 1) % texts.length;
  }, 500);

  // Change text every 3 seconds (or 3000ms)
  setTimeout(changeText, 2500);
}

// Starts the rotation
changeText();

// Active nav link
// CODE REFERENCE [1.d] Chat GPT - Active Links
// Code explaination in README file
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

//Carousel code for images
const images = document.querySelectorAll(".carousel-images img");
let currentIndex = 0;
let interval;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

function startCarousel() {
  interval = setInterval(showNextImage, 3000); // Change image every 3 seconds
}

function stopCarousel() {
  clearInterval(interval);
}

// Start the carousel on page load
startCarousel();

// Pause the carousel on hover
document
  .querySelector(".carousel")
  .addEventListener("mouseenter", stopCarousel);
document
  .querySelector(".carousel")
  .addEventListener("mouseleave", startCarousel);
