import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Toggle from '../components/Toggle';
import LiveStream from '../components/LiveStream';
import { BiVideoRecording } from 'react-icons/bi';
import { RiScreenshot2Fill } from 'react-icons/ri';


RiScreenshot2Fill

function Detection() {


    return (


        // Most outer container that holds the nav bar and the containter for dashboard
        <div className='bg-slate-50 h-screen '>

            {/* Navbar  */}
            <div className='h-[10%]'><Navbar /></div>

            {/* Containter for Dashboard Elements */}
            <div className=' h-[90%] flex'>

                {/* Container 1 for Toggle Buttons and Detection Filteration options */}
                <div className='w-[20%] h-full border-gray-600  border-2'>

                    {/* Video Options  */}
                    <h1 className=' mt-[5%] mb-[10%] text-xl text-center '>Video Options</h1>
                    {/* containter containing text and toggle for livestream  */}
                    <div className='flex h-[5%] items-center mt-[5%] ' >
                        <div className='ml-[10%] text-base w-[50%]'> LiveStream </div>
                        <div className='h-[70%] w-[15%]  ml-[15%]'> <Toggle /> </div>
                    </div>
                    {/* containter containing text and toggle for Detection  */}
                    <div className='flex h-[5%] items-center mt-[5%] ' >
                        <div className='ml-[10%] text-base w-[50%]'> Detection </div>
                        <div className='h-[70%] w-[15%]  ml-[15%]'> <Toggle /> </div>
                    </div>

                    {/* Filterteration options */}
                    <h1 className=' mt-[25%] mb-[10%] text-xl text-center '>Filteration Options</h1>

                    {/* containter containing text and toggle for Detection  */}
                    <div className='flex h-[5%] items-center mt-[5%]' >
                        <div className='ml-[10%] text-sm w-[50%]'> HTV </div>
                        <input id="default-checkbox" type="checkbox" value="" className=" accent-sky-300 h-[60%] w-[15%]  ml-[15%]" />
                    </div>

                    {/* containter containing text and toggle for Detection  */}
                    <div className='flex h-[5%] items-center mt-[5%]' >
                        <div className='ml-[10%] text-sm w-[50%]'> LTV </div>
                        <input id="default-checkbox" type="checkbox" value="" className=" accent-sky-300 h-[60%] w-[15%]  ml-[15%]" />
                    </div>

                    {/* containter containing text and toggle for Detection  */}
                    <div className='flex h-[5%] items-center mt-[5%]' >
                        <div className='ml-[10%] text-sm w-[50%]'> Pedestrian </div>
                        <input id="default-checkbox" type="checkbox" value="" className=" accent-sky-300 h-[60%] w-[15%]  ml-[15%]" />
                    </div>

                    {/* containter containing text and toggle for Detection  */}
                    <div className='flex h-[5%] items-center mt-[5%]' >
                        <div className='ml-[10%] text-sm w-[50%]'> Motor / Bikes </div>
                        <input id="default-checkbox" type="checkbox" value="" class=" accent-sky-300 h-[60%] w-[15%]  ml-[15%]" />
                    </div>

                </div>

                {/* Containter 2 divided into 2 blocks one for live stream and one for record options */}
                <div className='w-[60%]  border-y-gray-600 border-x-slate-50 border-2 '>
                    {/* Record And Screen Capture Options */}
                    <div className="h-[9.9%] flex  justify-center items-center">
                        <div className='bg-sky-200 hover:bg-sky-300 flex items-center p-2 pr-4 rounded-full '>
                            <BiVideoRecording className=' mr-2 ml-1' />
                            <label className='text-sm '> Start / Stop Recording </label>
                        </div>
                        <div className='bg-sky-200 hover:bg-sky-300 flex items-center p-2 pr-4 rounded-full ml-[20%]'>
                            <RiScreenshot2Fill className=' mr-2 ml-1' />
                            <label className='text-sm '> Capture Screen </label>
                        </div>
                    </div>
                    {/* LiveStream Container */}
                    <div className="h-[90%] bg-slate-300 text-center text-2xl "><LiveStream /></div>
                </div>

                {/* Container 3 divided into 2 blocks one for maps and one for Tracking ID's */}
                <div className='w-[20%] bg-white border-gray-600  border-2'>
                    <div className="h-[55%]  mb-[1%] bg-slate-50 text-center p-[5%]  ">
                        <h1 className='text-2xl mb-[2%] '>Tracking ID's</h1>
                        <h2 className='border-slate-400 bg-gray-200 rounded-xl border-1 text-sm p-1 pl-2 font-sans  hover:bg-sky-200 cursor-pointer mb-[1.2%]' >Tracking id 1</h2>
                        <h2 className='border-slate-400 bg-gray-200 rounded-xl border-1 text-sm p-1 pl-2 font-sans  hover:bg-sky-200 cursor-pointer mb-[1.2%]'>Tracking id 1</h2>
                        <h2 className='border-slate-400 bg-gray-200 rounded-xl border-1 text-sm p-1 pl-2 font-sans  hover:bg-sky-200 cursor-pointer mb-[1.2%]'>Tracking id 1</h2>
                        <h2 className='border-slate-400 bg-gray-200 rounded-xl border-1 text-sm p-1 pl-2 font-sans  hover:bg-sky-200 cursor-pointer mb-[1.2%]'>Tracking id 1</h2>
                        <h2 className='border-slate-400 bg-gray-200 rounded-xl border-1 text-sm p-1 pl-2 font-sans  hover:bg-sky-200 cursor-pointer mb-[1.2%]'>Tracking id 1</h2>
                    </div>
                    <div className="h-[44%] "> <Map /> </div>

                </div>
            </div>
        </div>
    )
}

export default Detection