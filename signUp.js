import{ auth,
    createUserWithEmailAndPassword,
    signOut 
} from "./config.js"

//CREATE USER WITH EMAIL AND PASSWORD

let createUser = (event)=>{
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
    console.log("User" , res.user);
    alert("Message sent successfully")
    
  })
  .catch((error) => {
    console.log('Error' , error.code);
    
  });

};

let signUpbtn = document.getElementById('signUpbtn');
signUpbtn.addEventListener('click' , createUser);


