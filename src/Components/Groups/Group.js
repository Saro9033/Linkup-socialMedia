import React from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AddIcon from '@mui/icons-material/Add';
import ExploreIcon from '@mui/icons-material/Explore';
import FeedIcon from '@mui/icons-material/Feed';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupSideItems from './GroupSideItems';
import GroupCard from './GroupCard';


const SideItems = [
  {id:1, imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOX23tPkUhAdgyztODIUqdhX0eJG8uNE7LA&usqp=CAU', chName:'Front End', time:'6 hours ago'},
  {id:2, imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOX23tPkUhAdgyztODIUqdhX0eJG8uNE7LA&usqp=CAU', chName:'Back End', time:'2 hours ago'},
  {id:3, imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOX23tPkUhAdgyztODIUqdhX0eJG8uNE7LA&usqp=CAU', chName:'Full Stack ', time:'4 hours ago'},
  {id:4, imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOX23tPkUhAdgyztODIUqdhX0eJG8uNE7LA&usqp=CAU', chName:'Ethical AI', time:'16 days ago'}

]

const Group = () => {
  return (
    <div>
          <div className='row m-0  '>
        <div className='col-4 pt-2 px-2' style={{ background: 'rgb(255,255,255)', height:'100vh',position:'fixed', overflowY: 'auto' }}>
          <div className='mx-2 mt-2 d-flex align-items-center justify-content-between'>
            <h4 className='text-dark m-0'><strong c>Groups</strong></h4>
            <div style={{ background: 'rgb(228,230,235)' }} className='rounded-5 p-1'><SettingsRoundedIcon style={{ color: 'black' }} /></div> 
          </div>
          <div className='friendsMenu my-3'>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div className='p-1 bg-primary rounded-5'><FeedIcon style={{ color: 'white' }} /> </div><strong className='px-3'>Your Feed</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><ExploreIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Discovery</strong> </button>
            <button className=' w-100 p-2 align-items-center d-flex p-0 btn'> <div style={{ background: 'rgb(228,230,235)' }} className='p-1 rounded-5'><GroupsIcon style={{ color: 'black' }} /> </div><strong className='px-3'>Your Groups</strong> </button>
     
          </div>

          <button className='btn w-100 text-center mb-3' 
          style={{border:'none', outline:'none', background:'rgb(235,245,255)',  fontWeight:'bold', color:'rgb(69,142,223)'}}>
            <AddIcon/> Create New Groups </button>
            
            
            <div className='border-top'>           
                 <p className='px-2 py-3 d-flex justify-content-between align-items-center'>
                     <strong >Groups You've Joined</strong>
                     <a href="#" style={{textDecoration:'none'}}>See all</a>
                     </p>
               <div style={{paddingBottom:'100px'}}> 
                    {SideItems.map(item =>{
            return  <GroupSideItems key={item.id} id={item.id} imgURL={item.imgURL}  chName={item.chName} time={item.time}/>
                    })}
                    </div>
            </div>



        </div>


        <div className='col-8 p-4' style={{ background: 'rgb(240,242,245)',marginLeft: '33%'  }} >
           <span style={{color:'#65676B', fontSize:'15px', fontWeight:'600'}}> Recent Activities</span>

          <div className='d-flex justify-content-center flex-wrap w-100'>
            <GroupCard image="https://scontent.fmaa1-4.fna.fbcdn.net/v/t39.30808-6/391675730_832789412187229_9002377702341498729_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TFNV0_AYEQIAX-kapzY&_nc_oc=AQlINY7MxRS5K6jjvcn-i9JGfhBEPf5o9vpyL5B_LQwn3_srWoW8jEQBuiCXtyKLxf_NIQv-2G5OwMYVYUlzd0Xy&_nc_ht=scontent.fmaa1-4.fna&oh=00_AfDYGNLlufuxV-1bEYweCCBKbOs-EjYp91ODwMbUSfQT_A&oe=65355E9A" 
            username="Muthukumar"  profilePic="https://scontent.fmaa1-1.fna.fbcdn.net/v/t31.18172-8/26116488_1960594014201671_176479213858828294_o.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=9a8829&_nc_ohc=rOHQ4uqE0qEAX8hnzi0&_nc_ht=scontent.fmaa1-1.fna&oh=00_AfCEd8EW9l5TYHpRmPwIcmb6m21duy1o-bgNMogLH6e5qw&oe=65574749" />
          </div>

        </div>
      </div> 
    </div>
  )
}

export default Group