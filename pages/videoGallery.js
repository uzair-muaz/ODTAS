import Navbar from '../components/Navbar';
import GetVideo from '../components/GetVideo';
import React from 'react'
import { useState, useEffect } from "react"

function VideosGallery() {
   

    return (
        <div className='bg-slate-200 h-screen '>

            {/* Navbar  */}
            <div className='h-[9%]'><Navbar /></div>

            {/* Containter for Video Elements */}
            <div className=' h-[91%] '>
                <GetVideo/>
            </div>

        </div>
    )
}

export default VideosGallery