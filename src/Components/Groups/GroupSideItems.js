import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const GroupSideItems = ({ imgURL, chName, time, id }) => {
  const collapseId = `collapse${id}`;
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
    <div className={`d-flex flex-column justify-content-between shadow mx-2 px-2 align-items-center my-3 rounded-2 py-2`} style={{ background: 'rgb(240,242,245)' }}>
    <div className='w-100 d-flex align-items-center justify-content-between pb-2'>  <div className='d-flex align-items-center'>
        <img className='rounded-3' style={{ marginRight: '8px' }} src={imgURL} alt="" width='50px' height='50px' />
        <div>
          <p className='m-0 p-0' style={{ fontSize: '0.9rem', fontWeight: '500' }}>{chName}</p>
          <span className='m-0 p-0' style={{ fontSize: '0.8rem', color: '#696B6F' }}>Last active {time}</span>
        </div>
      </div>
      <button
        data-bs-toggle="collapse"
        data-bs-target={`#${collapseId}`}
        className='btn rounded-5 p-0 '
        style={{ border: '0', background: 'rgb(228,230,235)' }} onClick={()=>setIsCollapsed(!isCollapsed)}>
      { isCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon/>}
      </button> </div> 

      <div id={collapseId} className="collapse" style={{width:'90%'}}>
      <div className='w-100 d-flex justify-content-between'>
       <button  className='btn text-center p-1'
        style={{width:'70%', fontSize:'0.8rem',fontWeight:'600', border: '0', background: 'rgb(228,230,235)' }}> 
        Joined <span className='text-primary'>{chName}  </span>Channel</button> 
        <button  className='btn text-center p-1'
        style={{width:'15%', border: '0', background: 'rgb(228,230,235)' }}> <MoreHorizIcon fontSize='small'/> </button>
       </div>
    </div>
    </div>

  </>
  )
}


export default GroupSideItems