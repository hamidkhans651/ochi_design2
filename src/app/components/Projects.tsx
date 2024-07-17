'use client'

import React, { useEffect, useState } from 'react'

// New component based on Eye
const ModifiedEye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })
  })

  return (

    <div className='eyes w-full h-screen overflow-hidden bg-[#CDEA68] space-y-10 '>

            <div className='relative w-full h-full bg-cover bg-center'>
                <div className=' absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className=' flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100' >
                        <div className=' relative w-2/3 h-2/3  rounded-full bg-zinc-900 '><div className='flex items-center justify-center mt-12'>PLAY</div>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg) ` }} className='line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10' >
                                <div className=' w-7 h-7 rounded-full bg-zinc-100 '>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=' flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100' >
                        <div className=' relative w-2/3 h-2/3  rounded-full bg-zinc-900 '><div className='flex items-center justify-center mt-12'>PLAY</div>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg) ` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10' >
                                <div className=' w-7 h-7 rounded-full bg-zinc-100 '>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

  )
}

export const Projects = () => {
    return (
        <div className='w-full h-full bg-[#CDEA68] flex flex-col justify-center items-center space-y-[-80px] font-extrabold '>
            <div className="text-[8rem] text-black tracking-tighter">
                READY
            </div>
            <div className="text-[8rem] text-black tracking-tighter ">
                TOSTART
            </div>
            <div className="text-[8rem] text-black tracking-tighter mb-30">
                THEPROJECT?
            </div>
            < ModifiedEye />
        </div>
    )
}

export default Projects
