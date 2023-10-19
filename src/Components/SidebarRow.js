import { Avatar } from '@mui/material'
import React from 'react'

const SidebarRow = ({title, Icon, src}) => {
  return (
    <div className='srow d-flex align-items-center px-3 py-3' >
        {src && <Avatar src={src} style={{fontSize:'2rem'}}/>}
        {Icon && <Icon style={{fontSize:'2rem', color:'rgb(8,102,255)'}}/>}
       <p className='px-2 m-0'>{title}</p> 
    
    </div>
  )
}

export default SidebarRow