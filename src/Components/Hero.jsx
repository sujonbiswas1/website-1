import React from 'react'
import { Button } from '@heroui/react'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className='flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-10 lg:mt-20 xl:mt-[128px]'>
        <div className='space-y-6 sm:w-1/2 '>
            <h1 className='font-bold leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Spend your Cardano anywhere, anytime.</h1>
            <p className='text-zinc-300 w-4/5 text-xs lg:text-sm xl:text-base'>Our user-friendly platform enables businesses and individuals to seamlessly convert and spend their crypto for everyday purchases.</p>
            <Button variant='solid' color='primary' radius='full'>Get Started <span> <FaArrowRight/> </span> </Button>
        </div>
   
            <img src="/hero-card.png" className='xl
            mr-[-130px] w-10/12 sm:w-1/2' alt="" />
    </section>
  )
}

export default Hero
