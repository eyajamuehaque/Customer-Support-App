import React from 'react';
import { toast } from 'react-toastify';

const Tickets = ({ ticket, selected, setSelected, progress, setProgress, removeCard }) => {
    const handleSelect = () => {
        toast( ticket.title + ' selected!');
        const alreadySelected = selected.find(t => t.id === ticket.id);
        if (!alreadySelected) {
        setSelected([...selected, ticket]);
            removeCard(ticket.id);
    }

        if ((ticket.status === 'In-Progress' || ticket.status === 'Open') && !alreadySelected) {
            setProgress(progress + 1);
        }
        
    };

    return (
        <div>
           
            <div onClick={handleSelect} className="cursor-pointer">
                <div className="card w-90 md:w-116 bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <div className='flex justify-between gap-20'>
        <h2 className="card-title text-[16px]">{ticket.title}</h2>
        <div className='flex justify-center items-center'><p className={`text-sm font-semibold rounded-full px-2 py-0.5 ${ticket.status === 'In-Progress' ? 'bg-[#F8F3B9]' : 'bg-[#B9F8CF]'}`}><div className={` rounded-full w-3 h-3 inline-block mr-1 ${ticket.status === 'In-Progress' ? 'bg-[#FEBB0C]' : 'bg-[#02A53B]'}`}></div> {ticket.status}</p></div>
    </div>
    <p className='text-sm'>{ticket.description}</p>
    <div className='flex justify-between text-sm mt-5'>
        <div className='flex gap-2'>
            <span>#{ticket.id}</span>
            <span className={`
                text-sm font-semibold
                ${ticket.priority === 'High' ? 'text-red-600' : ''}
                ${ticket.priority === 'Medium' ? 'text-[#FEBB0C]' : ''}
                ${ticket.priority === 'Low' ? 'text-[#02A53B]' : ''}
                
                
                `}>{ticket.priority}</span>
        </div>

        <div className='flex gap-5'>
            <span>{ticket.customer}</span>
            <span ><i class="fa-solid fa-calendar"></i> {ticket.createdAt}</span>
        </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Tickets;