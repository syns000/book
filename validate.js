function validateInput(input) {
    console.log(input);
    let inputValue = input.value;
    let errorField = input.nextElementSibling;

    if (inputValue === "") {
        input.classList.add("is-invalid");
        errorField.innerText = "This field is required";
    } else {
        input.classList.remove("is-invalid");
        errorField.innerHTML= "";
    }


    let minlength = input.getAttribute("minlength");

    if (minlength && inputValue.length < minlength) {
        errorField.innerText = `Minimum length for ${input.name} is ${minlength}`;
        // validations.input.name = false;

        return;
    } else {
        errorField.innerText = "";
        input.classList.add("is-valid");
    }

    let maxlength = input.getAttribute("maxlength");

    if (maxlength && inputValue.length > maxlength) {
        errorField.innerText = `Maximum length for ${input.name} is ${maxlength}`;
        // validations.input.name = false;
    }
};

let validations = {};


function isValid() {

    for (let item in validations) {
        let value = validations[item]
        if(value === false) {
            return false;
        }
        
    }
    return true;
}

