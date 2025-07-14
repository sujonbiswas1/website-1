import React from 'react'
import person1 from '../assets/person-1.png'
import person2 from '../assets/person-2.png'
import person3 from '../assets/person-3.png'
const reviews = [
    {image:person1, review:"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings.", name:"Hadid Khan", status:"UIUX Designer"},

    {image:person2, review:"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment.", name:"Wade Warren", status:"Web Designer"},
    {image:person3, review:"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. ", name:"Jenny Wilson", status:"Trust Administrator"}
]
const FeedBack = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {
            reviews.map((item,index)=>(
                <div key={index} className='bg-[#28312f3d] px-6 py-8 rounded-2xl space-y-10 border-b-1 border-primary'>
                    <div className='bg-gray-600 w-[70px] h-[70px] rounded-full items-center justify-center flex font-bold font-mplus1'>
                        66
                    </div>

                    <p>{item.review}</p>

                    <div className='flex gap-4'>
                        <img src={item.image} alt="" />
                        <div>
                            <h3>{item.name}</h3>
                            <p className='text-gray-400'>{item.status}</p>
                        </div>
                    </div>

                </div>
            ))
        }

      
    </section>
  )
}

export default FeedBack
