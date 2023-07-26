import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import initializationAuthentic from "./Firebase.init";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

initializationAuthentic()

const useFirebase=()=>{
    
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
  
    const googleProvider= new GoogleAuthProvider()
    const auth=getAuth()
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
// const nevigate=useNavigate()


console.log(email,password)
const handelEmail=e=>{
setEmail(e.target.value);
}
const handelPassword=e=>{
    setPassword(e.target.value);
}
//sign in
const HandelSignIn=e=>{
  signInWithEmailAndPassword(auth,email,password)
  .then((useCredentail)=>{
    const user=useCredentail.user
  })
  .catch((error)=>{
    console.log(error)
  })
}

// registation 
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
           setLoading(false)
            
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
        HandelSignIn,
        logOut,
        loading
    }

}
export default useFirebase