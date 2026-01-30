const main = document.querySelector(".js-newsletter");

const newsletterForm = main.querySelector(".js-newsletter-form");
const newsletterInput = newsletterForm.querySelector(".js-email-input");
const emailError = newsletterForm.querySelector(".js-email-error");

const successEmail = main.querySelector(".js-success-email");
const successButton = main.querySelector(".js-dismiss");

let hasInteracted = false;

function validateEmail(){
    if (newsletterInput.validity.valueMissing){
        emailError.textContent = "You need to enter an email address";   
        emailError.classList.add("active");
        newsletterInput.classList.add("is-error");
         return false;
    }
    
    if(newsletterInput.validity.patternMismatch){
        emailError.textContent = "Valid email required";
        emailError.classList.add("active");
        newsletterInput.classList.add("is-error");
        return false;
    }

    emailError.textContent = "";
    emailError.classList.remove("active");
    newsletterInput.classList.remove("is-error");
    return true;
}

function toggleSuccess(){
    document.body.classList.toggle("is-success");
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
        const data = new FormData(newsletterForm);
        const email = data.get("email");

        successEmail.textContent = email;

        toggleSuccess();
        newsletterInput.value = "";
        emailError.textContent = "";
        hasInteracted = false;
    }
});

successButton.addEventListener("click", toggleSuccess);