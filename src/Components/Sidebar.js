import React, { useState } from 'react'
import { useStateValue } from '../Context/StateProvider';
import SidebarRow from './SidebarRow'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import RestoreIcon from '@mui/icons-material/Restore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import VideoRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import StoreRoundedIcon from '@mui/icons-material/StorefrontTwoTone';
import EventIcon from '@mui/icons-material/Event';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MessageIcon from '@mui/icons-material/Message';
import BloodtypeSharpIcon from '@mui/icons-material/BloodtypeSharp';
import SportsEsportsSharpIcon from '@mui/icons-material/SportsEsportsSharp';
import AssistantPhotoSharpIcon from '@mui/icons-material/AssistantPhotoSharp';
const Sidebar = () => {

  const [expand, setExpand] = useState(false)
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="w-25 d-none d-sm-none d-md-block" 
    style={{background:'rgb(240,242,245)',overflowY:'auto', height:'100vh', paddingBottom:'10%',position:'fixed'}}>
       <SidebarRow title={user.displayName} src={user.photoURL}/>
        <SidebarRow title="Friends" Icon={PeopleRoundedIcon}/>
        <SidebarRow title="Memories" Icon={RestoreIcon}/>
        <SidebarRow title="Saved"  Icon={BookmarkIcon}/>
        <SidebarRow title="Groups" Icon={GroupsRoundedIcon}/>
        <SidebarRow title="Video" Icon={VideoRoundedIcon}/>
        <SidebarRow title="MarketPlace" Icon={StoreRoundedIcon}/>
        <SidebarRow title="Events" Icon={EventIcon}/>
        <SidebarRow title="Ads Manager" Icon={EqualizerIcon}/>
        <SidebarRow title="Fundraiser" Icon={FavoriteIcon}/>

        {
  expand && 
  <> 
  <SidebarRow title="Blodd donation" Icon={BloodtypeSharpIcon}/>
  <SidebarRow title="Messenger" Icon={MessageIcon}/>
  <SidebarRow title="Play Game" Icon={SportsEsportsSharpIcon}/>
  <SidebarRow title="Pages" Icon={AssistantPhotoSharpIcon}/>


  </>
}

        <button className='py-2 d-flex px-3 Menubutt w-100' onClick={()=>setExpand(!expand)} style={{border:'none', outline:'none', paddingRight:'9px'}}>
          { !expand 
          ? 
          <div > <ExpandMoreIcon className='rounded-circle' style={{ color:'rgb(8,102,255)', background:'rgb(216,218,223)', fontSize:'28px'}} /> See more  </div> 
           : 
           <div> <ExpandLessIcon className='rounded-circle' style={{ color:'rgb(8,102,255)',background:'rgb(216,218,223)', fontSize:'28px'}} /> See less  </div>
          }
         </button>



    </div>
  )
}

export default Sidebar