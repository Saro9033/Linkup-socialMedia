import React from 'react'

const MartketCards = ({profileImg, price, name,location }) => {
  return (
           <div className="card shadow m-2" style={window.innerWidth > 800 ? {width: '15rem', border:'none'} : null}>
  <img className="card-img-top" src={profileImg} alt="Card image cap"/>
  <div className="card-body " style={{background:'rgb(255,255,255)'}}>
  <h5 className="card-title p-0 m-0"> &#8377;{price}</h5>
    <p  style={{fontSize:'0.9rem'}} className="card-text py-1 m-0">{name}</p>
    <p style={{fontSize:'0.8rem', color:'#696B6F'}}  className="card-text py-0 m-0" >{location ? location : "chennai"}</p>
  </div>
</div> 
   
  )
}

export default MartketCards