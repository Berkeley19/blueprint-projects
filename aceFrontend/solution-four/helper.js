const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i

const form = document.getElementById('form')
form.addEventListener('change', validateForm)

function validateForm(){
    const errors = []
    if(!form.name.value){
        errors.push('Name is required')
    }
    if(!emailReg.test(form.email.value)){
        errors.push('Email must be a valid email format')
    }
    if(!form.password.value || form.password.value.length < 6){
        errors.push('Password must be 6 characters or greater')
    }
    if(form.confirm.value != form.password.value){
        errors.push('Password confirm field should match original password')
    }
    displayErrors(errors)
}

function displayErrors(err){

    let submitButton = document.getElementById('submit')
    if(err.length > 0 ){
        submitButton.disabled = true
    }else{
        submitButton.disabled = false
    }
    document.getElementById('error__box').innerHTML = `
        <ul id="error__list">
            ${err.map(e => `<li> ${e} </li>`).join('')}
        </ul>
        `

}