'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
      <div className="border-t-2 border-b-2 border-zinc-300 flex gap-3 overflow-hidden whitespace-nowrap items-center justify-center h-full">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[20vw] leading-none font-["Founders_Grotesk_condensed"] uppercase pt-8 -mb-[3vw] font-semibold'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[20vw] leading-none font-["Founders_Grotesk_condensed"] uppercase pt-8 -mb-[3vw] font-semibold'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[20vw] leading-none font-["Founders_Grotesk_condensed"] uppercase pt-8 -mb-[3vw] font-semibold'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
