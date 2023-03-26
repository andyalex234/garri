'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';
import { Card } from '@/components';
import { aboutContents } from '@/constants/content';

const About = () => (
    <section id="about-section" className='md:pt-20 pt-10 '>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='relative mx-auto lg:w-[80%] w-[100%] flex gap-40 h-[50%]'
        >
            <div className='absolute inset-0 bg-[url("/icon-big-gray.svg")] bg-no-repeat bg-contain  h-[498px] bg-right' />
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 0.8)}
                className='w-[50%]'
            >
                <Image src='/icon-big.svg' alt='log icon' height='276' width='276' />
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='text-white'
            >
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold pb-5'>Garri means a boost to enable potential to reality.</h1>
                    <p className='font-normal text-base'>Our motivation is derived from a desire to have a greater impact on Ethiopian and African businesses by harnessing technological innovations in the Blockchain area.</p>
                </div>
            </motion.div>

        </motion.div>
        {/* mission vision value section */}
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='mx-auto lg:w-[80%] w-[100%] flex flex-col md:flex-row gap-10 md:pt-48 pt-16'
        >
            {aboutContents.map((content, i) => (
                <motion.div
                    key={content.title}
                    variants={fadeIn('up', 'tween', 0.2 * i, 0.8 * i)}
                >
                    <Card title={content.title} body={content.body} />
                </motion.div>
            ))}
        </motion.div>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[36px] font-bold text-white text-center py-72'
            >
                We are a technology company founded by experienced web3 engineers with over a decade of experience working at top tech companies around the world. Our mission is to empower Ethiopia&apos;s economy through cutting-edge technology solutions.
            </motion.p>

        </motion.div>
    </section>
)

export default About;