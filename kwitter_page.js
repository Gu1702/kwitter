const firebaseConfig = {
  apiKey: "AIzaSyA6_orCSDIVK9-Fxkl_bA_UHoWFVmfuxM8",
  authDomain: "teste-aec46.firebaseapp.com",
  databaseURL: "https://teste-aec46-default-rtdb.firebaseio.com",
  projectId: "teste-aec46",
  storageBucket: "teste-aec46.appspot.com",
  messagingSenderId: "350745000453",
  appId: "1:350745000453:web:6fad0144605c846b5ffa6c"
};

firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    }

    function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById('msg').value = "";
    }