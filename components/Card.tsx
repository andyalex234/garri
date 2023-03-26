'use client';
const Card = ({ title, body }: { title: string, body: string }) => (
    <div className='gradient-1 px-4 rounded-3xl h-[370px] w-[400px] text-white text-center'>
        <div className='absolute rounded-3xl w-[50%] inset-0  gradient-1' />
        <h3 className='pb-9 pt-12 text-[32px]' style={{ fontFamily: 'Quantico' }}>{title}</h3>
        <p className='text-[20px] font-normal '>{body}</p>
    </div>
);
export default Card;