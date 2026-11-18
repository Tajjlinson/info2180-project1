/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".message");

    // Use our own message instead of the browser's built-in popup
    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "" || !email.includes("@")) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
            emailInput.value = "";
        }
    });
});
