import React from 'react'

import Image from 'next/image';


function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-10  py-10 gap-5 '>
      <div className='cardcontaine flex gap-5 w-full h-[60vh] grid grid-cols-1 md:grid-cols-3'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          {/* <Image className='w-32 md:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" fill={true} /> */}
          <button className='absolute text-xs md:text-sm px-2 md:px-5 py-1  rounded-full  border-2 left-10 bottom-10 md:bottom-8 md:left-8 tracking-tighter '>©2019</button>
        </div>
        <div className='card relative rounded-xl w-full h-full bg-[#212121] flex items-center justify-center '>
          <Image className='w-32 md:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" fill={true} />
          <button className='absolute text-xs md:text-sm px-2 md:px-5 py-1  rounded-full  border-2 left-10 bottom-10 md:bottom-8 md:left-8 tracking-tighter'>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='card relative rounded-xl w-full h-full bg-[#212121]  flex items-center justify-center '>
          {/* <Image className='w-32 md:w-48' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""  fill={true}/> */}
          <button className='absolute text-xs md:text-sm px-1 md:px-2 py-1  rounded-full  border-2 left-10 bottom-10 md:bottom-8 md:left-8 tracking-tighter '>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
