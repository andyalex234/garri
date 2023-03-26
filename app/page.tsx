import { Navbar } from '@/components';
import Hero from '@/sections/Hero';
import About from '@/sections/About';


export default function Home() {
  return (
    <div className='bg-black overflow-hidden md:px-36 px-16 '>
      <div>
        <div className='absolute w-[50%] inset-0  gradient-1' />
        <Navbar/>
        <Hero/>
      </div>
      <About/>
    </div>
  )
}
