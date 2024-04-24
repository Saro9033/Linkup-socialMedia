import React from 'react'
import WidegetItems from './WidegetItems'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ads from '../Images/ads.jpg'

import profile from '../Images/Profile.webp'

const Widget = () => {
  return (
  <>  {window.innerWidth > 1000 ? 
    <div className='w-25' style={{position:'fixed',height:'100vh',paddingBottom:'20px', overflowY: 'auto', marginLeft:'75%'}}>
        
        <div className='mt-2'>
            <p style={{color:'rgb(105,107,111)', fontWeight:'bold'}}>Sponsored</p>
             <div className='cards rounded-2 d-flex align-items-center'>
                <img width="80px" src={ads}  alt="" />
                <strong>Build AR lenses for SnapChat</strong>
             </div>
             <div className='cards rounded-2 d-flex align-items-center'>
                <img width="80px" src={ads} alt="" />
                <strong>Build AR lenses for SnapChat</strong>
             </div>
          
        </div>

        <div className='mt-3 border-top border-bottom'>
          <div className='d-flex justify-content-between mt-2 align-items-center'> 
          <p className='m-0' style={{color:'rgb(105,107,111)', fontWeight:'bold'}}>Contacts</p>  
          <button className='btn rounded-5'><MoreHorizOutlinedIcon /> </button>  
            </div> 

           <WidegetItems name="raj kumar" URL = {profile}/>
           <WidegetItems name="Gokul" URL = {profile}/>
           <WidegetItems name="Vj Raghul" URL = {profile}/>
           <WidegetItems name="Gopi" URL = {profile}/>
           <WidegetItems name="Chiyaan" URL = {profile}/>
           <WidegetItems name="Harish" URL = {profile}/>

        </div>
    </div>  : null } </> 
  )
}

export default Widget