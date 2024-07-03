const form=document.querySelector("form");
const button=form.querySelector("button");
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function checkemail(e){
    e.preventDefault();
    const email=e.target.querySelector('input').value
    const element=form.querySelector("p");
   
    if(isValidEmail(email)){
        if(element!=null){
        form.classList.remove("error");
        form.removeChild(element);
        }
    }
    else{
        if(element==null){
            console.log('fweohsdal')
            const p=document.createElement('p');
            p.textContent="Enter a valid email";
            form.insertBefore(p,button);
            form.classList.add('error')
        }
        
    }
}
form.addEventListener('submit',checkemail)
