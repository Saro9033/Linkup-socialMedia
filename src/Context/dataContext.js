import { createContext } from "react";
import React, { useState } from 'react';

export const DataContext = createContext({})

export const DataProvider = ({children}) =>{
    const [actHome, setActHome] = useState(true)
    const [actFriend, setActFriend] = useState(false)
    const [actVideo, setActVideo] = useState(false)
    const [actMarket, setActMarket] = useState(false)
    const [actGrp, setActGrp] = useState(false)
    const [actMess, setActMess] = useState(false)
    const [actNoti, setActNoti] = useState(false)
  
  
    const handle1 = () => {
      setActHome(true)
      setActFriend(false)
      setActVideo(false)
      setActMarket(false)
      setActGrp(false)
      setActMess(false)
      setActNoti(false)
  
    }
    const handle2 = () => {
      setActHome(false)
      setActFriend(true)
      setActVideo(false)
      setActMarket(false)
      setActGrp(false)
      setActMess(false)
      setActNoti(false)
  
    }
    const handle3 = () => {
      setActHome(false)
      setActFriend(false)
      setActVideo(true)
      setActMarket(false)
      setActGrp(false)
      setActMess(false)
      setActNoti(false)
  
    }
    const handle4 = () => {
      setActHome(false)
      setActFriend(false)
      setActVideo(false)
      setActMarket(true)
      setActGrp(false)
      setActMess(false)
  
  
    }
    const handle5 = () => {
      setActHome(false)
      setActFriend(false)
      setActVideo(false)
      setActMarket(false)
      setActGrp(true)
      setActMess(false)
      setActNoti(false)
  
    }
  
    const handle6 = () => {
      setActHome(false)
      setActFriend(false)
      setActVideo(false)
      setActMarket(false)
      setActGrp(false)
      setActMess(true)
      setActNoti(false)
  
    }
    const handle7 = () => {
      setActHome(false)
      setActFriend(false)
      setActVideo(false)
      setActMarket(false)
      setActGrp(false)
      setActMess(false)
      setActNoti(true)
    }
  


    return(
        <DataContext.Provider value={{actHome, actFriend, actVideo, actMarket,actGrp,actMess,actNoti,
         handle1, handle2,handle3,handle4,handle5,handle6,handle7 }}>
        {children}
    </DataContext.Provider>
)
} 