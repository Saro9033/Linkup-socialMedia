import React from 'react'
import fbLogo from '../Images/fblogo.png'
import {auth, provider} from "../firebase/Config"
import { Button } from '@mui/material'
import { signInWithPopup  } from 'firebase/auth';
import { useStateValue } from '../Context/StateProvider';
import { actionTypes } from './reducer';



const Login = () => {
    const [user, dispatch] = useStateValue(); 

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
            <img className='mt-4 rounded-circle' style={{objectFit:'contain',height:'200px',width:'200px'}} src={fbLogo} alt="" />
        </div>

        <Button type='submit' className='btn btn-primary w-50 py-2' style={{fontWeight:'800px', backgroundColor:'#FF515E', color:'white'}} onClick={signIn} >
            Sign In
        </Button>

    </div>
  )
}

export default Login