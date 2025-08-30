// Typing effect
const roles = ["Web Developer", "UI Designer", "Problem Solver"];
let i = 0, j = 0, isDeleting = false;
const roleElement = document.getElementById("role");

function typeEffect() {
  let current = roles[i];
  roleElement.textContent = isDeleting
    ? current.substring(0, j--)
    : current.substring(0, j++);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Modal
function showProject() {
  document.getElementById("project-modal").style.display = "block";
}
function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "⚠ Please fill in all fields.";
    status.style.color = "red";
    return false;
  }
  status.textContent = "✅ Message sent successfully!";
  status.style.color = "green";
  return false; // Prevent actual submission
}

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();