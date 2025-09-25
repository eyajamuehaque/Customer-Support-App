
import React, { useState, useEffect } from 'react';
import Tickets from '../Tickets/Tickets';

const ViewTicket = ({ ticketsPromise, selected, setSelected, progress, setProgress }) => {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        ticketsPromise.then(data => setTickets(data));
    }, [ticketsPromise]);

    const removeCard = (id) => {
        setTickets(tickets.filter(ticket => ticket.id !== id));
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-10'>
             
            {
                tickets.map(ticket => <Tickets progress={progress} setProgress={setProgress} selected={selected} setSelected={setSelected} key={ticket.id} ticket={ticket} removeCard={removeCard}></Tickets>)
            }
        </div>
    );
};

export default ViewTicket;