//what is js => a web language prggraming 
//varibales => var , **let , const**
//regex => regular expertion // Literal syntax var regex = /^Mr\./; 
//constractor function => let regex = new RegexExp('^mr\.')
let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let warningUserName = document.querySelector('.user-warning')
let warningpass = document.querySelector('.password-warning')
let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{12,}$/
let userRegex =/^[A-Za-z]{8,}$/

//functions
const userCheck = ()=>{
if(userRegex.test(userNameInput.value)){
  warningUserName.classList.remove('warning-fade-in')
  warningUserName.innerHTML = ''
}else{
  warningUserName.classList.add('warning-fade-in')
  warningUserName.innerHTML = 'username must be 8 cahr'
}
}
const passwordCheck = ()=>{
  if(passRegex.test(passwordInput.value)){
    warningpass.classList.remove('warning-fade-in')
    warningpass.innerHTML = ''
  }else{
    warningpass.classList.add('warning-fade-in')
    warningpass.innerHTML = 'password must be 12 char uper and lower and special char'
  }
}

// //event 
// userNameInput.addEventListener('blur',userCheck)
// passwordInput.addEventListener('blur',passwordCheck)
//what is javascript
//varibale => var , let , const
//regex => regexEXP 
//littraly let regex = /lkjd/
//constractor => let regex = new RegexExp(kdjf)
//) { } ^ $ | \...
// let userNameInput = document.querySelector('.username')
// let userPassword = document.querySelector('.password')
// let userWarning = document.querySelector('.user-warning')
// let passWarning = document.querySelector('.password-warning')
// let userRegex =/^[A-Za-z]{8,}$/
// let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{12,}$/
// //functions
// const userCheck = ()=>{
// if(userRegex.test(userNameInput.value)){
//     userWarning.classList.remove('warning-fade-in')
//     userWarning.innerHTML = ''
// }else{
//     userWarning.classList.add('warning-fade-in')
//     userWarning.innerHTML = 'user name must be 8 char'
// }
// }
// const passwordCheck = ()=>{
//     if(passwordRegex.test(userPassword)){
//         passWarning.classList.remove('warning-fade-in')
//         passWarning.innerHTML = ''
//     }else{
//         passWarning.classList.add('warning-fade-in')
//         passWarning.innerHTML = 'password must be 12 char and special char and uper and lower char'
//     }
  
// }

// //events

// userNameInput.addEventListener('blur',userCheck)
// userPassword.addEventListener('blur',passwordCheck)






















