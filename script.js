const form = document.getElementById("form")
const email = document.getElementById("email")
const inputError = document.getElementById("email-error")

function showError(){
    if(email.validity.valueMissing) {
        inputError.textContent = "Valid email required"
        email.classList.add('input-error')
    } else if (email.validity.typeMismatch) {
        inputError.textContent = "Valid email required"
        email.classList.add('input-error')
    }
}

email.addEventListener("input", function(e){
     if(!email.validity.valid){
        showError();
     }
 })

form.addEventListener("submit", function(e){
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }else{
        
    }
})



