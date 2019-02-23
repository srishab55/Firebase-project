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
document.getElementById('test').addEventListener('submit',submitForm);
//submit form 
function submitForm(e){

    e.preventDefault();
    
    //Get values

    var name=getInputVal('name');
    var email=getInputVal('email');
    var College=getInputVal('College');
    var gender=getInputVal('gender');
    //save msg to firebase 
    console.log(123);
    saveMessage(name,email,gender,College);

    document.getElementById('test').reset();
}

function getInputVal(id)
{
    return document.getElementById(id).value;
}

//save msg to firebase

function saveMessage(name , email,gender,College)
{
     var newMessageRef=messageRef.push();
     newMessageRef.set({
         name: name,
         email:email,
         College: College,
         gender:gender
     });
}
