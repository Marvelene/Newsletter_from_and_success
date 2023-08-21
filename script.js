function validateForm(event) {
    event.preventDefault();
    let cardContainer = document.querySelector(".card-container");
    let emailInput = document.querySelector("#email");
    let emailValue = emailInput.value;
    let emailError = document.querySelector("#emailError");
    let submitEmail = document.querySelector(".submit-email");
    let successMessage = document.querySelector(".success");
    let dismissMessage = document.querySelector("#dismiss");


    let emailPattern = /^[a-zA_Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Wrong format!';
        emailInput.classList.add('invalid');
    } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
        successMessage.style.visibility = 'visible';
        cardContainer.style.display = 'none';
        successMessage.classList.add('fade-in');
        cardContainer.style.pointerEvents = 'auto';
        submitEmail.textContent = emailValue;

        setTimeout(function () {
            cardContainer.style.opacity = '0';
        }, 500);

    };

    dismissMessage.addEventListener("click", function () {
        successMessage.style.display = 'none';
        cardContainer.style.display = 'flex';
        cardContainer.style.opacity = '1';
        successMessage.classList.remove('fade-in');
        emailInput.value = '';
    });

}