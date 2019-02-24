function  submitClick(){
  var name=document.getElementById("name").value;
  var username=document.getElementById("username").value;
  var pass1=document.getElementById("password1").value;
  var pass2=document.getElementById("password2").value;
  var email=document.getElementById("email").value;
  var phno=document.getElementById("phno").value;
  writeUserData(name,username,pass1,email,phno);
  window.alert("user registration successful")
}
function writeUserData(name,username,pass1,email,phno) {
  firebase.database().ref('register/').push({
    name:name,
    username: username,
    password:pass1,
    email:email,
    phone_number:phno,
    paid:0
  });
}
