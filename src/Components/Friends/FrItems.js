import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonRemoveSharpIcon from '@mui/icons-material/PersonRemoveSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import FrCards from './FrCards';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';

const FrItems = () => {
  return (
    <div >

      <div className='row m-0  '>
        <div className='col-4 d-none d-md-block d-sm-none pt-2 px-2' style={{ background: 'rgb(255,255,255)', height:'100vh',position:'fixed', overflowY: 'auto' }}>
          <div className='mx-2 mt-2 d-flex align-items-center justify-content-between'>
            <h4 className='text-dark m-0'><strong>Friends</strong></h4>
            <div style={{ background: 'rgb(228,230,235)' }} className='rounded-5 p-1'><SettingsRoundedIcon style={{ color: 'black' }} /></div> 
          </div>
          <div className='friendsMenu my-3'>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div className='p-1 bg-primary rounded-5'><GroupRoundedIcon style={{ color: 'white' }} /> </div><strong className='px-3'>Home</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <PersonRemoveSharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Friend Request</strong></div>
              <ChevronRightSharpIcon />
            </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <PersonAddIcon style={{ color: 'black' }} /> </div><strong className='px-3 m-0 p-0'>Suggestion</strong></div>
              <ChevronRightSharpIcon />
            </button>

            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <Diversity1SharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>All Friends</strong></div>
              <ChevronRightSharpIcon />
            </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><CardGiftcardIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Birthdays</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn justify-content-between'>
              <div className='d-flex align-items-center' > <div className='p-1 rounded-5' style={{ background: 'rgb(228,230,235)' }}> <PeopleSharpIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Custom lists</strong></div>
              <ChevronRightSharpIcon />
            </button>
          </div>
        </div>
        <div className={window.innerWidth > 800 ? 'col-8 p-4' : 'col-12 px-2 my-2 mx-0'} style={window.innerWidth > 800 ? { background: 'rgb(240,242,245)',marginLeft: '33%'} : {background: 'rgb(255,255,255)'}} >

          <div className='d-flex justify-content-between my-2'>
          {window.innerWidth > 800 ? <h5> <strong>Friend requests </strong></h5> :

            <h4> <strong>Friend </strong></h4> }
           {window.innerWidth > 800 ? <a href=''>See all </a> :
              <button data-bs-toggle="offcanvas" data-bs-target="#search" className='mx-1 btn rounded-circle' style={{ backgroundColor: 'rgb(240, 242, 245)' }}>
              <i className='fa fa-search' />
            </button> }
            
            
             </div>

            {window.innerWidth < 800 &&
           <>  <div className='d-flex mx-1  align-items-center'>
              <button className='rounded-5 p-2' style={{border:'none', outline:'none'}}> <strong>Suggestions </strong></button>
              <button className='rounded-5 p-2 mx-2' style={{border:'none', outline:'none'}}> <strong>Your Friends </strong></button>
              </div>
                 <div className='d-flex mx-1 my-3 justify-content-between align-items-center'>
                 <p className='m-0 p-2' style={{border:'none', outline:'none'}}> <strong>Friend requests  </strong></p>
                 <a className=' p-2' style={{border:'none', outline:'none', textDecoration:'none'}}> See all</a>
                 </div>   </> 
              }

          <div className='d-flex justify-content-center flex-wrap w-100' style={window.innerWidth < 800 ? {flexDirection:'column'} : null }>
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />
            <FrCards profileImg="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" name="saravanan" />

          </div>

        </div>
      </div>
    </div>
  )
}

export default FrItems