import React from 'react';
import { toast } from 'react-toastify';

const ResolvedTask = ({ task,setResolved,setCompleted, completed }) => {

    const handleClick = () => {
        setResolved(resolved => resolved.filter(t => t.id !== task.id));
        toast(`${task.title} removed from resolved tasks.`);
        setCompleted(completed - 1);
    }
    return (
        <div className='flex justify-between items-center border p-5 rounded-lg mt-2 bg-[#d7f9e3]'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-sm font-semibold'>{task.title}</h1>
                <span className='text-sm font-semibold text-green-700'><i class="fa-regular fa-circle-check"></i> Completed</span>
            </div>

            <img onClick={handleClick} className='h-4 w-4 cursor-pointer' src="https://i.ibb.co.com/vx5KqdzZ/Frame.png" alt="" />
        </div>
    );
};

export default ResolvedTask;