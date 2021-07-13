import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import { ExpandMoreOutlined, History, OndemandVideo, ThumbUpAltOutlined, VideoLibrary, WatchLater } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
       
         <SidebarRow selected Icon={HomeIcon} Title="Home"/>
         <SidebarRow  Icon={WhatshotIcon} Title="Treanding"/>
         <SidebarRow  Icon={SubscriptionsIcon}Title="Subscription"/>
         <hr/>
         <SidebarRow  Icon={VideoLibrary} Title="Library"/>
         <SidebarRow  Icon={History} Title="History"/>
         <SidebarRow  Icon={OndemandVideo}Title="Your Videos"/>
         <SidebarRow  Icon={WatchLater} Title="Watch Later"/>
         <SidebarRow  Icon={ThumbUpAltOutlined} Title="Liked Videos"/>
         <SidebarRow  Icon={ExpandMoreOutlined}Title="Show more"/>
         <hr/>
        </div>
        
    )
}

export default Sidebar;
