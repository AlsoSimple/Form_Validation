//Get inputfields from DOM
const inputFields = document.getElementsByClassName("inputField")

//Convert the HTMLCollection into an array
var inputFieldsArray = [].slice.call(inputFields);


//Get the button from form
const button = document.getElementById("yoinkButton")

//Add eventlistener to form, runs on event type click
 //Spit out the entire array, one element at a time
//Run validateInput with every single element
button.addEventListener("click", (e) => {
    inputFieldsArray.map((inputField) => {
        switch (inputField.type) {
            case "text":
                validateInput(inputField)
                break;
    
            case "email":
                validateInput(inputField)
                break;
    
            case "number":
                validateInput(inputField)
                break;
    
            case "password":
                validateInput(inputField)
                break;
        }
    })
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
    } else {
        inputField.style.border = "solid 2px #00000000";
        inputField.style.boxShadow = "none"
        inputField.classList.remove("warning");
    }
}

function validator(input, regex) {

    return regex.test(input)

}