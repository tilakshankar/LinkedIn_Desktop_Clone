import React from 'react'
import "./css/Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import backdrop from './images/backdrop.jpg'; 
import { selectUser } from './features/userSlice';
function Sidebar() {
  const user = useSelector(selectUser)

    const recentItem=(topic) => (
       <div className="sidebar__recentitem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
       </div> );
  return (
    <div className="sidebar">
    <div className="sidebar__top"> 
     <img src={backdrop} alt="background img" />
     <Avatar src={user.photoUrl}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
    </div>
    <div className="sidebar__stats">
        <div className="sidebar__stat">
        <p>Who viewed you</p>
        <p className='sidebar__statNumber'>2,534</p>
       </div>
       <div className="sidebar__stat">
       <p>Views on post</p>
        <p className='sidebar__statNumber'>12,534</p>
       </div>
    </div>
    <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("React_JS")}
        {recentItem("Firebase")}
        {recentItem("BackEnd")}
        {recentItem("FrontEnd")}
        {recentItem("Software_Engineering")}
        {recentItem('redux')}
         {recentItem('cpp')}
         {recentItem('java')}
    </div>
      
    </div>
  )
}

export default Sidebar