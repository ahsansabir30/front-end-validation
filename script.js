var form = document.forms[0]; 
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const card = document.getElementById('card');

let email_valid = false
let fullname_valid = false
let cardnumber_valid = false

// checking if the user has inputed a correct name
fullname.addEventListener('input', inputName);
function inputName(e) {
    const input = e.target.value;
    if (input && /^[a-z ,.'-]+$/i
    .test(input)){
        fullname.classList.add("valid");
        fullname.classList.remove("invalid");
        fullname_valid = true;
    }else{
        fullname.classList.add("invalid");
        fullname.classList.remove("valid");
        fullname_valid = false;
    }
};

// checking if the user has inputed an email
email.addEventListener('input', inputEmail);
function inputEmail(e) {
    const input = e.target.value;
    if (input && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(input)){
        email.classList.add("valid");
        email.classList.remove("invalid");
        email_valid = true;
    }else{
        email.classList.add("invalid");
        email.classList.remove("valid");
        email_valid = false;
    }
}

// Luhn Algorithm
function valid_credit_card(value) {
    // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
  
      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
}

// checking if the user has inputed a correct name
card.addEventListener('input', inputCard);
function inputCard(e) {
    // using to replace space-characters (if a customer adds her card with spaces) 
    const input = e.target.value.replace(/\s/g, "");

    // if the length of the card is between 15 -19 and is a number - then the card no. is valid
    if (input.length> 12 && input.length < 19 && /^(0|[1-9][0-9]*)$/
    .test(input)){
        if(valid_credit_card(input) === true){
            card.classList.add("valid");
            card.classList.remove("invalid");
            cardnumber_valid = true;
    }}else{
        card.classList.add("invalid");
        card.classList.remove("valid");
        cardnumber_valid = false;
    }
}

form.addEventListener('submit', function(e) {
    // if name is not valid
    if(fullname_valid === false) {
        e.preventDefault();
    }
    // if email is not valid
    if(email_valid === false) {
        e.preventDefault();
    }
    // if cardnumber is not valid
    if(cardnumber_valid === false) {
        e.preventDefault();
    }

    if(fullname_valid === true || cardnumber_valid === true || email_valid === true){
        console.log("No Email Sent")
    }else{
        console.log("Send Email")
    }
});
