
'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import Image from 'next/image';
import { teams } from '@/constants/content';
import { Profile } from '@/components';

const Team = () => (
    <section id="team-section" className='md:pt-32 pt-20 pb-20'>
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
                Our Team
            </motion.h1>
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 0.8)}
                className='text-[16px] font-bold text-white text-center pt-6'

            >
                People who are actively working and add another called board members and include all.
            </motion.p>

        </motion.div>
        <motion.div
            variants={staggerContainer(0, 0)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='md:py-32 justify-center items-center py-20 flex md:gap-44 gap-20'
        >
             {teams.map((team, i) => (
                    <motion.div
                        key={team.name}
                        variants={fadeIn('up', 'tween', 0.2 * i, 0.8 * i)}
                    >
                        <Profile photoUrl={team.photoUrl} name={team.name} title={team.title} />
                    </motion.div>
                ))}
        </motion.div>
    </section>
);

export default Team;