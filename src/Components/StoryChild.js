import { Avatar } from '@mui/material'
import React from 'react'

const StoryChild = ({img,proSrc, title }) => {
  return (
    <div
    style={{
      backgroundImage: `url(${img})`,
      width: window.innerWidth < 500 ? '20vw' : '130px',
      height: window.innerWidth < 500 ? '25vh' : '250px',
    }}
    className="story"
  >
    <Avatar className="story_avatar" src={proSrc} />
    <h6>{title}</h6>
  </div>
  )
}

export default StoryChild