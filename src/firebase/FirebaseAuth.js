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


console.log(email,password)
const handelEmail=e=>{
setEmail(e.target.value);
}
const handelPassword=e=>{
    setPassword(e.target.value);
}
const HandelRegistration=e=>{

createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
    
    setUser(result)
    alert("your data submited")
    
  })
e.preventDefault()
}


    const GoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
           alert("your data accepted")
        })
        .catch(error=>{
      console.log(error,"error")
        })
    }
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            alert("do you want to logOut")
            setUser({})
           
          })
    }
    useEffect(()=>{
      const unsubcribe=  onAuthStateChanged(auth, (currentUser) => {
          //  console.log("auth state change ",currentUser)
           setUser(currentUser)
            
          });
          return ()=>{
            unsubcribe();
          }
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