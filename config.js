import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
 } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMYoixYEZRJbWknWhs9CpZmsiToR19JMs",
  authDomain: "real-time-chat-applicati-2342e.firebaseapp.com",
  projectId: "real-time-chat-applicati-2342e",
  storageBucket: "real-time-chat-applicati-2342e.firebasestorage.app",
  messagingSenderId: "923853130091",
  appId: "1:923853130091:web:4813e6f0bcf4b46f0d242e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut 
}
