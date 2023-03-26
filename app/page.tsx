import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '@/components';
import Hero from '@/sections/Hero';


export default function Home() {
  return (
    <div className='bg-black overflow-hidden md:px-36 px-16 '>
      <div>
        <div className='absolute w-[50%] inset-0  gradient-1' />
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}
