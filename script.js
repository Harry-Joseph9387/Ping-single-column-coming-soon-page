const form=document.querySelector('form');
const button=form.querySelector('input');

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function checkemail(e){
    e.preventDefault();
    const email=e.target.querySelector('input').value;

    if(isValidEmail(email)){
        const element1=form.querySelector('p');
        form.classList.remove('error');
        form.removeChild(element1);
    }
    else{
        const element=document.createElement('p');
        element.textContent="Enter a valid email";
        form.insertBefore(element,button);
        form.classList.add('error');
    }
}
form.addEventListener('submit',checkemail);