const main = document.querySelector(".js-newsletter");

const newsletterForm = main.querySelector(".js-newsletter-form");
const newsletterInput = newsletterForm.querySelector(".js-email-input");
const emailError = newsletterForm.querySelector(".js-email-error");

const successEmail = main.querySelector(".js-success-email");
const dismissButton = main.querySelector(".js-dismiss");

let hasInteracted = false;

function validateEmail(){
    if (newsletterInput.validity.valueMissing){
        showError("You need to enter an email address");
        return false;
    }
    
    if(newsletterInput.validity.patternMismatch){
        showError("Valid email required");
        return false;
    }

    clearError();
    return true;
}

function showError(msg){
    emailError.textContent = msg;
    emailError.classList.add("active");
    newsletterInput.classList.add("is-error");
}

function clearError(){
    emailError.textContent = "";
    emailError.classList.remove("active");
    newsletterInput.classList.remove("is-error");
}

function showSuccess(email){
    document.body.classList.add("is-success");
    successEmail.textContent = email;
}

function hideSuccess(){
    document.body.classList.remove("is-success");
}

function resetForm(){
    newsletterInput.value = "";
    hasInteracted = false;
}

newsletterInput.addEventListener("input", () => {
    hasInteracted = true;
});

newsletterInput.addEventListener("blur", () => {
    if (hasInteracted) {
        validateEmail();
    }
});

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateEmail()){
        const email = newsletterInput.value;
        showSuccess(email);
        resetForm();
    }
});

dismissButton.addEventListener("click", hideSuccess);