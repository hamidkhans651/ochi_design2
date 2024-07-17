import React from 'react';
import Image from 'next/image';

const ClientReview = () => {
    return (
        <div className="w-full py-10 bg-zinc-100">
        <div className='w-full px-6 border-b-[1px] border-zinc-400 pb-6'>
            <h1 className='mt-0 text-black text-5xl font-["Neue_Montreal"] tracking-tight'>Client&apos;s reviews</h1>
        </div>
            <div className='flex justify-between text-black'>
                <div className='w-1/4'>
                    <div className='mr-20 px-1 pl-4 py-2 mt-1 font-["Neue_Montreal"] text-[15px] leading-[3.1vw] tracking-tight text-pretty'>Karman Ventures</div>
                </div>
                <div className='w-1/4'>
                    <button className='mr-20 px-1 pl-4 py-2 mt-1 font-["Neue_Montreal"] text-[15px] leading-[3.1vw] tracking-tight text-pretty'>Services</button>
                </div>
                <div className='w-1/3'>
                <button className='mr-20 px-1 pl-0 py-2 mt-1 font-["Neue_Montreal"] text-[15px] leading-[3.1vw] tracking-tight text-pretty'>William Barnes</button>
                    {/* Box added here */}

                    <div className="p-1 w-[12vw] rounded-md h-[12vw] mt-14">
                    {/* <Image className='w-full h-full bg-contain rounded-md' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" fill={true} /> */}
                    </div>
                    <p className="mt-2 mr-12vh -pt-2vh py-10 -pr-[1vh] font-['Neue_Montreal'] text-[0.5] selection:  flex-initial mb-1">They were transparent about the time and 
                    the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design.</p>
                </div>
                <div className='w-1/4 flex justify-end  items-start '>
                    <button className='mr-1 px-1 pl-4 py-2 mt-1 font-["Neue_Montreal"] text-[15px] leading-[3.1vw] tracking-tight text-pretty font'>Readme</button>
                </div>
            </div>
        </div>
    )
}

export default ClientReview
