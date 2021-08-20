/************************* variables *****************************/
const sendBtn=document.querySelector('#sendBtn'),
      email=document.querySelector('#email'),
      subject=document.querySelector('#subject'),
      message=document.querySelector('#message'),
      resetBtn=document.querySelector('#resetBtn'),
      emailForm=document.querySelector('#email-form');






/********************** event listeners *************************/
allEventListeners();
function allEventListeners() {
    document.addEventListener('DOMContentLoaded',appInit);
    email.addEventListener('blur',validateFeilds);
    subject.addEventListener('blur',validateFeilds);
    message.addEventListener('blur',validateFeilds);
    resetBtn.addEventListener('click',resetFeilds);
    emailForm.addEventListener('submit',formSubmition);
}



/************************ functions ****************************/
function appInit() {
    sendBtn.disabled=true;
}

//////////////// validating feilds /////////////////
function validateFeilds() {

    //length validation
    validateLength(this);
    
    //email validation
    if (this.type ==='email') {
        validateEmail(this);
    }

    //make send button active
    let error=document.querySelectorAll('.error');
    if (email.value!=='' && subject.value!='' &&  message.value!='') {
        if (error.length===0) {
            sendBtn.disabled=false;
        }
    }

}
/////////////////// validate length//////////////////////
function validateLength(feild) {
    if (feild.value.length>0) {
        feild.style.borderBottomColor='green';
        feild.classList.remove('error');
    } else {
        feild.style.borderBottomColor='red';
        feild.classList.add('error');
    }

}

/////////////// validate email ////////////////////////
function validateEmail(feild){
    if (feild.value.includes('@')) {
        feild.style.borderBottomColor='green';
        feild.classList.remove('error');
    } else {
        feild.style.borderBottomColor='red';
        feild.classList.add('error');

    }
}

//////////////////////reset feilds////////////////////
function resetFeilds() {
    emailForm.reset();
}

/////////////form submition//////////////////
function formSubmition(e) {
    e.preventDefault();

    //show spinner after submiting the datas
    let spinner=document.querySelector('#spinner');
    spinner.style.display='block';

    //show email submition gif after spinner hides
    let emailGif=document.createElement('img');
    emailGif.src='img/mail.gif';
    emailGif.style.display='block';



    setTimeout(function() {
        spinner.style.display='none';
        let loaders=document.querySelector('#loaders');
        loaders.appendChild(emailGif);

        setTimeout(function() {
        emailGif.style.display='none';

        }, 5000);

    }, 3000);


    
    
}

