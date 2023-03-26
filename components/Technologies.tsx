'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies, technologiesDetail } from "@/constants/content";
import { useState } from "react";

const Technologies = () => {
    const [active, setActive] = useState(0);

    return (
        <div className='flex text-white gap-5'>
            {/* service types*/}
            <div className="text-[40px] w-[50%] font-extrabold leading-loose">
                {technologies.map((tech, i) => (
                    <div key={i}>
                        <h3 className={`${i == active ? "opacity-1" : "opacity-40"}`}>{tech}<span className=""></span></h3>
                    </div>
                ))}
            </div>
            {/* service detail        */}
            <div className="w-[50%]">
                {technologiesDetail.map((tech, i) => (
                    <div key={i}>
                        <p className={`${i == active ? "opacity-1" : "opacity-0"}`}>{tech}<span className="w-32">-</span></p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Technologies;