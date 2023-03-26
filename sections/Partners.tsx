'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

const Partners = () => (
    <section id="partners-section" className='md:pt-32 pt-20 pb-20'>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.h1
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[36px] font-bold text-white text-center'
                style={{ fontFamily: 'Quantico' }}
            >
                Our Partners
            </motion.h1>
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='flex justify-center gap-10'
                style={{ fontFamily: 'Quantico' }}
            >
                <Image src='/intuit.svg' width='315' height='162' alt='intuit company logo' />
                <Image src='/viawest.svg' width='315' height='162' alt='intuit company logo' />
            </motion.div>

            
        </motion.div>
    </section>
);

export default Partners;