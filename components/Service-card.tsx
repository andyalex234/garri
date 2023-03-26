
'use client';
import Image from "next/image";

const ServiceCard = ({ iconUrl, title, body }: { iconUrl: string, title: string, body: string }) => (
    <div className='justify-center items-center flex flex-col  h-[304px] w-[400px] text-white text-center'>
        <Image src={iconUrl} alt={title} height={140} width={140} />
        <h3 className='pb-9 pt-12 text-[24px] text-[#00FF85] font-semibold'>{title}</h3>
        <p className='text-[16px] font-normal '>{body}</p>
    </div>
);

export default ServiceCard;