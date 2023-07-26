
var firebaseConfig = {
    apiKey: "AIzaSyDjD-SFF5t58aGxU2phimFh7xVc-UK0HY8",
    authDomain: "kwitter-c2ccc.firebaseapp.com",
    databaseURL: "https://kwitter-c2ccc-default-rtdb.firebaseio.com",
    projectId: "kwitter-c2ccc",
    storageBucket: "kwitter-c2ccc.appspot.com",
    messagingSenderId: "45267503621",
    appId: "1:45267503621:web:85b46ad6dd820bf1dd6a6c"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



