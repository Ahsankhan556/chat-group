
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth ,GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyB4nosRN9-_B0RhwDHllEiBJGu7ykALvvY",
    authDomain: "chat-7942e.firebaseapp.com",
    projectId: "chat-7942e",
    storageBucket: "chat-7942e.appspot.com",
    messagingSenderId: "1092794170402",
    appId: "1:1092794170402:web:b13b7468bf0e9d74825e7b",
    measurementId: "G-Z92NC2V89X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const loginInWithGooglebtn = document.getElementById("loginInWithGooglebtn")
  

const signInWithGoogle = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    window.location.href = "chat.html"; // Redirect to dashboard page

  }).catch((error) => {
console.log("error")
  });
}

loginInWithGooglebtn.addEventListener("click",signInWithGoogle)



// Assuming SubmitDataEmail is the ID of your button
const submitButton = document.getElementById("SubmitDataEmail");

submitButton.addEventListener('click', (e) => {
  // Get the email and password values when the button is clicked
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  const auh = getAuth();
  
  // Use createUserWithEmailAndPassword to register the user
  createUserWithEmailAndPassword(auh, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
     console.log("scss")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.error(errorCode, errorMessage);
      alert("Registration failed. Please try again.");
    });
});

