
import { Avatar } from '@mui/material';
//import { TitleRounded } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./css/HeaderOption.css";

function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon" >{user?.email[0].toUpperCase()}</Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
