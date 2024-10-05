
    // setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyDrh_W7WGqiiFomhMYzK7YxZg3kEFnCWtg",
    authDomain: "bookmyshow-7efd3.firebaseapp.com",
    projectId: "bookmyshow-7efd3",
    storageBucket: "bookmyshow-7efd3.appspot.com",
    messagingSenderId: "885717996928",
    appId: "1:885717996928:web:84463973feaa5174a41d65",
    measurementId: "G-QJHN6BWHDW"
  
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
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
// Sign up function
const signUp = () => {
const email = document.getElementById("email1").value;
const password = document.getElementById("password1").value;
const confirmPassword = document.getElementById("password2").value;

if (email === ""|| password === "" || !confirmPassword === "") {
    alert('Please fill in all fields');
    return;
} 


if (password.length < 6) {
    alert('Password must be at least 6 characters long');
    return;
}

if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
}
// firebase code
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        
        alert("You are Signed Up")
        
        console.log(result)
        
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        
    });
}


// Sign In function
const signIn = () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
// firebase code
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        alert("You are Signed In")
        
        console.log(result);
        const user = result.user;
        const profilePicUrl = user.photoURL || "img/default-profile.png";  // Fallback to default if no profile image

        // Set the profile picture URL
        document.getElementById("profile-pic").src = profilePicUrl;
        document.getElementById("signin-btn").style.display = "none";
            document.getElementById("profile-container").style.display = "block";
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
    });
}
        
function signOut() {
    auth.signOut().then(function() {
       
        // Sign-out successful, perform UI changes
        document.getElementById("signin-btn").style.display = "block";
        document.getElementById("signin-btn1").style.display = "block";

        document.getElementById("profile-container").style.display = "none";
        document.getElementById("profile-container1").style.display = "none";

        document.getElementById("profile-pic").src = profilePicUrl;
        document.getElementById("singout").style.display = "block";  // Hide sign-out button after sign out

        document.getElementById("profile-pic1").src = profilePicUrl;

        // Instead of reload(true), use this approach to ensure proper page reload
        window.location.reload();

        alert("Signed out successfully");
    }).catch(function(error) {
        // Handle errors here if sign-out fails
        console.error("Sign-out error: ", error);
    });
}





    
   

    
   









