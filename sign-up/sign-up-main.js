const signupBtn = document.querySelector('.form-submit')

function getInfo(e) {
  const userName = document.getElementById('user')
  const email = document.getElementById('email')
  const password = document.getElementById('pass')
  const password_confirm = document.getElementById('pass-confirm')
  
  let user = {
    username : userName.value,
    email : email.value,
    password : password.value
  }
  let json = JSON.stringify(user)
  localStorage.setItem(userName.value, json)
  alert('Đăng kí thành công')
  // reset form
  userName.value = ''
  email.value = ''
  password.value = ''
  password_confirm.value = ''
}


signupBtn.addEventListener('click', getInfo)