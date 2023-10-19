import React from 'react'
import fbLogo from '../Images/fblogo.png'
import {auth, provider} from "../firebase"
import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth';
import { useStateValue } from '../Context/StateProvider';
import { actionTypes } from './reducer';


const Login = () => {
    const [{user}, dispatch] = useStateValue();
  
    const signIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  return (
    <div className='d-grid' style={{placeItems:'center', height:'100vh'}}>
        <div className='d-flex flex-column'>
            <img  style={{objectFit:'contain',height:'15vh'}} src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="" />
            <img className='mt-4' style={{objectFit:'contain',height:'4vh'}} src={fbLogo} alt="" />
        </div>

        <Button type='submit' className='btn btn-primary w-50 py-2' style={{fontWeight:'800px', backgroundColor:'#2e81f4', color:'white'}} onClick={signIn} >
            Sign In
        </Button>

    </div>
  )
}

export default Login