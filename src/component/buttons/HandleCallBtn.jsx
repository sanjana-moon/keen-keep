'use client'
import { TimelineContext } from '@/app/context/TimelineContext';
import { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';

const HandleCallBtn = ({ friend }) => {
    const { CallBtn} = useContext(TimelineContext)

    return (
        <div 
        className='bg-gray-200 p-4 rounded-lg w-full text-center'
        onClick={()=> CallBtn(friend)}>
            <LuPhoneCall className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Call</p>
        </div>
    );
};

export default HandleCallBtn;