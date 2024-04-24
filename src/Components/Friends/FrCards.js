import { Avatar } from '@mui/material'
import React from 'react'

const FrCards = ({profileImg, name }) => {
  return (
    <div> {window.innerWidth > 800 ? 
    <div className='m-1'> 
     <div className="card" style={{width: '12rem'}}>
  <img className="card-img-top" src={profileImg} alt="Card image cap"/>
  <div className="card-body" style={{background:'rgb(255,255,255)'}}>
    <h5 className="card-title p-0 m-0">{name}</h5>
    <p className="card-text p-0 m-0" style={{color:'black', fontSize:'0.9rem'}}>Mutual Friends</p>
    <a href="#"  className="w-100 my-1  btn" style={{background:"#FD5056", color:'white'}}>Confirm</a>
    <a href="#" className="w-100 my-1 btn text-dark" style={{background:"rgb(228,230,235)"}}>Delete</a>
  </div>
</div>   
    </div>

    : 

    <div>
      <div className='d-flex m-2 align-items-center'>
      <Avatar
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%', 
      }}
      className='rounded-circle'
      src={profileImg}
      alt="Profile Image"
    />     
     <div className='mx-2 w-100'>
      <strong className="p-0 m-0">{name}</strong>
      <p className="card-text p-0 m-0" style={{color:'black', fontSize:'0.9rem'}}>Mutual Friends</p>

      <div className='d-flex w-100'>
  <a href="#" className="w-100 btn "style={{background:"#FD5056", color:'white'}}>Confirm</a>
  <a href="#" className="w-100 mx-2 btn text-dark" style={{ background: "rgb(228,230,235)" }}>Delete</a>
</div>
      </div>

      </div>

    </div>



} </div>
  )
}

export default FrCards