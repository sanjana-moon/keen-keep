'use client'
import { TimelineContext } from '@/app/context/TimelineContext';
import { useContext } from 'react';
import { MdTextsms } from 'react-icons/md';

const HandleTextBtn = ({ friend }) => {
    const { TextBtn } = useContext(TimelineContext)

    return (
        <div 
        className='bg-gray-200 p-4 rounded-lg w-full text-center'
        onClick={() => TextBtn(friend)}>
            <MdTextsms className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Text</p>
        </div>
    );
};

export default HandleTextBtn;