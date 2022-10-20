import React from 'react'
import { FiTarget } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import NextImage from 'next/image'
import { useRouter } from 'next/router'
function OperatorDash() {
    const router = useRouter();
    const logout = () => {
        localStorage.clear();
        router.push('/')
    }
    return (
        <div className='w-full h-full bg-purple-200 relative'>
            {/* Container to make the box at the start  */}

            <div className='flex  flex-col items-start justify-start w-full flex-1 px-20 text-center h-full bg-black  '>
            {/* <img src="\Dashboard.jpeg" alt="Image" className='w-full h-full' /> */}
            <NextImage
                        src='/Dashboard.jpeg'
                        alt='Image'
                        layout='fill'
                        
                    />

                    {/* Outer Containter for options */}
                <div className='bg-slate-100  rounded-2xl shadow-2xl  w-[30%] h-[80%] mt-[5%] z-50'>
                    {/* Header */}
                    <div className='h-[15%] text-4xl text-center p-8 text-gray-800 font-bold flex flex-col items-center justify-center'>
                         ODTAS
                    </div>
                    {/* Detection container */}
                    <div className='h-[28.3333%] hover:bg-slate-200 flex items-center justify-center cursor-pointer' onClick={() => { router.push('/detection') }}>
                        <div>
                            <div className='flex flex-col items-center justify-center cursor-pointer'><FiTarget size='45px' className='text-slate-800 ' /> </div>
                            <div className='text-center text-gray-800 text-lg cursor-pointer'>View Detection </div>
                        </div>
                    </div>
                    {/* Video container */}
                    <div className='h-[28.3333%]  hover:bg-slate-200 flex items-center justify-center cursor-pointer' onClick={() => { router.push('/videoGallery') }}>
                        <div>
                            <div className='flex flex-col items-center justify-center cursor-pointer'> <MdOutlineVideoLibrary size='45px' className='text-slate-800 ' /></div>
                            <div className='text-center text-gray-800 text-lg cursor-pointer'>View Videos </div>
                        </div>
                    </div>
                    {/* Logout container */}
                    <div className='h-[28.3333%]  hover:bg-slate-200 flex flex-1 items-center justify-center  rounded-br-2xl rounded-bl-2xl' onClick={logout}>
                        <div>
                            <div className='flex flex-col items-center justify-center cursor-pointer '> <HiOutlineLogout size='45px' className='text-slate-800 ' /></div>
                            <div className='text-center text-gray-800 text-lg cursor-pointer'>Logout </div>
                        </div>
                    </div>
                </div>

                
            </div>


        </div>
    )
}

export default OperatorDash