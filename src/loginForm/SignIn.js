
import "./signin.css"
import useFirebase from "../firebase/FirebaseAuth";
import { Link } from "react-router-dom";



const SignIn = () => {
    const {user,GoogleSignIn,logOut,handelEmail,handelPassword,HandelRegistration}=useFirebase();
    return (
        <div expand="lg"  className="root" >
        
      <div className="main">
     
       <input onBlur={handelEmail} className="field"  type="email" placeholder="Enter your email" /><br />
      
       <input onBlur={handelPassword} className="field"  type="password" placeholder="Enter your password" /><br />
       <button onClick={HandelRegistration} className="button" style={{width:"208px"}} variant="danger">Sign In</button><br />
    {
      user.email?
      
      <button onClick={logOut} className="button" style={{width:"208px"}} variant="danger">Log out </button>
      : <button onClick={GoogleSignIn} className="button" style={{width:"208px"}} variant="danger"> <i class="fab fa-google"></i> Sign with google </button>
    }
      
     </div>
     <div style={{textAlign:"center",paddingBottom:"10px"}}><p>If you are new here then / <Link  to={"/signup"}>Register</Link>   </p></div>
   </div>
    );
};

export default SignIn;