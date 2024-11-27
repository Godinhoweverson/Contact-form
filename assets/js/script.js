
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const queriesRadio = document.querySelectorAll('#query');
const containerQueryTypes = document.querySelector('.container-query-types');
const checkbox = document.getElementById('checkbox');
const message = document.getElementById('message');
const btnSubmit = document.getElementById('btn-submit');
const caixaMessage = document.getElementById('caixa-message');


//Reset All Elements
const resetEl = () => {
    checkbox.parentNode.style = '';
    const required = [...document.querySelectorAll('.required')];
    if(required){
        required.forEach((e) =>{
            e.remove();
        });
    };
    firstName.style = '';
    lastName.style = '';
    email.style = '';
    message.style = '';
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
    checkbox.checked = false;
    queriesRadio[0].checked = false;
    queriesRadio[1].checked = false;
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


  // Test if the email is valid

function validateEmail(e){
    const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return patt.test(e);
};
const getValueEmail = () =>{
    let e = email.value;
    return e
};

const validForm = () =>{ 

    let validEmail = validateEmail(getValueEmail());
  
    if(validEmail !== true || firstName.value === '' || lastName.value === '' || message.value === '' || !checkbox.checked ||(!queriesRadio[0].checked && !queriesRadio[1].checked)){
        checkbox.parentNode.style = '';
        const required = [...document.querySelectorAll('.required')];
        if(required){
            required.forEach((e) =>{
                e.remove();
            });
        };
        // Validate First name
        if(firstName.value === ''){
            errorMessage(firstName, 'This field is required')
        }else{
            firstName.style = '';
        };

        // Validate last Name
        if(lastName.value === ''){
            errorMessage(lastName, 'This field is required')
        }else{
            lastName.style = '';
        };

        if(validEmail){
            email.style = ''
        }else{
            errorMessage(email, 'Please enter a valid email address')
        };

        //Queries 
        if(!queriesRadio[0].checked && !queriesRadio[1].checked){
            const p = document.createElement('p');
            p.setAttribute('class', 'required');
            p.style = 'margin-top:8px'
            p.style.color = '#D73C3C';
            p.innerHTML = 'Please select a query type';
            containerQueryTypes.insertAdjacentElement('afterend', p);
        };

        // Validate Message
        if(message.value === ''){
            errorMessage(message, 'This field is required')
        }else{
            message.style ='';
        };

        if(!checkbox.checked){
            const p = document.createElement('p');
            p.setAttribute('class', 'required');
            p.style = 'margin:8px 0 35px 0'
            p.style.color = '#D73C3C';
            p.innerHTML = 'To submit this form, please consent to being contacted';
            checkbox.parentNode = 'margin: 0px !important'
            checkbox.parentNode.insertAdjacentElement('afterend', p);
            checkbox.parentNode.style = 'margin-bottom:0px';
        };
        return false;
    }else{
        resetEl();
        return true;
    };  
};


btnSubmit.addEventListener('click', (event) =>{
    event.preventDefault();
    if(validForm()){
        caixaMessage.style.display = 'flex';
        setTimeout(() =>{
            caixaMessage.style.display = 'none';
        },2000);    
    };
});


