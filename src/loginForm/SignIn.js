
import "./signin.css"
import useFirebase from "../firebase/FirebaseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";



const SignIn = () => {
  const navigate=useNavigate()
  const location=useLocation()
 
    const {GoogleSignIn,handelEmail,handelPassword,HandelSignIn,errorMessage}=useFirebase(location,navigate);
    return (
        <div   className="root" >
          
          {errorMessage===null? <p>nothing</p> :alert(`you have got ${errorMessage}`)}
        
      <div className="main">
     
       <input onBlur={handelEmail} className="field"  type="email" placeholder="Enter your email" /><br />
      
       <input onBlur={handelPassword} className="field"  type="password" placeholder="Enter your password" /><br />
       <button onClick={HandelSignIn} className="button" style={{width:"208px"}} variant="danger">Sign In</button><br />
    
      
     
       <button onClick={GoogleSignIn} className="button" style={{width:"208px"}} variant="danger">  Sign with google </button>
    
      
     </div>
     <div style={{textAlign:"center",paddingBottom:"10px"}}><p>If you are new here then / <Link  to={"/signup"}>Register</Link>   </p></div>
   </div>
    );
};

export default SignIn;