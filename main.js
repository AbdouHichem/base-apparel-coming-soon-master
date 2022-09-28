const subbtn = document.querySelector(".button");
const formcontrol = document.querySelector(".formControl");
console.log(formcontrol);
removeErrors();
//Remove Errors
function removeErrors() {

    formcontrol.querySelector('img').classList.add('hide');
    formcontrol.querySelector('small').classList.add('hide');

}

subbtn.addEventListener("click", subbtnfun);

function subbtnfun() {
    if(!validate(formcontrol.querySelector('.Email').value)){
        console.log("false");
        formcontrol.querySelector('img').classList.remove('hide');
        formcontrol.querySelector('small').classList.remove('hide');
    }else{

        formcontrol.querySelector('img').classList.add('hide');
        formcontrol.querySelector('small').classList.add('hide');
    }
}

function validate(email) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

