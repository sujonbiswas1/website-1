import React from 'react'
import dollar from "../assets/dollar.svg"
import ramp from "../assets/ramp.svg"
import solution from "../assets/solution.svg"
const Offer = () => {
    const offerLIst = [
        {
            title:"Cardano Debit-Cards",
            description:"Cardano, simplified. The debit card that makes crypto spending easy.",
            icon:dollar
        },
        {
            title:"Cardano Debit-Cards",
            description:"Cardano, simplified. The debit card that makes crypto spending easy.",
            icon:ramp
        },
        {
            title:"Cardano Debit-Cards",
            description:"Cardano, simplified. The debit card that makes crypto spending easy.",
            icon:solution
        }
    ]
  return (
    <section className='space-y-12'>
        <h2 className='font-bold leading-tight text-center text-2xl md:text-3xl'> What do we offer?</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {
                offerLIst.map((items,index)=>(
                    <div key={index} className='flex gap-4'>
                        <div className='bg-[#3d3f54] flex items-center justify-center max-h-12 max-w-12 rounded-x. w-4/5'> 
                            <img className='h-6 w-6' src={items.icon} alt="" />
                        </div>
                        <div>
                            <h4 className='font-bold text-lg'>{items.title}</h4>
                            <p className='text-secondary text-sm'>{items.description}</p>
                        </div>

                    </div>
                ))
            }

        </div>
      
    </section>
  )
}

export default Offer
