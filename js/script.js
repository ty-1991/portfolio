// ---- Footer year (all pages) ----
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// ---- Dark mode toggle (all pages) ----
const toggle = document.getElementById("themeToggle");
// STRETCH: apply any saved choice before the page is shown
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
if (toggle) {
  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    // STRETCH: remember the choice for next time / other pages
    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
// ---- Time-of-day greeting (home page only) ----
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let word;
  if (hour < 12) {
    word = "morning";
  } else if (hour < 18) {
    word = "afternoon";
  } else {
    word = "evening";
  }
  greeting.textContent = "Good " + word + "!";
}
// ---- Contact form (contact page only) ----
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading
    const name = document.getElementById("name").value.trim();
    const formMsg = document.getElementById("formMsg");
    if (name === "") {
      formMsg.textContent = "Please enter your name.";
    } else {
      formMsg.textContent = "Thanks, " + name + "!";
      form.reset();
    }
  });
}
// ---- STRETCH: FAQ accordion (about page only) ----
const questions = document.querySelectorAll(".faq-question");
questions.forEach(function (q) {
  q.addEventListener("click", function () {
    const answer = q.nextElementSibling;
    answer.classList.toggle("open");
  });
});
// ---- STRETCH: highlight the current nav link (all pages) ----
const here = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(function (link) {
  if (link.getAttribute("href") === here) {
    link.classList.add("active");
  }
});
