const userName = document.getElementById('user')
const email = document.getElementById('email')
const password = document.getElementById('pass')
const password_repeat = document.getElementById('pass-repeat')
const signupBtn = document.querySelector('.form-submit')


signupBtn.addEventListener('click', function() {
  const user = {
    'password': password.value,
    'email': email.value
  }
  localStorage.setItem(userName.value, JSON.stringify(user))
  console.log('Done');
})

