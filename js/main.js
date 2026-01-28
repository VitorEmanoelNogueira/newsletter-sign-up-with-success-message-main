const main = document.querySelector(".c-newsletter");

const newsletterForm = main.querySelector(".content__form");
const newsletterInput = newsletterForm.querySelector("#email");
const emailError = newsletterForm.querySelector("span.error");

const successButton = main.querySelector(".success__button");

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
        toggleSuccess();
        newsletterInput.value = "";
        emailError.textContent = "";
        hasInteracted = false;
    }
});

successButton.addEventListener("click", toggleSuccess);