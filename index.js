var messageRef=firebase.database().ref('register');
//event listener for form submit
var usernames=[];
var passwords=[];
document.getElementById('registrationForm').addEventListener('submit',submitForm);
//submit form
var flag=true;
function submitForm(e){

    e.preventDefault();
    var name=document.getElementById("name").value;
    var username=document.getElementById("username").value;
    var pass1=document.getElementById("password1").value;
    var pass2=document.getElementById("password2").value;
    var email=document.getElementById("email").value;
    var phno=document.getElementById("phno").value;
    if(pass1==pass2){
      username+="";
      var password=pass1;
      password+="";
      //console.log("username:"+username+" password:"+password);
      var leadsRef = firebase.database().ref('register');
      leadsRef.on('value', function(snapshot) {
        var all=[];
        var all1=[];
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            var str=childData.username;
            var str1=childData.password;
            usernames.push(str+"");
            passwords.push(str1+"");
            all.push(str+"");
            all1.push(str1+"");
        });
        //console.log(all);
        //console.log(all1);
        //console.log("("+all.includes(username)+")  ("+all1.includes(password) +")  ("+ all1[all.indexOf(username)]+")  ("+password+")  "+flag);
        if(all.includes(username) && all1.includes(password) && (all1[all.indexOf(username)]+""==password) &&flag){
            flag=false;
            all=[]
            all1=[]
            window.alert("you have already registered");
            window.location.href = "main.html";
        }
        else if(all.includes(username) &&flag){
          //flag=false;
          all=[]
          all1=[]
          window.alert("username must be unique.");
        }
        else if(flag) {
          all=[]
          all1=[]
          flag=false;
          writeUserData(name,username,pass1,email,phno);
        }
    });
  }
  else{
    window.alert("both passwords should match");
  }
}

function writeUserData(name,username,pass1,email,phno) {
  firebase.database().ref('register').push({
    name:name,
    username: username,
    password:pass1,
    email:email,
    phone_number:phno,
    paid:0
  });
  flag=true;
  window.location.href = "register.html"
  window.alert("user registration successful")

}
