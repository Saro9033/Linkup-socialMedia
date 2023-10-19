import React from 'react'
import Sidebar from './Sidebar';
import Widget from './Widget';
import Feed from './Feed';

const Home = () => {
  return (

         <div className='d-flex w-100 justify-content-between' style={{ backgroundColor: 'rgb(240,242,245)' }}>
              <Sidebar />
              <Feed />
              <Widget />
            </div>
  )
}

export default Home