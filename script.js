let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')
let button  = document.getElementById('submit')

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(username.value ===""){
        showError(username,'Username is required')
    }else{
        showSuccess(username)
    }
    if(email.value ===''){
        showError(email,'email is required')
    }else if(!isItValid(email.value)){
        showError(email, 'Email is not Valid')
    }
    else{
        showSuccess(email)
    }
    if(password.value === ''){
        showError(password, 'password is required')

    }
    
    else{
        showSuccess(password)
    }
    if(password2.value === ''){
        showError(password2, 're-enter your password')

    }else{
        showSuccess(password2)
    }
    if(password.value !==password2.value){
        showError(password, 'your password dont match')
        showError(password2,'your password dont match')
    }else{
        showSuccess(passoword)
        showSuccess(passoword2)
    }
   
    
})
   


function showError(input,message){
    const formControl =  input.parentElement;
    formControl.className = 'form-control error'
    let small = formControl.querySelector('small')
    small.innerText = message
    
}
function showSuccess(input){
    const formControl =  input.parentElement;
    formControl.className = 'form-control success'
}
function isItValid(email){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return mailformat.test(String(email).toLowerCase())
}
