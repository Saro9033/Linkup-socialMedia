import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Avatar } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShortcutIcon from '@mui/icons-material/Shortcut';

const VideoCards = ({ youtubeLink }) => {
    return (
        <>
            {window.innerWidth > 800 ?
                <div className='w-100 my-2 px-3 py-2 rounded-3 bg-light shadow'>
                    <div className='top'>
                        <div className="d-flex align-items-start justify-content-between py-2" style={{ position: 'relative' }}>
                            <div className="d-flex align-items-start">
                                <Avatar />
                                <div className="post_topInfo mx-2">
                                    <h3 style={{ fontSize: 'medium', margin: '0' }}>username</h3>
                                    <p style={{ fontSize: 'small', margin: '0', color: 'gray' }}>
                                        formattedDate
                                        <PublicOutlinedIcon fontSize='verysmall' className='mx-1' />
                                    </p>
                                </div>
                            </div>
                            <button className='btn m-0 p-0'> <MoreHorizOutlinedIcon /></button>
                        </div>
                    </div>

                    <div className='center d-flex flex-column'>
                        <strong className='my-1'> Description </strong>
                        <iframe className="w-100 embed-responsive-item embed-responsive embed-responsive-16by9"
                            width="560" height="315" src={`${youtubeLink}?modestbranding=1&controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>



                    <div className="post_options mt-2 mx-2 border-top border-bottom py-1 d-flex align-items-center justify-content-between "
                        style={window.innerWidth < 450 ? { fontSize: '10px' } : { fontSize: '12px' }}>

                        <div className='d-flex align-items-center'> <div className="opt d-flex text-center">
                            <ThumbUpOutlinedIcon fontSize='small' /> Like
                        </div>
                            <div className="opt d-flex  text-center">
                                <ChatBubbleOutlineIcon fontSize='small' />
                                Comment
                            </div>
                            <div className="opt d-flex text-center">
                                <ShortcutIcon fontSize='small' />
                                Share
                            </div></div>

                        <div className='d-flex align-items-center '>
                            <p className='opt m-0 px-2'>456k</p>
                            <p className='opt m-0 px-2'>4.6k comments</p>
                            <p className='opt m-0 px-2'>16M views</p>
                        </div>

                    </div>
                </div>
                :

                <div className='w-100 my-2 border-top border-bottom'>
                    <div className='top'>
                        <div className="d-flex align-items-start justify-content-between py-2" style={{ position: 'relative' }}>
                            <div className="d-flex align-items-center">
                                <Avatar />
                                <div className="post_topInfo mx-2">
                                    <h3 style={{ fontSize: 'small', margin: '0' }}>
                                        <strong> username </strong>
                                        <button style={{background:'white', textDecoration: 'none',border:'none',color:'blue', fontSize: '11px', margin: '0 4px' }}><strong> Follow </strong></button>
                                    </h3>
                                    <p style={{ fontSize: '10px', margin: '0', color: 'gray' }}>
                                        formattedDate
                                        <PublicOutlinedIcon fontSize='verysmall' className='mx-1' />
                                    </p>
                                </div>
                            </div>
                            <button className='btn m-0 p-0'> <MoreHorizOutlinedIcon fontSize='verysmall' /></button>
                        </div>
                    </div>

                    <div className='center d-flex flex-column'>
                        <p className='my-1'> Description here</p>
                        <iframe rel="preload" as="font"  type="font/woff2" crossOrigin="anonymous"
                            className="embed-responsive-item"
                            src={`${youtubeLink}?modestbranding=1&controls=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="post_options mt-2 mx-2 border-top border-bottom py-1 d-flex align-items-center justify-content-between row "
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

            }
        </>
    )
}

export default VideoCards