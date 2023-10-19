import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Post = ({ profilePic, image, username, timestamp, message, galleryImage }) => {

    const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = new Date(timestamp?.toDate()).toLocaleString('en-US', options);
    return (
        <div className='w-100 my-2 p-2 rounded-3 bg-light shadow'>
<div className="d-flex align-items-start justify-content-between p-2" style={{ position: 'relative' }}>
  <div className="d-flex align-items-start">
    <Avatar src={profilePic} className='mx-1' />
    <div className="post_topInfo">
      <h3 style={{ fontSize: 'medium', margin: '0' }}>{username}</h3>
      <p style={{ fontSize: 'small', margin: '0', color: 'gray' }}>
        {formattedDate}      <PublicOutlinedIcon fontSize='verysmall'/>

      </p>
    </div>
  </div>
  <button className='btn m-0 p-0'> <MoreHorizOutlinedIcon /></button>
</div>

            <div className="post_bottom my-1 px-2 py-1">
                <p className='m-0'>{message}</p>
            </div>    

           { image  &&    <div className="post_image">
                <img className='w-100' src={image} alt="" />
            </div>  }
           
            { galleryImage  &&    <div className="post_image">
                <img className='w-100' src={galleryImage} alt="" />
            </div>  }
            <div className="post_options mt-2 mx-2 border-top border-bottom py-1 d-flex align-items-center justify-content-around row "
             style={window.innerWidth < 450 ? {fontSize:'10px'}: null }>
                <div className="opt col text-center">
                    <ThumbUpOutlinedIcon fontSize='small'/> Like
                </div> 
                <div className="opt col text-center">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    Comment
                </div>
                <div className="opt col text-center">
                    <ShortcutIcon fontSize='small'/>
                    Share
                </div>
              
            </div>
        </div>
    )
}

export default Post