import React from 'react'
import Navbar from '../components/Navbar';
import OperatorDash from '../components/OperatorDash';


function dashboard() {
    
    return (
        <div className='bg-slate-200 h-screen '>

             {/* Navbar  */}
            <div className='h-[9%]'>
                <Navbar />
            </div>

            {/* Containter for Video Elements */}
            <div className=' h-[91%] bg-red-800 '>
                <OperatorDash/>
            </div> 

        </div>
    )
}

export default dashboard

