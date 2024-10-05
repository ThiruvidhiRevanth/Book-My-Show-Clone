// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrh_W7WGqiiFomhMYzK7YxZg3kEFnCWtg",
authDomain: "bookmyshow-7efd3.firebaseapp.com",
projectId: "bookmyshow-7efd3",
storageBucket: "bookmyshow-7efd3.appspot.com",
messagingSenderId: "885717996928",
appId: "1:885717996928:web:84463973feaa5174a41d65",
measurementId: "G-QJHN6BWHDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
//console.log(auth);

const provider = new GoogleAuthProvider();
console.log(provider);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      // User is signed in
      const profilePicUrl = user.photoURL || "img/default-profile.png";  // Fallback if no profile picture
      document.getElementById("profile-pic").src = profilePicUrl;
      document.getElementById("profile-pic1").src = profilePicUrl;


      // Show profile container and hide sign-in button
      document.getElementById("signin-btn").style.display = "none";
      document.getElementById("signin-btn1").style.display = "none";

      document.getElementById("profile-container").style.display = "block";
      document.getElementById("profile-container1").style.display = "block";
      document.getElementById("singout").style.display = "block";
      document.getElementById("profile-name").textContent = user.displayName;
     

  } else {
      // No user is signed in
      document.getElementById("signin-btn").style.display = "block";
      document.getElementById("signin-btn1").style.display = "block";

      document.getElementById("profile-container").style.display = "none";
      document.getElementById("profile-container1").style.display = "none";

  }
});

//----- Google login code start	  
document.getElementById("google-login").addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      
      const profilePicUrl = user.photoURL || "img/default-profile.png";  // Fallback to default if no profile image

      // Set the profile picture URL
      document.getElementById("signin-btn").style.display = "none";
      document.getElementById("signin-btn1").style.display = "none";
      document.getElementById("singout").style.display = "block";


      document.getElementById("profile-container").style.display = "block";
      document.getElementById("profile-container1").style.display = "block";

      document.getElementById("profile-pic").src = profilePicUrl;
      document.getElementById("profile-pic1").src = profilePicUrl;
      document.getElementById("profile-name").textContent = user.displayName;
      document.getElementById('id01').style.display='none'


      alert("Welcome "+user.displayName);
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });		  		  
});
document.getElementById("google-login1").addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert("Welcome "+user.displayName);
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });		  		  
});
//----- End