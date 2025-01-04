import{auth,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from './config.js'

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User Exist:" , user.uid);
      
    } else {
     window.location = 'index.html'
     
    }
  });
  


//SIGNUP WITH EMAIL AND PASSWORD

let signIn = (event)=>{
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
      console.log("Sign In Successfully" , res.user);
      
  })
  .catch((error) => {
   console.log('Error' , error.code) ;
   
  });
};

let logInbtn = document.getElementById('logInbtn');
logInbtn.addEventListener('click' , signIn);

