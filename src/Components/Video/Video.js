import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MovieSharpIcon from '@mui/icons-material/MovieSharp';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import VideoCards from './VideoCards';
import reels from '../../Images/instagram-reel.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
const Video = () => {
  return (
    <div>
         <div className='row m-0'>
        
        <div className='d-none d-md-block d-sm-none col-4 pt-2 px-2' style={{ background: 'rgb(255,255,255)', height:'100vh',position:'fixed', overflowY: 'auto'}}>
          <div className=' mx-2 mt-2  d-flex justify-content-between align-items-center'>
            <h4 className='text-dark m-0'><strong>Video</strong></h4>
            <div style={{ background: 'rgb(228,230,235)' }} className='rounded-5 p-1'><SettingsRoundedIcon style={{ color: 'black' }} /></div> 
          </div>
          <div className='friendsMenu my-3'>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div className='p-1 rounded-5' style={{background:"#FD5056", color:'white'}}><YouTubeIcon style={{ color: 'white' }} /> </div><strong className='px-3'>Home</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><VideocamIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Live</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><img width='22px' alt='' src={reels} style={{ color: 'black' }} /> </div><strong className='px-3'>Reels</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><MovieSharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Shows</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><ExploreSharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Explore</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><BookmarkSharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Saved videos</strong> </button>
    
          </div>
        </div>

        <div className={window.innerWidth > 800 ? 'col-8 p-4' : 'col-12 px-2 m-0'} style={window.innerWidth > 800 ? { background: 'rgb(240,242,245)',marginLeft: '33%' } : {background: 'rgb(255,255,255)'}}>

        {window.innerWidth > 800 ? <h5> <strong>New Videos for you</strong></h5> : 
        <> 
        <div className='d-flex align-items-center justify-content-between my-2'>
          <h6 className='m-0'> <strong>Videos </strong></h6>          
          <button data-bs-toggle="offcanvas" data-bs-target="#search" className=' btn rounded-circle' style={{ backgroundColor: 'rgb(228, 232, 235)' }}>
            <i className='fa fa-search' />
          </button>     
           </div>

           <div className='d-flex justify-content-between align-items-center' style={{ fontSize:'0.7rem', fontWeight:'700', overflowX:'auto', width:'100%',whiteSpace: 'nowrap'}}>

            <div style={{background:'rgb(230, 241, 255)', padding:'2px 7px', borderRadius:'15px'}}><YouTubeIcon style={{color:'rgb(25, 119, 240)', fontSize:'medium'}}/> <strong style={{color:'rgb(25, 119, 240)'}}>For you</strong></div>
            <div style={{padding:'2px 7px', borderRadius:'15px'}} className='mx-2'><img width='13px' alt='' src={reels} style={{ fontSize:'medium'}}/> <strong >Reels</strong></div>
            <div style={{ padding:'2px 7px', borderRadius:'15px'}}><CheckBoxIcon style={{fontSize:'medium'}}/> <strong >Following</strong></div>
            <div style={{ padding:'2px 7px', borderRadius:'15px'}}><BookmarkSharpIcon style={{fontSize:'medium'}}/> <strong >Saved</strong></div>
            <div style={{ padding:'2px 7px', borderRadius:'15px'}}><SportsEsportsIcon style={{fontSize:'medium'}}/> <strong >Gaming</strong></div>

           </div>



           </>
        
        }



          <div className='d-flex flex-column justify-content-center'>
            <VideoCards youtubeLink="https://www.youtube.com/embed/iogcY_4xGjo?si=iLGuaKp-hDn1e-bE"/>
            <VideoCards youtubeLink="https://www.youtube.com/embed/r_gV5CHOSBM?si=WhbydQRlkLv5qkyx" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Video