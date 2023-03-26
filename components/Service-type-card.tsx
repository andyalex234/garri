
'use client';
import Image from "next/image";

const ServiceTypeCard = ({ iconUrl, title, body }: { iconUrl: string, title: string, body: string }) => (

    <div className='justify-center items-start flex flex-col  h-[304px] w-[400px] text-white'>
        <Image src={iconUrl} alt={title} height={47} width={47} />
        <h3 className='pb-9 pt-12 text-[24px] font-semibold'>{title}</h3>
        <p className='text-[16px] font-normal '>{body}</p>
    </div>
);

export default ServiceTypeCard;