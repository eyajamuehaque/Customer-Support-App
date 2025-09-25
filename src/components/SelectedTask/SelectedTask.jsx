import React from 'react';
import { toast } from 'react-toastify';

const SelectedTask = ({ task, completed, setCompleted, resolved, setResolved, progress, setProgress, setSelected }) => {
    const handleComplete = () => {
        setCompleted(completed + 1);
        setProgress(progress - 1);
        toast(`${task.title} marked as completed!`);
        setResolved([...resolved, task]);
        setSelected(selected => selected.filter(t => t.id !== task.id));
    };
    return (
        <div className='border p-5 rounded-lg mt-2'>
            <h1 className='text-sm font-semibold'>{task.title}</h1>
            <button onClick={handleComplete} className="btn w-full mt-3 btn-success bg-[#02A53B] text-sm text-white">Complete</button>
        </div>


    );
};

export default SelectedTask;