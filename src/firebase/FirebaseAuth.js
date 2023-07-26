import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import initializationAuthentic from "./Firebase.init";
import { useEffect, useState } from "react";


initializationAuthentic()

const useFirebase=(location,navigate)=>{
  
 
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)

 const from= location?.state?.from?.pathname || "/"
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
//sign in
const HandelSignIn=e=>{
  signInWithEmailAndPassword(auth,email,password)
  .then((useCredentail)=>{
    const user=useCredentail.user
    alert("your data submiteded")
    console.log(user)
    email.reset()
    navigate(from,{replace:true})
  })
  .catch((error)=>{
    setErrorMessage(error.message);
    console.log(error)
  })
}

// registation 
const HandelRegistration=e=>{

createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
    
    setUser(result)
    alert("your data submited")
     navigate(from,{replace:true})
   
    
  })
  .catch(error=>{
    setErrorMessage(error.message);
  })
e.preventDefault()
}


    const GoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
           alert("your data accepted")
           navigate(from,{replace:true})
        })
        .catch(error=>{
          setErrorMessage(error.message);
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
        loading,
        errorMessage
    }

}
export default useFirebase