// show eye
const eyeBtnShow = document.querySelector('#eye_show')
const eyeBtnHidden = document.querySelector('#eye_hidden')
const eyeBtn = document.querySelector('.eye')

const swapEye = function() {
  eyeBtnHidden.classList.toggle('hidden')
  eyeBtnShow.classList.toggle('hidden')
}

const changeType = function() {
  swapEye()
  let typePass = document.getElementById('pass')
  if (typePass.type === 'password') {
    typePass.type = "text"
  }
  else {
    typePass.type ="password"
  }
}

// Save data by JSON

const username = document.getElementById('user')
const password = document.getElementById('pass')
const logBtn = document.querySelector('.form-submit')
const createUser = document.querySelector('#createUser')
// const checkUser = function() {
//   const myUsername = username.value
//   const myPassword = password.value
//   const user = JSON.stringify({'name':myUsername, 'password':myPassword})
//   localStorage.setItem(`User${localStorage.length}`, user)
// }

// logBtn.addEventListener('click', checkUser)

// Login
const logIn = function() {
  window.location.href="../index.html"
}

logBtn.addEventListener('click', logIn)

// createUser
createUser.addEventListener('click', function() {
  window.location.href="../sign-up/sign-up.html"
})