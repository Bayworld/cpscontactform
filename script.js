document.addEventListener("DOMContentLoaded", function() {
    // Show Logo Modal
    var logoModal = document.getElementById("logoModal");
    logoModal.style.display = "block";
  
    // Remove Modal after animation and redirect
    var logo = document.getElementById("logo");
    logo.addEventListener("animationend", function() {
      logoModal.style.display = "none";
      setTimeout(function() {
        window.location.href = "contact.html";
      }, 500); // Adjust the timeout value as needed to match the duration of your zoom out animation
    });
  });
  