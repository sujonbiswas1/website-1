
import './App.css'
import DebitCard from './Components/DebitCard';
import Faq from './Components/Faq';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavbarArea from './Components/Navbar';
import Offer from './Components/Offer';
import PerfectCard from './Components/PerfectCard';
import Vision from './Components/Vision';
function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <div className='!sticky top-0 sujon'>
           <NavbarArea />
        </div>
       
        <div className='w-full max-w-[1440px] px-2.5 md:px-10 xl:px-24 mx-auto py-5' >
          <div className='space-y-[80px]'>
            <Hero />
           <Vision/>
           <Offer/>
           <DebitCard/>
           <PerfectCard/>
           <FeedBack/>
           <Faq/>
          </div>
        </div>
          <Footer/>

      </main>
    </>
  )
}

export default App
