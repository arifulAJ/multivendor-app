import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializationAuthentic from "./Firebase.init";
import { useEffect, useState } from "react";

initializationAuthentic()

const useFirebase=()=>{
    
    const [user,setUser]=useState({})
  
    const googleProvider= new GoogleAuthProvider()
    const auth=getAuth()
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const handelEmail=e=>{
setEmail(e.target.value);
}
const handelPassword=e=>{
    setPassword(e.target.value);
}
const HandelRegistration=e=>{
console.log(email,password);
createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
    
    setUser(result)
  })
e.preventDefault()
}


    const GoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user.email
                )
        })
        .catch(error=>{
      console.log(error,"error")
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            } 
          });
    },[])
    return{
        GoogleSignIn,user,
        handelEmail,
        handelPassword,
        HandelRegistration,
        logOut
    }

}
export default useFirebase