const createAccount = document.querySelector("#submit");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmpw = document.querySelector("#confirm");


const validatepw = (a, b) => {
    if (password.value !== confirmpw.value){
        createAccount.disabled = true;
        password.classList.add("error");
        confirmpw.classList.add("error");
    } else {
        createAccount.disabled = false;
        password.classList.remove("error");
        confirmpw.classList.remove("error");
    }
}

confirmpw.addEventListener("change", function(){
    validatepw(password.value, confirmpw.value);
})