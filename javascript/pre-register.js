let submit
let email
let username
let password
let dob
let nation
let agreement
let maleRBtn
let femaleRBtn
let errorMsg
let successMsg

let initiate = function () {
  email = document.getElementById("emailTxt").value
  username = document.getElementById("usernameTxt").value
  password = document.getElementById("passwordTxt").value
  dob = document.getElementById("dob").value
  nation = document.getElementById("nation").value
  agreement = document.getElementById("agreement").checked
  maleRBtn = document.getElementById("maleRBtn").checked
  femaleRBtn = document.getElementById("femaleRBtn").checked
  errorMsg = document.getElementById("error-message")
  successMsg = document.getElementById("success-message")
  submit = document.getElementById("submit")
  errorMsg.innerHTML = ""
  successMsg.innerHTML = ""
}

let validate = function (e) {
  e.preventDefault()
  initiate()

  if (!email.includes("@")) 
    errorMsg.innerHTML = "Email must includes '@'"
  else if (email.indexOf("@") != email.lastIndexOf("@"))
    errorMsg.innerHTML = "Email must includes only one '@'"
  else if (email.indexOf("@") + 1 == email.lastIndexOf(".") || email.indexOf("@")-1 == email.lastIndexOf("."))
    errorMsg.innerHTML = "Email invalid, '@' and '.' must not near each other"
  else if (email.indexOf("@") > email.lastIndexOf("."))
    errorMsg.innerHTML = "Email invalid, there must be at least one '.' after '@'"
  else if (username == "")
    errorMsg.innerHTML = "Username must not be empty"
  else if (password.length < 8)
    errorMsg.innerHTML = "Password must be at least 8 characters"
  else if (maleRBtn == false && femaleRBtn == false)
    errorMsg.innerHTML = "Gender must be fill"
  else if (dob == "")
    errorMsg.innerHTML = `Date of birth must not be empty`
  else if (nation == "")
    errorMsg.innerHTML = "Please select your nation"
  else if (agreement == false)
    errorMsg.innerHTML = "You must agree with our terms"
  else
    successMsg.innerHTML= "Pre-Register Success"

}

initiate()
submit.addEventListener("click", e => validate(e))