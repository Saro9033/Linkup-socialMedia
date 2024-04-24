import React, { useContext, useState } from 'react'
import { Avatar } from '@mui/material'
import { useStateValue } from '../Context/StateProvider';
import WestIcon from '@mui/icons-material/West';
import fbLogo from '../Images/fblogo.png'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

import OndemandVideoIcon from '@mui/icons-material/SmartDisplayOutlined';
import VideoRoundedIcon from '@mui/icons-material/SmartDisplayRounded';

import StorefrontIcon from '@mui/icons-material/Storefront';
import StoreRoundedIcon from '@mui/icons-material/StorefrontTwoTone';

import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

import AppsOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import FBICON from '../Images/fblogo.png'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MessageIcon from '@mui/icons-material/Message';
import { DataContext } from '../Context/dataContext';
import { Link } from 'react-router-dom';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
const Header = ({dark, setDark}) => {

  const { actHome, actFriend, actVideo, actMarket, actGrp, actMess, actNoti,
    handle1, handle2, handle3, handle4, handle5, handle6, handle7 } = useContext(DataContext);

  const [{ user }, dispatch] = useStateValue();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);


  const handleSearchButtonClick = () => {
    setSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  return (
    <nav className=" navbar-expand-sm navbar-light py-2 w-100 sticky-top" style={{ boxShadow: '1px 2px 5px rgb(223,225,228)', backgroundColor: 'white', zIndex: '1000' }}>

      <div className="d-flex justify-content-between align-items-center row" style={window.innerWidth > 800 ? { margin: '0 10px' } : { margin: '0 '}}>

        <div className='col-12 col-lg-3 col-md-3 p-0'>
          <div className="d-flex align-items-center " style={window.innerWidth < 800 ? { justifyContent: 'space-between', padding: '0 8px' } : null}>
            {window.innerWidth > 800 ?

              <div className="d-none d-md-flex d-md-block">
               <div className='d-flex align-items-center'>
                 <img className='rounded-circle' style={{objectFit:'contain',height:'60px',width:'60px'}} src={fbLogo} alt="" />
               <h2 className='px-1' style={{color:'#FD5056'}}>LinkUp</h2></div> 
                <button onClick={handleSearchButtonClick} className='mx-1 btn rounded-circle' style={{alignSelf:'center', backgroundColor: 'rgb(240, 242, 245)' }}>
                  <i className='fa fa-search' />
                </button>

                <div className="modal my-0" style={{ display: isSearchOpen ? 'block' : 'none', position: 'fixed', top: 0, left: 0 }}>
                  <div className="modal-dialog my-0 modal-sm">
                    <div className="modal-content">
                      <div className="modal-header p-0">
                        <button
                          type="button"
                          className="btn close"
                          data-dismiss="modal"
                          onClick={handleCloseSearch}
                        >
                          <ArrowBackSharpIcon />
                        </button>
                      </div>
                      <div className="modal-body">
                        <input
                          type="text"
                          className="form-control rounded-5"
                          placeholder="Search..."
                          style={{ background: 'rgb(240,242,245)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              :  <div  className='d-flex align-items-center'> <img className='rounded-circle' style={{objectFit:'contain',height:'30px',width:'30px'}} src={fbLogo} alt="" />
              <h4 className='px-1 m-0' style={{color:'#FD5056'}}>LinkUp</h4></div> 
            }
            {window.innerWidth < 800 ?
              <div >
                <button data-bs-toggle="offcanvas" data-bs-target="#search" className='mx-1 btn rounded-circle' style={{ backgroundColor: 'rgb(240, 242, 245)' }}>
                  <i className='fa fa-search' />
                </button>
                <button style={{ backgroundColor: 'rgb(240, 242, 245)' }} className="p-2 mx-1 btn rounded-circle navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                  <DensityMediumIcon />
                </button>
              </div>
              : null}
          </div>


        </div>

        <div className='d-flex align-items-center middle justify-content-between col-12 col-lg-6 col-md-3 p-0'>
          <div className='Menuicons' style={(actHome && window.innerWidth > 600) ? { borderBottom: '3px #FD5056 solid' } : null}>  <Link to='/' className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle1}>  {actHome ? <HomeRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <HomeOutlinedIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</Link> </div>
          <div className='Menuicons' style={actFriend && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}>  <Link to='/friends' className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle2}>  {actFriend ? <PeopleRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <PeopleOutlineIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />} </Link>   </div>
          {window.innerWidth < 800 ?
            <div className='Menuicons' style={actMess && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}>  <button className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle6}>  {actMess ? <MessageIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <MessageIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</button>   </div>
            : null}
          <div className='Menuicons' style={actVideo && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}>  <Link to='/video' className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle3}>  {actVideo ? <VideoRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <OndemandVideoIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</Link>   </div>
          <div className='Menuicons' style={actMarket && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}>  <Link to='/market' className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle4}>  {actMarket ? <StoreRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <StorefrontIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</Link>   </div>
          {window.innerWidth < 800 ?
            <div className='Menuicons' style={actNoti && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}>  <button className='btn' style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} onClick={handle7}>  {actNoti ? <NotificationsRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <NotificationsRoundedIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</button>   </div>
            : null}
          <div className='Menuicons' style={actGrp && window.innerWidth > 600 ? { borderBottom: '3px #FD5056 solid' } : null}> {window.innerWidth < 600 ?
            null
            : <Link to='/groups' className='btn' onClick={handle5} style={window.innerWidth < 600 ? { padding: '10px 12px' } : { padding: '10px 30px' }} >  {actGrp ? <GroupsRoundedIcon fontSize='medium' style={{ color: '#FD5056' }} /> : <GroupsOutlinedIcon fontSize='medium' style={{ color: 'rgb(101,103,107)' }} />}</Link>
          }</div>
        </div>


        <div className="d-flex align-items-center col-12 col-lg-3 col-md-3">
          {window.innerWidth > 800 ?
            <div className="collapse justify-content-end navbar-collapse d-md-none" id="collapsibleNavbar">
              <button className='btn m-1 rounded-circle p-1' style={{ backgroundColor: 'rgb(216,218,223)', color: 'black' }}> <AppsOutlinedIcon fontSize='medium' /> </button>
              <button className='btn m-1 rounded-circle p-1' style={{ backgroundColor: 'rgb(216,218,223)', color: 'black' }}> <NotificationsRoundedIcon fontSize='medium' /> </button>
              <div className="profile">
                <Avatar src={user?.photoURL} />
              </div>
            </div> : null}

          <div className="offcanvas offcanvas-end d-md-none d-sm-none " id="demo" style={{ background: 'rgb(240, 242, 246)', width: '100%' }}>
            <div className='offcanvas-header p-2' >
              <div className='d-flex align-items-center'> <button type='button' style={{ outline: 'none', border: 'none' }} className='btn rounded-circle text-reset' data-bs-dismiss="offcanvas">
                <WestIcon />
              </button>
                <h6 className='offcanvas-title'>Menu</h6></div>
              <button data-bs-toggle="offcanvas" data-bs-target="#search" className=' btn rounded-circle' style={{ outline: 'none', border: 'none', backgroundColor: 'rgb(220, 232, 235)' }}>
                <i className='fa fa-search' />
              </button>
            </div>
            <div className="offcanvas-body py-0">
              <div className='top d-flex align-items-center'>
                <Avatar style={{ marginRight: '6px' }} src={user?.photoURL} />
                <div>
                  <h5 className='p-0 m-0'>{user?.displayName}</h5>
                  <span className='p-0 m-0' style={{ color: '#71706e', fontSize: '0.8rem' }}>View your profile</span>
                </div>
              </div>


              <div className='m-3'>
                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/7D2zQ81qTub.png" alt="" />
                    <p className='m-0'>Reels</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Wo1bvqdMJGR.png" alt="" />
                    <p className='m-0'>Message</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/lH756t0xaFS.png" alt="" />
                    <p className='m-0'>Groups</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/AS1whyaTgJ0.png" alt="" />
                    <p className='m-0'>Friends</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/AS1whyaTgJ0.png" alt="" />
                    <p className='m-0'>Videos</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="	https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/gEToCPgGXKf.png" alt="" />
                    <p className='m-0'>MarketPlace</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/oTHUK3FUoKs.png" alt="" />
                    <p className='m-0'>Pages</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/ZGhGO4uu9Ph.png" alt="" />
                    <p className='m-0'>Saved</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/S22e07q-b6a.png" alt="" />
                    <p className='m-0'>Memories</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/GcjGXg8Bl95.png" alt="" />
                    <p className='m-0'>Events</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/upVxS0XRdQc.png" alt="" />
                    <p className='m-0'>Games</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/_9c_rSYf3hK.png" alt="" />
                    <p className='m-0'>Fan Games</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/uHDLaHCZboT.png" alt="" />
                    <p className='m-0'>Ads Manager</p>
                  </div>
                  <div className='col-5 M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/Bc4BAjXDBat.png" alt="" />
                    <p className='m-0'>Feeds</p>
                  </div>
                </div>
              </div>


              <div className='border-top border-bottom mx-0 m-3 py-1'>
                <div id="accordion" >
                  <div className="card SideBody" style={{border:'0'}} >
                    <div className="card-header p-0" style={{background:'rgb(240,242,245)',border:'0'}} >
                      <div className="btn w-100 d-flex align-items-center justify-content-between" style={{ outline: 'none', border: 'none'}} >
                       <div className='d-flex align-items-center'>  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/FgGUIEUfnev.png" width='30px' alt="" />
                        <p className='m-0'> Settings & privacy</p></div>
                        <button className='btn' data-bs-toggle="collapse" href="#collapseOne" onClick={()=>setIsCollapsed(!isCollapsed)}>
                        { !isCollapsed ?   <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />} </button>
                      </div>
                    </div>
                    <div id="collapseOne"  className="collapse show" data-bs-parent="#accordion">
                      <div className="card-body  px-0" style={{background:'rgb(240,242,245)'}}>
                        <li className='d-flex my-3 align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tR3tk_R_CQF.png" alt="" /> 
                           <p className='m-0'>Setting</p></li>

                           <li className='d-flex my-3  align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/hQRRNkaNA0-.png" alt="" /> 
                           <p className='m-0'>Facebook pay</p></li>
                           <li className='d-flex my-3  align-items-center justify-content-between m-1 bg-light rounded-2 p-2'>
                          <div className='d-flex  align-items-center '> <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/yumvSiCD6Qw.png" alt="" /> 
                           <p className='m-0'>Dark more</p></div> 
                            <button className='btn' onClick={()=>setDark(!dark)}>  {dark ? "off" : "on"}    </button>
                           </li>
                           <li className='d-flex my-3  align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/LJA59-ymeks.png" alt="" /> 
                           <p className='m-0'>Language</p></li>
                      </div>
                    </div>
                  </div>              
                </div>
              </div>


              <div className='border-top border-bottom mx-0 m-3 py-1'>
                <div id="accordion2" >
                  <div className="card SideBody" style={{border:'0'}} >
                    <div className="card-header p-0" style={{background:'rgb(240,242,245)',border:'0'}} >
                      <div className="btn w-100 d-flex align-items-center justify-content-between" style={{ outline: 'none', border: 'none'}} >
                       <div className='d-flex align-items-center'>  <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/4DTfRqLE9Dd.png" width='30px' alt="" />
                        <p className='m-0'> Help & Support</p></div>
                        <button className='btn' data-bs-toggle="collapse" href="#collapseOne2" onClick={()=>setIsCollapsed2(!isCollapsed2)}>
                        { !isCollapsed2 ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon/>} </button>
                      </div>
                    </div>
                    <div id="collapseOne2"  className="collapse show" data-bs-parent="#accordion2">
                      <div className="card-body  px-0" style={{background:'rgb(240,242,245)'}}>
                        <li className='d-flex my-3 align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/lvxnBDLwsEO.png" alt="" /> 
                           <p className='m-0'>Help</p></li>

                           <li className='d-flex my-3  align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/7WPYs0DQNMk.png" alt="" /> 
                           <p className='m-0'>Support Box</p></li>
                           <li className='d-flex my-3  align-items-center justify-content-between m-1 bg-light rounded-2 p-2'>
                          <div className='d-flex  align-items-center '> <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/LMMwSYMRXrs.png" alt="" /> 
                           <p className='m-0'>About</p></div> 
                           </li>
                           <li className='d-flex my-3  align-items-center m-1 bg-light rounded-2 p-2'>
                           <img width ="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/_CkaiQB8aIS.png" alt="" /> 
                           <p className='m-0'>Report a Problem</p></li>
                      </div>
                    </div>
                  </div>              
                </div>
              </div>

              <div className='mx-2 Log'> <img width="35px" src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/WB6mGTPSda7.png" alt="" /> Log out</div>


            </div>
          </div>

          <div className="offcanvas offcanvas-end  d-md-none  d-sm-none" id="search" style={{ background: 'white', width: '100%' }}>
            <div className='offcanvas-header' >
              <h4 className='offcanvas-title'>Search</h4>
              <button type='button' className='btn-close text-reset' data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <input className='form-control rounded-5 py-2' style={{border:'0', outline:'0', background:'rgb(240, 242, 246)'}} type="text" placeholder='search' />
            <div className='m-3'>
            <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5 d-flex border align-items-center M-item'>
                    <img width='30px ' src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/AS1whyaTgJ0.png" alt="" />
                    <p className='m-0 mx-2'>Friends</p>
                  </div>
                  <div className='col-5  d-flex border align-items-center M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/gEToCPgGXKf.png" alt="" />
                    <p className='m-0 mx-2'>Market</p>
                  </div>
                </div>

                <div className='row my-3 d-flex align-items-center justify-content-between'>
                  <div className='col-5  d-flex border align-items-center  M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/lH756t0xaFS.png" alt="" />
                    <p className='m-0 mx-2'>Groups</p>
                  </div>
                  <div className='col-5  d-flex border align-items-center  M-item'>
                    <img width='30px' src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/ZGhGO4uu9Ph.png" alt="" />
                    <p className='m-0 mx-2'>Saved</p>
                  </div>
                </div>
            </div>
            
            </div>

          </div>
        </div>


      </div>



    </nav>
  )
}

export default Header



