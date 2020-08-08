import React from 'react';
import './Sidebar.scss';
import SidebarRow from '../SidebarRow/SidebarRow';
import HomeIcon from '@material-ui/icons/HomeSharp';
import WhatshotIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrarySharp';
import HistoryIcon from "@material-ui/icons/HistorySharp";
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterIcon from '@material-ui/icons/WatchLaterSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} label="Home" />
            <SidebarRow Icon={WhatshotIcon} label="Tranding" />
            <SidebarRow Icon={SubscriptionsIcon} label="Subscriptions" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} label="Library" />
            <SidebarRow Icon={HistoryIcon} label="History" />
            <SidebarRow Icon={OnDemandVideoIcon} label="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} label="Watch Later" />
            <SidebarRow Icon={ExpandMoreIcon} label="Show more" />
            <hr/>
        </div>
    )
};

export default Sidebar;
