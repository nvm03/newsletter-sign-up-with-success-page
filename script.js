const form = document.getElementById("form")
const email = document.getElementById("email")
const inputError = document.getElementById("email-error")

function showError(){
    if(email.validity.valueMissing || email.validity.typeMismatch) {
        inputError.textContent = "Valid email required"
        email.classList.add('input-error')
    }
}
function cleanError(){
    inputError.textContent = ""
    email.classList.remove('input-error')  
}

email.addEventListener("input", function(){
     if(!email.validity.valid){
        showError();
     }else{
        cleanError();
     }
 })

form.addEventListener("submit", function(e){
    if(!email.validity.valid){
        showError();
        e.preventDefault();
    }
})



