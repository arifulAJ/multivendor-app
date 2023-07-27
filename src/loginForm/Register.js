import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../firebase/FirebaseAuth';

import "./signin.css"

const Register = () => {
  const navigate=useNavigate()
  const location=useLocation()
 
    const {handelEmail,handelPassword,HandelRegistration}=useFirebase(location,navigate)
 

    return (
        <div expand="lg"   className="root" >
            
           <div className="main ">

         <form onSubmit={HandelRegistration}>
         <input className="field" type="text" placeholder="Name" /><br />
            <input onBlur={handelEmail} className="field"  type="email" placeholder="Type email" required /><br />
            <input onBlur={handelPassword}  className="field" type="password" placeholder="Type your password" required/><br />
            <input className="field"  type="password" placeholder="Conform password" /><br />
            <button className='button' style={{padding:"3px 20px",fontSize:"large"}} type="submit" value="sing up " > Submit</button>
         </form>
           </div>
          
          <div style={{textAlign:"center"}}> <p >All ready have an account /<Link to='/singin'> Sign-in </Link></p></div>
          
        </div>
    );
};

export default Register;