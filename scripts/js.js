let valueDataRegistr = {
    name: '',
    surname: '',
    email: '',
    phone: '',
};

let valueDataComment = {

    description: '',
    card: '',
};

let password = '';


function form() {

    return `<div class='form-group row col-sm-8' style='margin-top: 10px'><p style="color: red"></p> </p> <p id="errorClick" style="color: red"></p><input id='nameId' value='${valueDataRegistr.name}' type='text' class='form-control' name='name' placeholder='Name' required></div>
    <div class='form-group row col-sm-8'><input value='${valueDataRegistr.surname}'  type='text' class='form-control' name='surname' placeholder='Surname'></div>
    <div class='form-group row col-sm-8'><input id='emailId' value='${valueDataRegistr.email}' type='text' class='form-control' name='email' placeholder='Email' required></div>
    <div class='form-group row col-sm-8'><input type='text' value='${valueDataRegistr.phone}' class='form-control' name='phone' placeholder='Phone'></div>
    <div class='form-group row col-sm-8'><input id='passwordId' type='password' class='form-control' name='password' placeholder='Password' required></div>
    <div class='form-group row col-sm-8'><input id='repeatPasswordId' type='password' class='form-control' name='repeatpassword' placeholder='RepeatPassword' onkeyup='valid(this)' required></div>
    <div class='form-check'>
    <input id='maleId' class='form-check col-sm-8 form-check-input' onclick='validate(this)' type='radio' required> 
    <label class='form-check-label' for='gridCheck1'>Male:</label>
    </div>
    <div class='form-check'>
    <input id='femaleId' class='form-check col-sm-8 form-check-input' onclick='validate(this)' type='radio' required>
    <label class='form-check-label' for='gridCheck1'>Female:</label>
    </div>`;
}

function comment() {
    return `<div class='form-group row col-sm-8' style='margin-left: 490px'><textarea name='description' id='descriptionId' value='${valueDataComment.description}'  class='inputField_G5 _textarea_In test'   maxlength='1000' placeholder='Ваше сообщение*' data-gramm='false' data-gramm_editor='false' data-enable-grammarly='false' style='text-size-adjust: none' required></textarea></div>
    <div class='form-group row col-sm-8' style='margin-left: 490px'><input id='cardId' value='${valueDataComment.card}'name='card' class='form-control' type='text' placeholder='Card Number'></div>`;
}

let view = document.getElementById('view');
let li = document.getElementsByTagName('li');
let error = document.getElementById('error');

let isUser = true;

let valueName;
let mail;


view.innerHTML = form();
li[0].classList.add('active');

function regist(event) {
    remove();
    checkOfRegistration();
    let reg = document.getElementsByTagName('input');
    if (event.id === "registr") {
        view.innerHTML = form();
        li[0].classList.add('active');

    } else if (event.id === 'comments') {

        for (let i = 0; i < reg.length; i++) {
            if (reg[i].required && reg[i].value.length === 0) {
                isUser = false;
                view.innerHTML = form();
                break;
            }
        }
        if (isUser) {
            li[1].classList.add('active');
            view.innerHTML = comment();
        } else {
            li[0].classList.add('active');
            view.innerHTML = form();
            document.getElementById('errorClick').innerHTML = 'Please enter required inputs';
        }
    } else if (event.id === 'registration') {
        checkOfComment();
    }

}


function valid(val) {
    let pass = document.getElementById('passwordId');
    let repeatPass = document.getElementById('repeatPasswordId');
    if (val.value.length < 6) {
        password = val.value;
    } else {
        password = '';
        let elementsByTagName = view.getElementsByTagName("p");
        elementsByTagName[0].innerHTML = "Wrong keyword  password entry."
    }

}



function remove() {
    for (var i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
    }


}

function validate(check) {
    let maleId = document.getElementById('maleId');
    let femaleId = document.getElementById('femaleId');

    if (check.id === 'maleId') {
        femaleId.required = false;
        femaleId.checked = false;
    } else {
        maleId.required = false;
        maleId.checked = false;
    }


}


function checkOfRegistration() {
    let registrOfValid = document.getElementsByTagName('input');
    for (let i = 0; i < registrOfValid.length; i++) {
        if (registrOfValid[i].name === 'name') {
            valueDataRegistr.name = registrOfValid[i].value;
        } else if (registrOfValid[i].name === 'surname') {
            valueDataRegistr.surname = registrOfValid[i].value;
        } else if (registrOfValid[i].name === 'email') {
            valueDataRegistr.email = registrOfValid[i].value;
        } else if (registrOfValid[i].name === 'phone') {
            valueDataRegistr.phone = registrOfValid[i].value;
        }
    }
}

function checkOfComment() {
    let descriptionName = document.getElementById('descriptionId');
    let commentOfValid = document.getElementById('cardId');

    if (descriptionName != null || commentOfValid != null) {
        if (descriptionName.value.length > 0 && commentOfValid.value.length > 0) {
            valueDataComment.description = descriptionName.value;
            valueDataComment.card = commentOfValid.value;
            li[2].classList.add('active');
            view.innerHTML = '<p class="messageUser">' + 'User name: ' + valueDataRegistr.name + "<br>" + 'User email: ' + valueDataRegistr.email + '</p>';
        } else {
            li[0].classList.add('active');
            document.getElementById('errorClick').innerHTML = 'Please enter required inputs';
        }
    } else {
        li[0].classList.add('active');
        document.getElementById('errorClick').innerHTML = 'Please enter required inputs';

    }
}


    



