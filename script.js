document.addEventListener("DOMContentLoaded", function() {
  // Get form and confirmation message elements
  var form = document.getElementById("registrationForm");
  var confirmationMessage = document.getElementById("confirmationMessage");

  // Add event listener to form submission
  form.addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Display confirmation message
    confirmationMessage.classList.remove("hidden");

    // Reset form fields
    form.reset();

    // Hide confirmation message after 3 seconds
    setTimeout(function() {
      confirmationMessage.classList.add("hidden");
    }, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var learnMoreLink = document.getElementById("learnMore");
  var moreInformation = document.getElementById("moreInformation");

  // Show more information when "Learn more" link is clicked
  learnMoreLink.addEventListener("click", function(event) {
    event.preventDefault();
    moreInformation.classList.remove("hidden");
  });
});
