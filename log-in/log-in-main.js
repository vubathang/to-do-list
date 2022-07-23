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


let logBtn = document.querySelector('.form-submit')
let createUser = document.querySelector('#createUser')

function checkUser() {
  let username = document.getElementById('user').value
  let password = document.getElementById('pass').value
  let user = localStorage.getItem(username)
  let data  = JSON.parse(user)
  if(user == null) {
    alert("Vui lòng nhập username password")
  }
  else if(username == data.username && password == data.password) {
    window.location.href="../index.html"
  }
  else {
    alert("Vui lòng nhập username password")
  }
}


logBtn.addEventListener('click', checkUser)

// createUser
createUser.addEventListener('click', function() {
  window.location.href="../sign-up/sign-up.html"
})