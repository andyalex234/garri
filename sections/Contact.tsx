'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

const Contact = () => (
    <section id="about-section" className='md:pt-20 pt-10'>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col items-center justify-center'
        >
            <div className='items-center justify-center'>
                <Image className='items-center' src='/logo-large.svg' width={486} height={142} alt='company logo' />
            </div>
            
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[24px] font-bold text-white text-center pt-20'
            >
                Garri operates in an impartial and neutral manner, free from religious or political bias. Our focus is on delivering cutting-edge Blockchain solutions that meet the needs of our clients and customers. We pride ourselves on fostering an inclusive and diverse environment where individuals are respected for their unique perspectives and contributions.
            </motion.p>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[16px] font-bold text-white text-center pt-6'

            >
                We are located in Bole Atlas, near Edna mall in front of the Sheger building, HelzarTower 801 & 807.
            </motion.p>

            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[16px] font-bold text-white text-center pt-6'

            >
                Call us: +2519xxxxxxxx 
            </motion.p>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[16px] font-bold text-white text-center pt-6'

            >
                E-mail: <span><a href='garritech@gmail.com'>garritech@gmail.com</a></span>
            </motion.p>
        </motion.div>
    </section>
)

export default Contact;