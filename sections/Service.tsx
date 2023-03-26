'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import { ServiceCard, ServiceTypeCard, Technologies } from '@/components';
import { serviceLists, serviceTypes } from '@/constants/content';

const Service = () => (
    <section id="service-section" className='md:pt-72 pt-20'>
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
                Our Service
            </motion.h1>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[16px] font-bold text-white text-center pt-6'

            >
                We offer a platform for data-driven insights and blockchain-powered business solutions. We strive to be the go-to partner for organizations looking to drive digital transformation in the region.
            </motion.p>

        </motion.div>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col md:flex-row gap-28 md:pt-48 pt-16'
        >
            {serviceLists.map((content, i) => (
                <motion.div
                    key={content.title}
                    variants={fadeIn('up', 'tween', 0.2 * i, 0.8 * i)}
                >
                    <ServiceCard iconUrl={content.iconUrl} title={content.title} body={content.body} />
                </motion.div>
            ))}
        </motion.div>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='md:py-56 py-20'
        >
            <motion.h1
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[36px] font-bold text-white text-center'
                style={{ fontFamily: 'Quantico' }}
            >
                Services & Products
            </motion.h1>
            <div className='flex flex-col md:flex-row gap-28 md:pt-48 pt-16'>
                {serviceTypes.map((content, i) => (
                    <motion.div
                        key={content.title}
                        variants={fadeIn('up', 'tween', 0.2 * i, 0.8 * i)}
                    >
                        <ServiceTypeCard iconUrl={content.iconUrl} title={content.title} body={content.body} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='md:py-56 py-20'
        >
            <Technologies />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[24px] font-bold text-white text-center '

            >
                As a team, we are proud to have successfully completed 3 Blockchain solutions. These projects have allowed us to solve real-world problems and enhance the performance of various businesses and organizations.
            </motion.p>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[24px] font-bold text-white text-center pt-6'
            >
                Our solutions have been acknowledged for their scalability, security, and flexibility, and have helped to achieve measurable results such as increased efficiency, cost savings, and improved customer satisfaction. We are committed to delivering high-quality solutions that meet the unique needs of each client and provide them with the support they need to succeed.
            </motion.p>
        </motion.div>
    </section>
);

export default Service;