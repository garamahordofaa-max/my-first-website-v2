// ================================
// GARETECH ACADEMY JAVASCRIPT
// ================================


// --------------------------------
// 1. CONTACT FORM
// --------------------------------

const form = document.querySelector("form");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {


  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Remove previous message style
  formMessage.classList.remove("success", "error");

  // Check name
  if (name.length < 2) {
    formMessage.textContent = "Please enter your full name.";
    formMessage.classList.add("error");
    return;
  }

  // Check message
  if (message.length < 10) {
    formMessage.textContent =
      "Please write a message with at least 10 characters.";
    formMessage.classList.add("error");
    return;
  }

  // Successful submission
  formMessage.textContent =
    "Thank you, " + name + "! Your message has been received.";

  formMessage.classList.add("success");

  // Clear the form
  form.reset();
});


// --------------------------------
// 2. MOBILE NAVIGATION
// --------------------------------

const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


// Open and close mobile menu
menuBtn.addEventListener("click", function() {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


// Close menu when a navigation link is clicked
navItems.forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});


// --------------------------------
// 3. SCROLL-TO-TOP BUTTON
// --------------------------------

const topBtn = document.querySelector("#top-btn");


// Show button after scrolling
window.addEventListener("scroll", function() {

  if (window.scrollY > 300) {

    topBtn.classList.add("show");

  } else {

    topBtn.classList.remove("show");

  }

});


// Return to the top
topBtn.addEventListener("click", function() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
