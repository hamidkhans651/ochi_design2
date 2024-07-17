import React from 'react'
import { GoDotFill } from "react-icons/go";
import Image from 'next/image';


const Featured = () => {
  return (
    <div className='w-full py-20 bg-zinc-100 '>
      <div className='w-full px-10  border-b-[1px] border-zinc-400  pb-10 '>
        <h1 className='text-black text-5xl font-["Neue_Montreal"] tracking-tight'>Featured projects
        </h1>

      </div>
      <div className='px-5'>
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">
          
              <div className='card w-full h-full rounded-lg overflow-hidden '>
                {/* <Image className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" fill={true} /> */}
              </div>
            </div>
          </div>
        </div>

  )
}

export default Featured