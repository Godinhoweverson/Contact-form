
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const queriesRadio = document.getElementsByName('query');
const checkbox = document.getElementsByName('checkbox');
const message = document.getElementById('message');
const btnSubmit = document.getElementById('btn-submit');


// Test if the email is valid



btnSubmit.addEventListener('click', () =>{
    firstName.style = '';
    const required = document.querySelectorAll('.required');
    if(required){
        console.log(required)
        required.remove();
    }
// Validate First name
if(firstName.value === ''){
    const firstnameRequired = document.createElement('p');
    firstnameRequired.setAttribute('class', 'required');
    firstnameRequired.style.color = '#D73C3C';
    firstnameRequired.innerHTML = 'This field is required'
    firstName.insertAdjacentElement('afterend', firstnameRequired);
    firstName.style = 'border:1px solid #D73C3C !important';
}
//  validate Email

const e = email.value;


function validateEmail(e){
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
};

    if(validateEmail(e)){
        console.log('valid email address');
    }else{
        const emailError = document.createElement('p');
        emailError.setAttribute('class', 'required');
        emailError.style.color = '#D73C3C';
        emailError.innerHTML = 'Please enter a valid email address'
        email.insertAdjacentElement('afterend', emailError);
        email.style = 'border:1px solid #D73C3C !important';
    }
});

// error states messages