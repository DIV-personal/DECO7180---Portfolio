//Imports
import { pageLoad } from "./pageload.js";

// Variables and Constants

// Event Listeners

console.log("Page is loaded");
pageLoad();

//Active nav link
// CODE REFERENCE [1.d] Chat GPT - Active Links
// Code explaination in README file
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
