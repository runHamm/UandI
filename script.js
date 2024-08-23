document.addEventListener("DOMContentLoaded", function () {
  const achievementBoxes = document.querySelectorAll(".achievements__box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  achievementBoxes.forEach((box) => {
    observer.observe(box);
  });
});

const checkbox = document.getElementById("navi-toggle");
const navLinks = document.querySelectorAll(".navigation__link");

// Add event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Uncheck the checkbox
    checkbox.checked = false;
  });
});
