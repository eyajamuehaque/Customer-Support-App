import React from 'react';
import SelectedTask from '../SelectedTask/SelectedTask';
import ResolvedTask from '../ResolvedTask/ResolvedTask';

const TaskStatus = ({ selected, setSelected, completed, setCompleted, resolved, setResolved, progress, setProgress }) => {
    return (
        <div>
            {selected.length > 0 && (
                <div className='mt-10'>
                    <h2 className='text-lg font-bold'>Task Status</h2>
                    {
                        selected.map(task => <SelectedTask setSelected={setSelected} progress={progress} setProgress={setProgress} resolved={resolved} setResolved={setResolved} completed={completed} setCompleted={setCompleted} key={task.id} task={task}></SelectedTask>)
                    }
                </div>
            )}

            {resolved.length > 0 && (
                <div className='mt-10'>
                    <h2 className='text-lg font-bold'>Resolved Task</h2>
                    {
                        resolved.map(task => <ResolvedTask completed={completed} setCompleted={setCompleted} setResolved={setResolved} key={task.id} task={task}></ResolvedTask>)
                    }
                </div>
            )}
        </div>
    );
};

export default TaskStatus;