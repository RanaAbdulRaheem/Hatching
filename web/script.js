function callForm(){
    var body = document.body;
    while(body.firstChild){
        body.removeChild(body.lastChild);
    }

    var formContainer = document.createElement('div');
    formContainer.className = 'formContainer';
    var form = document.createElement('form');
    var br = document.createElement('br');
    var businessName = document.createElement('input');
    businessName.setAttribute('type', 'text');
    businessName.setAttribute('name','businessName')
    businessName.setAttribute('placeholder', 'Business Name')
    form.append(businessName);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    var email = document.createElement('input');
    email.setAttribute('type', 'text');
    email.setAttribute('name','email')
    email.setAttribute('placeholder', 'Email')
    form.append(email);
    form.appendChild(br.cloneNode());
    form.appendChild(br.cloneNode());
    var phoneNumber = document.createElement('input');
    phoneNumber.setAttribute('type', 'text');
    phoneNumber.setAttribute('name','phoneNumber')
    phoneNumber.setAttribute('placeholder', 'Phone Number')
    form.append(phoneNumber);

    formContainer.append(form);
    body.append(formContainer);

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

function submitForm(){

    //checks for form completion
    //all slots are filled
    var name = document.getElementById('businessName').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phoneNumber').value

    //appears in chrome (front-end) terminal
    console.log('name: ', name);
    console.log('email: ', email);
    console.log('phone: ', phone);

    window.open('mailto:donald@hatchingapp.com?subject=name&body=phone+email');

    //closes form
    document.getElementById("myForm").style.display = "none";
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getStartedNow').addEventListener('click',openForm);
    document.getElementById('getStartedNow2').addEventListener('click',openForm);
    document.getElementById('startNow').addEventListener('click',openForm);
    document.getElementById('submitButton').addEventListener('click',submitForm);

});