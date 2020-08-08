import React, { useState } from 'react';
import './Header.scss';
import MenuIcon from '@material-ui/icons/MenuSharp';
import YouTubeLogo from '../../images/headerLogo/YouTube_Logo.svg';
import SearchIcon from '@material-ui/icons/SearchSharp';
import VideoIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon  from '@material-ui/icons/AppsSharp';
import NotificationsIcon  from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
    const [search, setSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <Link to="/">
                    <img className="header__logo" src={YouTubeLogo} alt="YouTube"/>
                </Link>
            </div>
            <div className="header__search">
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" name="search" title="Search" placeholder="Search"/>
                <Link to={`/search/:${search}`}>
                    <SearchIcon className="header__inputBtn"/>
                </Link>
            </div>
            <div className="header__right">
                <VideoIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar alt="Deepak Upadhyay" src="https://avatars0.githubusercontent.com/u/32363872?s=400&u=7df33b06e23e7d3c0ea058b1adfb681694e5b556&v=4" />
            </div>
        </div>
    )
};

export default Header;
