//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBoFwi-4q1qfSEjvkTnxMkrsx8h1838rX0",
      authDomain: "kwitter-681f9.firebaseapp.com",
      databaseURL: "https://kwitter-681f9.firebaseio.com",
      projectId: "kwitter-681f9",
      storageBucket: "kwitter-681f9.appspot.com",
      messagingSenderId: "980209970562",
      appId: "1:980209970562:web:1186b5c37bb47001daf39b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
