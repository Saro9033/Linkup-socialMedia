import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const GroupCard = ({image, username, profilePic}) => {
  return (
    <div>
      <div className='w-100 my-2 p-2 rounded-3 bg-light shadow'>
        <div className="d-flex align-items-start justify-content-between p-2" style={{ position: 'relative' }}>
          <div className="d-flex align-items-start">
            <Avatar src={profilePic} style={{marginRight:'10px'}} />
            <div className="post_topInfo GrpCard">
              <h3 style={{ fontSize: 'medium', margin: '0' }}>{username}          
               <a style={{ padding:'0 7px', margin:'0'}} href="#">Join</a></h3>
              <p style={{ fontSize: 'small', margin: '0', color: 'gray' }}>
                formattedDate     
                 <PublicOutlinedIcon style={{marginLeft:'5px'}} fontSize='verysmall' />
              </p>
            </div>
          </div>
          <button id='grpButton' className='btn m-0 p-1 rounded-5' style={{border:'none'}}> 
          <MoreHorizOutlinedIcon /></button>

        </div>

        <div className="post_bottom my-1 px-2 py-1">
          <p className='m-0'>message</p>
        </div>

        {image && <div className="post_image">
          <img className='w-100' src={image} alt="" />
        </div>}

        <div className="post_options mt-2 mx-2 border-top border-bottom py-1 d-flex align-items-center justify-content-around row "
          style={window.innerWidth < 450 ? { fontSize: '10px' } : null}>
          <div className="opt col text-center">
            <ThumbUpOutlinedIcon fontSize='small' /> Like
          </div>
          <div className="opt col text-center">
            <ChatBubbleOutlineIcon fontSize='small' />
            Comment
          </div>
          <div className="opt col text-center">
            <ShortcutIcon fontSize='small' />
            Share
          </div>

        </div>
      </div>
    </div>
  )
}

export default GroupCard