
// ************************ Declare All Variables ************************ /

let fieldsCheck;
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let quantity = document.querySelector("#quantity");

let firstNameError = document.querySelector("#firstNameError");
let lastNameError = document.querySelector("#lastNameError");
let emailError = document.querySelector("#emailError");
let phoneError = document.querySelector("#phoneError");
let quantityError = document.querySelector("#quantityError");

// ************************ SECRET SCREEN VARIABLE ************************ /
let animatedGIF = document.querySelector("#animated-gif");
let text = document.querySelector("#text");
let errorMsg = document.querySelector("#errorMsg");
let closeBtn = document.querySelector("#closeBtn");

// ************************ FIRST NAME CHECK ************************ /
// pattern meaning: need to be more than 3 characters from A-Z or a-z, some special like  ' . - will be accepted e.g: Mr.Smith | blue-sky | O'ly
function nameCheck(strVal){
    let pat = /^[A-Za-z'.-]{3,}$/
    if(pat.test(strVal)){
        return true;
    }
    return false;
}
// ************************ LAST NAME CHECK ************************ /
// pattern meaning: can match +1234567890 | +(123)-456-7890 | 1234567890 |(123)-456-789 |...
function phoneCheck(strVal){
    let pat = /^[+1]?[(]?[1-9]{3}[)]?[-]?[0-9]{3}[-]?[0-9]{4}$/
    if(pat.test(strVal)){
        return true;
    }
    return false;
}
// ************************ EMAIL CHECK ************************ /
// pattern meaning: can be any charcter from lowercase, uppercase, numbers , 2 or more,  @ any mail box but only accept .ca | .com |.edu 
function emailCheck(strVal){
    let pat = /^[A-Za-z0-9-_.]{2,}@[A-Za-z]+[.]{1}(com|ca|edu)$/
    if(pat.test(strVal)){
        return true;
    }
    return false;
}

// ************************ NUMBER CHECK ************************ /
// pattern meaning: must be a number from 0 to 9, One or more
function numberCheck(strVal){
    let pat = /^[0-9]+$/
    if(pat.test(strVal)){
        return true;
    }
    return false;
}
function reset(){
    fieldsCheck.forEach(inputField => {
        inputField.error.innerText = "";
    })
    errorMsg.style.transform = "translateX(0%)";
    errorMsg.style.color = "#000";
}
// ************************ FORM CHECK ************************ /
function formChecker(e){
    e.preventDefault();
    reset();
    let errorsDetected = 0;
    //loop check text field
    fieldsCheck.forEach(inputField =>{
        if(inputField.checker(inputField.field.value)==false){
            inputField.error.innerText = inputField.msg;
            errorsDetected +=1;
        }
    });
    if(errorsDetected>0){
        //if user does not fill, or type wrong from regex will show the top error messages
        errorMsg.style.transform = "translateX(20%)";
        errorMsg.style.color = "#FF0000";
    }else{
        // match regex pattern show check mark GIF animation
        let showSecret1 = nameCheck(document.querySelector("#firstName").value);
        let showSecret2 = nameCheck(document.querySelector("#lastName").value);
        let showSecret3 = emailCheck(document.querySelector("#email").value);
        let showSecret4 = phoneCheck(document.querySelector("#phone").value);
        let showSecret5 = numberCheck(document.querySelector("#quantity").value);
        let showSecret = [showSecret1, showSecret2, showSecret3, showSecret4, showSecret5];
        if(showSecret){
            animatedGIF.style.opacity = "1";
            text.innerHTML = "Thank You! Your order has been placed.";
        }else{
            document.querySelector("#firstName").style.backgroundColor="#ff0000"; 
            document.querySelector("#lastName").style.backgroundColor="#ff0000"; 
            document.querySelector("#email").style.backgroundColor="#ff0000"; 
            document.querySelector("#phone").style.backgroundColor="#ff0000";
            document.querySelector("#quantity").style.backgroundColor="#ff0000";
        }
    }
}

function initForm(){
    fieldsCheck = [
        {
            field:firstName, 
            checker:nameCheck, 
            error:firstNameError, 
            msg:"Please enter your first name."
        },
        {
            field:lastName,
            checker:nameCheck,
            error:lastNameError,
            msg:"Please enter your last name."
        },
        {
            field:email, 
            checker:emailCheck, 
            error:emailError, 
            msg:"Please enter your email."
        },
        {
            field:phone,
            checker:phoneCheck,
            error:phoneError,
            msg:"Please enter your phone number."
        },
        {
            field:quantity,
            checker:numberCheck,
            error:quantityError,
            msg:"Please enter your quantity."
        },
    ]

    let formSubmit = document.querySelector("#formSubmit");
    formSubmit.addEventListener("click", formChecker);
    closeBtn.addEventListener("click", function(){
        reset();
    });
}

document.addEventListener("DOMContentLoaded", function(){
    initForm();
})

