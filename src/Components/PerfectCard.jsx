import React from 'react'
import perfectCard from '../assets/perfect-card.svg'
import { Button } from '@heroui/react'
const PerfectCard = () => {
  return (
       <section className='flex flex-col sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center'>
        <img src={perfectCard} alt="" />
        <div className='space-y-3 sm:space-y-6 sm:w-1/2'>
            <h2 className='font-bold leading-tight text-3xl lg:text-4xl'>Find the Perfect Card for You</h2>
            <p className='text-secondary text-sm lg:text-base w-full max-w-[500px]'>Unlocking the Power of Crypto, Both Virtually and Physically Manage your crypto effortlessly and spend it seamlessly with Wern. Our virtual card allows for instant and secure online transactions, while the physical Wern Card empowers you to convert and spend your crypto at millions of merchants worldwide. Experience the flexibility and convenience of both options, all within the secure and user-friendly Wern ecosystem.</p>

            <div className='space-y-2 '>
            <Button className='bg-primary text-base text-white px-10 w-[180px] h-[60px] py-4'>
                Learn More
            </Button>
            <p className=' text-primary '>Will be available soon</p>

        </div>
            
        </div>
        
       
      
    </section>
  )
}

export default PerfectCard
