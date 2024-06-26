import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InboxIcon from '@mui/icons-material/Inbox';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SellIcon from '@mui/icons-material/Sell';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import MartketCards from './MartketCards';
import AddIcon from '@mui/icons-material/Add';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import droneImg from '../../Images/dron.jpg'
const Market = () => {
  return (
    <div>
   <div className='row m-0  '>
        <div className='col-4 pt-2 px-2 d-none d-md-block d-sm-none' style={{ background: 'rgb(255,255,255)', height:'100vh',position:'fixed', overflowY: 'auto' }}>
          <div className='mx-2 mt-2 d-flex align-items-center justify-content-between'>
            <h4 className='text-dark m-0'><strong >MarketPlace</strong></h4>
            <div style={{ background: 'rgb(228,230,235)' }} className='rounded-5 p-1'><SettingsRoundedIcon style={{ color: 'black' }} /></div> 
          </div>
          <div className='friendsMenu my-3'>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div className='p-1 rounded-5'style={{background:"#FD5056", color:'white'}}><StorefrontIcon style={{ color: 'white' }} /> </div><strong className='px-3'>Browse all</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><NotificationsRoundedIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Notifications</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><InboxIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Inbox</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <ShoppingBagIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Buying</strong></div>
              <ChevronRightSharpIcon />
            </button>            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <SellIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Selling</strong></div>
              <ChevronRightSharpIcon />
            </button>
          </div>

          <button className='btn w-100 text-center' 
          style={{border:'none', outline:'none', background:'rgb(235,245,255)',  fontWeight:'bold',background:"#FD5056", color:'white'}}>
            <AddIcon/> Create new listing </button>

            <div className='marketLink p-2 my-2 border-top border-bottom'>
                <div className='py-2'>
                     <strong>Filters</strong>
                     <p className='m-0 my-1'> <button  style={{textDecoration:'none', fontWeight:'bold'}} className='text-center w-100'> Chennai, TamilNadu</button></p>
                </div>
            </div>
            <strong className='px-2 my-4'>Categories</strong>

            <div className='friendsMenu my-3'>
             <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><DirectionsCarIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Vehicle</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><NotificationsRoundedIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Property for rent</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><PhoneAndroidIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Electronics</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><FavoriteIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Family</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><SportsEsportsIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Toys & Games</strong> </button>

           
            </div>

        </div>


        <div className={window.innerWidth > 800 ? 'col-8 p-4' : 'col-12 px-2 m-0'} style={{ background: 'rgb(240,242,245)',marginLeft: '33%'  }} >
          <div className='d-flex justify-content-between my-2'>
          {window.innerWidth > 800 ? 
          <h5> <strong>Today's Picks</strong></h5> : 
          <h5> <strong>Market Place</strong></h5> }
          {window.innerWidth > 800 ?
            <button style={{border:'none', color:'blue', textDecoration:'underline', backgroundColor:'rgb(240,242,245)'}} href='#'>Chennai </button> :
            <button data-bs-toggle="offcanvas" data-bs-target="#search" className=' btn rounded-circle' style={{ backgroundColor: 'rgb(228, 232, 235)' }}>
            <i className='fa fa-search' />
          </button> 
          }
            
            </div> 

       {window.innerWidth > 800 ?    <div className='d-flex justify-content-center flex-wrap w-100'>
            <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
             <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
              <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
              <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
              <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
              <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />       
          </div>
: 
<> 
<div className='w-100 d-flex'>
  <div style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
  </div>
  <div  style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
  </div>
</div>
<div className='w-100 d-flex'>
  <div style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
  </div>
  <div  style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" /> 
  </div>
</div>
<div className='w-100 d-flex'>
  <div style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" />
  </div>
  <div  style={{width:'50%'}}>
  <MartketCards  profileImg={droneImg}
             price="2,550" name="Drone with HD Camera"  location="KPM" /> 
  </div>
</div>

</>
        }

        </div>
      </div>

    </div>
  )
}

export default Market