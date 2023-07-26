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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
      
}   


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}

