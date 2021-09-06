/*var checkbox = document.querySelector("input[name=chance]");

checkbox.addEventListener('change', () => {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});*/

var checkbox = document.getElementById('check');
btx = document.getElementById('done')
checkbox.addEventListener('change', e => {
    if(e.target.checked){
        btx.removeAttribute('disabled')
    }else{
        btx.setAttribute('disabled', 'disabled')
    }

});

function validateForm(e) {
e.preventDefault()
    var name = document.format.entName.value
    var password = document.format.entPass.value
    var pass = document.format.entPass2.value
    var email = document.format.entEmail.value
    var dob = document.format.entAge.value
   if (name.length==0){
    return alert(`name is required`)
   }
   if (password.length<5){
    return alert(`password length should more than 5`)
   }
   if(password!=pass){
       return alert("Passwords don't match")
   }

    if(email.length==0){
       return alert("Email is required")
   }
      alert("details accepted successfully!")
      if(dob.value==="dd/mm/yyyy"){
          return alert("Enter an acceptable age to continue")
      }
   }

