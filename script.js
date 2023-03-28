function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})


const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function () {
	showCode.dataset.active = !active;
	active = !active
	if(active) {
		content.textContent = content.innerHTML;
		content.setAttribute('contenteditable', false);
	} else {
		content.innerHTML = content.textContent;
		content.setAttribute('contenteditable', true);
	}
})
const filename = document.getElementById('filename');

function fileHandle(value) {
	if(value === 'new') {
		content.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'txt') {
		const blob = new Blob([content.innerText])
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename.value}.txt`;
		link.click();
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}

// resert //

Initialize Userfront
Userfront.init("demo1234");

// 1. Reference the elements on the page
var passwordResetFormEl = document.getElementById("password-reset-form");
var alertEl = document.getElementById("alert");
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");

// 2. Reset the user's password
function formResetPassword(e) {
  // Prevent the form's default behavior
  e.preventDefault();
  // Reset the alert to empty
  setAlert();
  // Verify that the passwords match
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }
  // Call Userfront.resetPassword()
  Userfront.resetPassword({
    password: password
  }).catch(function (error) {
    setAlert(error.message);
  });
}

// Set the alert element to show the message
function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

// 3. Add an event listener for the password reset form submit
passwordResetFormEl.addEventListener("submit", formResetPassword);


// login

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBIk3KoVMoDUbW2mxQvfUy9sogc29LPsnQ",
	authDomain: "login-text-editor.firebaseapp.com",
	projectId: "login-text-editor",
	storageBucket: "login-text-editor.appspot.com",
	messagingSenderId: "783827525679",
	appId: "1:783827525679:web:a30d0194bf8ccbc5d3a6da",
	measurementId: "G-NE94CYTHK2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //initanalize variables
  const auth = firebase.auth();
  const database =firebase.database();
   
  //set up our sign up function
  function sign up (){

	
	Full name =document.getElementById('Full name').value
	Email address =document.getElementById('Email address').value
	Password =document.getElementById('Password').value
//get all imput fields
if (validate_email (email)==false || validate_password(password)==false ){
	alert('Email or Password is outta line')
	return
	//don't continue running the code
}
if(validate_field(Full name)== false ||){
	alert('one field is outta line!!')
	return
}
  
//move on with auth
auth.createuserwithEmailandPassword(Email,Password).then(function (){

})
.catch(function(error){
	//Firebase will use this alert of its errors
	var error_code= error.code 
	var error_message=error.message

	alert(error_message)
})

  }

  function validate_email(){
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
  }

  function validate_password(password){
	//firebase only accept lengths grater than 8
	if(password < 8){
		return false
	}
	else {
		return true
	}
  }
function validate_field(field) {
	if(field == null){
		return false
	}
	if (field.length <=0){
		return false{
			else {
				return true
			}
		}
		
	}
}

