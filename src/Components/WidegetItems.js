import { Avatar } from '@mui/material'
import React from 'react'

const WidegetItems = ({URL,name}) => {
  return (
    <div className='w-items d-flex align-items-center my-3'>
 { URL && <Avatar src={URL} />  }   
   <h6 className='px-2 m-0'>{name}</h6>
    </div>
  )
}

export default WidegetItems