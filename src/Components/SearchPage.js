import { Input } from '@material-ui/core'
import { TuneOutlined } from '@material-ui/icons'
import React from 'react'
import './SearchPage.css'
import channelimg from "../images/channelImg.jpg";
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import content from "../images/content.jpg";


function SearchPage({}) {
    return (
        <div className="searchPage">
           
           <div className="searchPage__filter">
               <TuneOutlined/>
               <h2>FILTER</h2>
        </div>
        <hr/>
    <ChannelRow
    
    image = {channelimg}
    Channel= "Anirudh Adimulam"
    verified
    subs = "555K"
    noOfVideos ={383}
    description = "chane can be done here is a static data"
    
    />
 <hr/>

 <VideoRow 
         views="1.2M"
         subs="555K" 
         description="DO you own testing at here" 
         timestamp="59 secondes" 
         channel="Anirudh Adimulam" 
         title="let's do it" 
         images={content}
 />


<VideoRow 
         views="13.2M"
         subs="235K" 
         description="hello viewrs you own testing at here" 
         timestamp="59 secondes" 
         channel="Anirudh Adimulam" 
         title="let's do it" 
         images={content}
 />

 
<VideoRow 
         views="61.2M"
         subs="3355K" 
         description="DO you own testing at here" 
         timestamp="59 secondes" 
         channel="Anirudh Adimulam" 
         title="let's do it" 
         images={content}
 />

 
<VideoRow 
         views="1.2M"
         subs="555K" 
         description="DO you own testing at here" 
         timestamp="59 secondes" 
         channel="Anirudh Adimulam" 
         title="let's do it" 
         images={content}
 />

        </div>
    )
}

export default SearchPage 
