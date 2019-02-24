 // Initialize Firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB3urwbUhycDY6jUTCiFloudGHBj7629M4",
    authDomain: "fir-auth-fb5c8.firebaseapp.com",
    databaseURL: "https://fir-auth-fb5c8.firebaseio.com",
    projectId: "fir-auth-fb5c8",
    storageBucket: "fir-auth-fb5c8.appspot.com",
    messagingSenderId: "143950457061"
  };
  firebase.initializeApp(config);

// referance message collection

var messageRef=firebase.database().ref('register');
//event listener for form submit
var usernames=[];
document.getElementById('test').addEventListener('submit',submitForm);
//submit form 
function submitForm(e){

    e.preventDefault();
    
    //Get values

    var fname=getInputVal('username');
    fname+="";
  //  var lname=getInputVal('lastname')
    var email=getInputVal('email');
    var mobile=getInputVal('mobile');
    var College=getInputVal('College');
   // var gender=document.getElementById('male');
    var Gender="";
  //  var events=document.getElementsByClassName('checkbox');
   // var str=events[2].value
  //  console.log(str);
    // if (gender.checked)
    // {
    //     Gender=document.getElementById('male').value;
    // }
    // else Gender=document.getElementById('female').value
    // //save msg to firebase 
    console.log(123);
    
    var leadsRef = firebase.database().ref('register');
  //   leadsRef.equalTo(fname).once('value', function(childSnapshot)  {
  //     console.log(childSnapshot+"123");

  //     var exists = (childSnapshot.val() !== null);
  //     //console.log(snapshot.val().fname);
  //     if (childSnapshot.exists()) alert("already exist");
  //     else {alert("done");saveMessage(fname,email,mobile,College);}
  //  });
  var flag=false;
    leadsRef.on('value', function(snapshot) {
      var all=[];
            snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        //console.log(childData.fname);
        var str=childData.fname;
        usernames.push(str+"");
        all.push(str+"");
      });
      if(all.includes(fname)&&!flag) console.log("Exist already");
     else if (!flag){flag=true;console.log("saved succesfully");saveMessage(fname,email,mobile,College); alert("Please keep the copy of downloaded form with you!!");
    }
  console.log(1212);
  });
 
    
    // if (gender.checked)
    // {
    //     Gender='M';
    // }
    // else Gender='F';
    document.getElementById('test').reset();
   // generatePDF(fname, email,mobile,College);

}

function getInputVal(id)
{
    return document.getElementById(id).value;
}
function generatePDF(name , email,mobile,college)
{
    var doc = new jsPDF();
	
		doc.setFontSize(20);
		doc.setTextColor(92, 76, 76);
		doc.text(23,3,"----VULCANZY 2K19 REGISTRATION FORM---")
		doc.text(23, 81, "NAME :"+name);
        doc.text(23, 122, "EMAIL :"+email);
        doc.text(23, 162, "MOBILE :"+mobile);
		doc.text(23, 182, "GENDER :"+gender);
        doc.text(23, 222, "COLLEGE :"+college);
        doc.text(23, 292, "CAMPUS AMABASSADOR SIGNATURE :");
		doc.save(name+"Vulcanzy");

}
//save msg to firebase

function saveMessage(fname,email,mobile,College)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         fname: fname,
         email:email,
         College: College,
         mobile: mobile
     });
}
// function read(fname)
// {
//     var leadsRef = firebase.database().ref('register');
// leadsRef.on('value', function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var childData = childSnapshot.val();
//       //console.log(childData.fname)
//     });
// });
// }
// function snapshotToArray(snapshot) {
//   var returnArr = [];

//   snapshot.forEach(function(childSnapshot) {
//       var item = childSnapshot.val();
//       item.fname = childSnapshot.key;

//       returnArr.push(item);
//   });

//   return returnArr;
// };
// function check(){
//   console.log(1234);
//   console.log("all vlues: "+usernames);
//   console.log(fname+"the current fname");
//   console.log(fname);
  
// };