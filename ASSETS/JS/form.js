//Get inputfields from DOM
const inputFields = document.getElementsByClassName("inputField")

//Convert the HTMLCollection into an array
var inputFieldsArray = [].slice.call(inputFields);

const openModalButton = document.getElementById("modalButton")
const modal = document.getElementById("myModal")

function toggleModal (action) {
    console.log("Har blitt trykket på: ", action)
    if(action === "open"){
        modal.style.display = "flex";
        modal.style.opacity = "1";
    } else if (action === "close"){
        modal.style.display = "none";
        modal.style.opacity = "0";
    }
}

const backButton = document.getElementsByClassName("back-button")[0]

backButton.addEventListener("click", () => {
    toggleModal("close")
})


openModalButton.onclick = () => toggleModal("open");

console.log(inputFieldsArray)

//Get the button from form
const button = document.getElementById("yoinkButton")

//Add eventlistener to form, runs on event type click
//Spit out the entire array, one element at a time
//Run validateInput with every single element
button.addEventListener("click", (e) => {
    e.preventDefault();
    let formIsValid = true
    inputFieldsArray.map((inputField) => {
        switch (inputField.type) {
            case "text":
                if(formIsValid){
                    formIsValid = validateInput(inputField)
                } else {
                    validateInput(inputField)
                }
                break;
    
            case "email":
                if(formIsValid){
                    formIsValid = validateInput(inputField)
                } else {
                    validateInput(inputField)
                }
                break;
    
            case "number":
                if(formIsValid){
                    formIsValid = validateInput(inputField)
                } else {
                    validateInput(inputField)
                }
                break;
    
            case "password":
                if(formIsValid){
                    formIsValid = validateInput(inputField)
                } else {
                    validateInput(inputField)
                }
                break;
        }
    })
    if(formIsValid){
        toggleModal("close")
    } else {
        console.log("Form is not valid")
    }
})

//This function receives inputfield as a parameter
//Switch case checks every single inputfield.type
//If type of element is....
//run validator with input value, and pass regex as well
//if input IS NOT approved by regex, make red border, add class .warning
//if input IS approved by regex, make normal border, remove class .warning
//Standard switch case syntax - break from running after running on one case

const regex = {
    text: /^[a-z æøå,.'-]+$/i,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    number: /^[0-9]+$/,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
}

function validateInput(inputField){
    if(validator(inputField.value, regex[inputField.type]) === false){
        inputField.style.border = "solid 2px #FF0000BB";
        inputField.style.boxShadow = "0px 0px 6px #FF0000DD"
        setTimeout(() => {
            inputField.classList.add("warning");
        }, 0.25742069);  
        inputField.classList.remove("warning");
        return false
    } else {
        inputField.style.border = "solid 2px #00000000";
        inputField.style.boxShadow = "none"
        inputField.classList.remove("warning");
        return true
    }
}

function validator(input, regex) {

    return regex.test(input)

}