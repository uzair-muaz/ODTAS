import Navbar from '../components/Navbar';
import GetVideo from '../components/GetVideo';
import React from 'react'


function VideosGallery() {

   

    return (
        <div className='bg-slate-200 '>

            {/* Navbar  */}
            <div className='h-[10%]'><Navbar /></div>

            {/* Containter for Video Elements */}
            <div className=' h-[90%] '>
                <GetVideo/>
            </div>

        </div>
    )
}

export default VideosGallery