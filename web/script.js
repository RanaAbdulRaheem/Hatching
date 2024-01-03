function callForm(){
    console.log("lol")
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




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getStartedNow').addEventListener('click',callForm);
    document.getElementById('getStartedNow2').addEventListener('click',callForm);
    document.getElementById('startNow').addEventListener('click',callForm);

    document.addEventListener('click', function(e){     
        if(e.target.id.toString().includes('card-card')){
            offProject(e.target.id.toString().charAt(e.target.id.toString().length-1));
        }
    });
});