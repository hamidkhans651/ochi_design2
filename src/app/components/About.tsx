'use client'
import React, { FC } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const SocialLink: FC<{ children: React.ReactNode }> = ({ children }) => <p className='underline'>{children}</p>

const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
};

const About: FC = () => {
    return (
        <div className='w-full  bg-[#CDEA68] rounded-tl-2xl rounded-tr-3xl text-gray-900 flex flex-col justify-between'>
            <h1 className='mt-16 p-12 font-["Neue_Montreal"] text-[5vw] leading-[5vw] tracking-tight flex-col display: inline'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to,
                <motion.span
                    style={{ display: 'inline-block', borderBottom: '3px solid', transformOrigin: 'left' }}
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                >raise funds
                </motion.span>
                ,
                sell prod­ucts,
                <motion.span
                    style={{ display: 'inline-block', borderBottom: '3px solid', transformOrigin: 'left' }}
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                >
                    ex­plain com­plex ideas
                </motion.span>,
                and hire great peo­ple.
            </h1 >



            <div className=" w-full border-t-[1px] mt-10 border-[#afc26b]"></div>

            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <div className=' mr-20 px-1 pl-4 py-2 mt-1 font-["Neue_Montreal"] text-[2vw] leading-[3.1vw] tracking-tight text-pretty '>what you can expect</div>
                </div>
                <div className='w-1/2'>
                    <p className='mr-10vh -pt-2vh py-10 pr-[20vh] font-["Neue_Montreal"] text-[0.5] tracking-tight selection:  flex-initial mb-1 '>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. </p>
                    <p className='mr-10vh -pt-2vh pr-[20vh] font-["Neue_Montreal"] text-[0.5] tracking-tight selection: flex-initial w-9vh'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating. </p>
                </div>
                <div className='w-1/1'>
                    <div className='p-3 py-30 font-["Neue_Montreal"] text-[1.5vw] leading-[2.5vw] tracking-tight selection:'>

                        <div className='mpy-5 mt-14 underline-offset-8 flex flex-col items-start mb-[2vw] w-10vw'>
                            <p className='mb-2'>S:</p>
                            <SocialLink>instagram</SocialLink>
                            <SocialLink>Behance</SocialLink>
                            <SocialLink>Facebook</SocialLink>
                            <SocialLink>Linkedin</SocialLink>
                        </div>

                    </div>


                </div>



            </div>

            <div className="pl-4 w-full flex gap-40 border-t-[1px] pt-10  mt-20 border-[#afc26b] ">
                <div className='w-1/1 '>
                    <h1 className='text-5xl gap-3'>Our Approach:</h1>
                    
                    {/* README MORE BUTTON  */}
                    <button className=' flex uppercase gap-4 items-center px-7 py-4 bg-gray-950 mt-3 rounded-full text-white '>Read More
                        <div className=' w-2 h-2 bg-zinc-100 rounded-full' ></div>
                    </button>
                </div>

                <div className=' mb-40 w-1/2 h-[55vh] rounded-lg overflow-hidden'>
                    {/* <Image className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" fill={true} /> */}
                </div>
            </div>



        </div>


    )
}

export default About
