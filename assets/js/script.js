
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const queriesRadio = document.querySelectorAll('#query');
const containerQueryTypes = document.querySelector('.container-query-types');
const checkbox = document.getElementById('checkbox');
const message = document.getElementById('message');
const btnSubmit = document.getElementById('btn-submit');
const caixaMessage = document.getElementById('caixa-message');

// Test if the email is valid

const validForm = () =>{
    //Reset all elements

    checkbox.parentNode.style = '';
    const required = [...document.querySelectorAll('.required')];
    if(required){
        required.forEach((e) =>{
            e.remove();
        });
    };
        
    const errorMessage = (el, message) =>{
        const p = document.createElement('p');
        p.setAttribute('class', 'required');
        p.style = 'margin-top:8px'
        p.style.color = '#D73C3C';
        p.innerHTML = message;
        el.insertAdjacentElement('afterend', p);
        el.style = 'border:1px solid #D73C3C !important';
    }

    // Validate First name
    if(firstName.value === ''){
        errorMessage(firstName, 'This field is required')
    }else{
        firstName.style = '';
    }

    // Validate last Name
    if(lastName.value === ''){
        errorMessage(lastName, 'This field is required')
    }else{
        lastName.style = '';
    }

    //  validate Email
    const e = email.value;


    function validateEmail(e){
        const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return patt.test(e);
    };

        if(validateEmail(e)){
            email.style = ''
        }else{
            errorMessage(email, 'Please enter a valid email address')
        }

    //Queries 
    if(!queriesRadio[0].checked && !queriesRadio[1].checked){
        const p = document.createElement('p');
        p.setAttribute('class', 'required');
        p.style = 'margin-top:8px'
        p.style.color = '#D73C3C';
        p.innerHTML = 'Please select a query type';
        containerQueryTypes.insertAdjacentElement('afterend', p);
    }

    // Validate Message
    if(message.value === ''){
        errorMessage(message, 'This field is required')
    }else{
        message.style ='';
    }

    if(!checkbox.checked){
        const p = document.createElement('p');
        p.setAttribute('class', 'required');
        p.style = 'margin:8px 0 35px 0'
        p.style.color = '#D73C3C';
        p.innerHTML = 'To submit this form, please consent to being contacted';
        checkbox.parentNode = 'margin: 0px !important'
        checkbox.parentNode.insertAdjacentElement('afterend', p);
        checkbox.parentNode.style = 'margin-bottom:0px';
    }
}

btnSubmit.addEventListener('submit', () =>{
   validForm();
   caixaMessages();
});

const caixaMessages = () =>{
    console.log(caixaMessage)
    caixaMessage.style.display = 'flex';
}


