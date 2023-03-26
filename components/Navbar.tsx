'use client';

import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
    <motion.nav
        className="py-8 relative"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
    >
        <div className='mx-auto flex justify-between gap-8 '>
            <Image src='/logo.svg' alt=' garri logo' width='100' height='100'/>
            <div className='md:block hidden'>
                <ul className='flex gap-6 text-white'>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Service</Link></li>
                    <li><Link href="#">Team</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </div>
            <div className='md:hidden '>
                <Image src='/menu.svg' alt='menu button' height={30} width={30}/>
            </div>
        </div>
    </motion.nav>
)

export default Navbar;