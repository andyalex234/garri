'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

const Hero = () => (
    <section className='sm:py-16 xs:py-8 sm:pl-16 pl-6 h-screen '>
        <div className='absolute opacity-80 inset-0 bg-[url("/network.png")] bg-no-repeat bg-contain bg-center' />
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='mx-auto lg:w-[80%] w-[100%]'
        >
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className='md:pt-80 pt-40 font-normal sm:text-[32px] text-[40px] text-center text-white'
            >
                We specialized in providing
                <span className='font-extrabold text-white ' style={{ fontFamily: 'Quantico' }}> cutting-edge </span>
                <span className='text-[#FFE600] font-bold'> Blockchain </span>
                solutions that help businesses thrive in today&apos;s competitive landscape.
            </motion.p>
            <motion.div
                variants={fadeIn('down', 'tween', 0.1, 0.25)}
                className='pt-20 items-center flex justify-center'
            >
                <a href='#about-section'>
                    <Image src='/scroll-down.svg' alt='scroll down' height='45' width='45' />
                </a>
            </motion.div>

        </motion.div>
    </section>
);

export default Hero;