// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCSiwkf705cGPB5xKxdP-ZIPIOnOvLRNJY",
    authDomain: "project101-af24b.firebaseapp.com",
    databaseURL: "https://project101-af24b-default-rtdb.firebaseio.com",
    projectId: "project101-af24b",
    storageBucket: "project101-af24b.appspot.com",
    messagingSenderId: "677970024894",
    appId: "1:677970024894:web:aad856724be09b7d9981ef"
  };
   firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user";
        localStorage.setItem("user_name" , user_name)
        window.location="chat_room.html"
            
        
        
    

    });
    
}



