import React from 'react'

const listA = ["Investors","Features","Book a demo","Security"];
const listB = ["Investors","Features","Book a demo","Security"];
const listC = ["Investors","Features","Book a demo","Security"];
const listD = ["Investors","Features","Book a demo","Security"];
const linkList = (title,list)=> (
    <div className='' >
        <h4 className='font-bold'>{title}</h4>

        <ul className='space-y-2'>
            {list.map((item,i) =>(
                <li className='text-secondary' key={i}>{item}</li>
            ))}
        </ul>
    </div>
)
const Footer = () => {
  return (
    <footer className='bg-[#282934]/25 mt-[120px] mb-[50px]'>
        <div className='flex flex-col md:flex-row px-10 max-w-[1440px] justify-around mx-auto'>
            <div className='space-y-2 col-span-2'>
                <h2 className='font-bold text-lg'>Wern Finance</h2>
                <p className='text-secondary text-sm max-w-[287px]'>Discover the power of our secure and rewarding credit cards</p>
            </div>  
            <div className='grid grid-cols-1 mx-auto mt-7 sm:grid-cols-2 md:grid-cols-4 gap-20 '>
            {linkList("About us", listA)}
             {linkList("About us", listB)}
             {linkList("About us", listC)}
             {linkList("About us", listD)}
            </div>
             
        </div>
    </footer>
  )
}
export default Footer
