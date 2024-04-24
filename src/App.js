import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';
import { useStateValue } from './Context/StateProvider';
import { DataProvider } from './Context/dataContext';
import FrItems from './Components/Friends/FrItems';
import Video from './Components/Video/Video';
import Market from './Components/MarketPlace/Market';
import Group from './Components/Groups/Group';
import { useState } from 'react';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [dark, setDark] = useState(false)

   return (
    <div className="App">
     {/*  {!user ? <Login dispatch={dispatch}/> : ( */}
          <>
          <DataProvider>
            <Header dark={dark} setDark={setDark}/>
            <Routes > 
            <Route path='/' element={<Home/>} />
              <Route path='/friends' element={<FrItems/>} />
              <Route path='/video' element={<Video/>} />
              <Route path='/market' element={<Market/>} />
              <Route path='/groups' element={<Group/>} />
            </Routes>
            </DataProvider>
          </>
   
    </div>
  );
}

export default App;
