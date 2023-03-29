import { Footer, Navbar } from '@/components';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Service from '@/sections/Service';
import Partners from '@/sections/Partners';
import Team from '@/sections/Team';
import Contact from '@/sections/Contact';



export default function Home() {
  return (
    <div className='bg-black overflow-x-hidden md:px-36 px-16 '>
      <div>
        <div className='absolute w-[50%] inset-0  gradient-1' />
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Service/>
      <Partners/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}
