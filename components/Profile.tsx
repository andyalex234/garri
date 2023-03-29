'use client';
import Image from "next/image";

const Profile = ({ photoUrl, name, title }: { photoUrl: string, name: string, title: string }) => (
    <div className='text-white text-center'>
        <div className="rounded-full">
            <Image className="rounded-full h-[160px] w-[160px]" src={photoUrl} alt={name} width={160} height={160} />
        </div>
        <h3 className='pt-5 text-[24px]'>{name}</h3>
        <p className='text-[16px] font-normal '>{title}</p>
    </div>
);
export default Profile;