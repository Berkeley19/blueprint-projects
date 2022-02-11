const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i

const form = document.getElementById('form')
form.addEventListener('change', validateForm)

function validateForm(){
    const error = []
    if(!form.name.value){
        error.push('Name is required')
    }
    if(!emailReg.test(form.email.value)){
        error.push('Email must be a valid email format')
    }
    if(!form.password.value || form.password.value.length < 6){
        error.push('Password must be 6 characters or greater')
    }
    if(form.confirm.value != form.password.value){
        error.push('Password confirm field should match original password')
    }
    return error
}