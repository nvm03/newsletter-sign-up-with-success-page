const form = document.getElementById("form")
const email = document.getElementById("email")
const inputError = document.getElementById("email-error")
const submitButton = document.getElementById("submit")

function showError(){
    if(email.validity.valueMissing || email.validity.typeMismatch) {
        inputError.textContent = "Valid email required"
        email.classList.add('input-error')
    }else{
        inputError.textContent = ""
        email.classList.remove('input-error')
    }
}
function cleanError(){
    inputError.textContent = ""
    email.classList.remove('input-error')  
}

email.addEventListener("input", function(){
     if(!email.validity.valid){
        showError();
        submitButton.classList.remove('submit-btn-hover')
     }else{
        cleanError();
        submitButton.classList.add('submit-btn-hover')
     }
 })

form.addEventListener("submit", function(e){
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }
})



