'use client'
import { TimelineContext } from '@/app/context/TimelineContext';
import { useContext } from 'react';
import { LuVideo } from 'react-icons/lu';

const HandleVideoCallBtn = ({ friend }) => {
    const { VideoCallBtn } = useContext(TimelineContext)

    return (
        <div
            className='bg-gray-200 p-4 rounded-lg w-full text-center'
            onClick={()=> VideoCallBtn(friend)}>
            <LuVideo className='text-3xl mx-auto font-bold mb-2' />
            <p className='text-lg'>Video Call</p>
        </div>
    );
};

export default HandleVideoCallBtn;