import React from 'react';
import Tickets from '../Tickets/Tickets';

const ViewTicket = ({ ticketsPromise, selected, setSelected, progress, setProgress }) => {
    const tickets = React.use(ticketsPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10'>
             
            {
                tickets.map(ticket => <Tickets progress={progress} setProgress={setProgress} selected={selected} setSelected={setSelected} key={ticket.id} ticket={ticket}></Tickets>)
            }
        </div>
    );
};

export default ViewTicket;