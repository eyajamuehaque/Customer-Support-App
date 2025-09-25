import { Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ViewTicket from './components/View Ticket/ViewTicket'
import TaskStatus from './components/Task Status/TaskStatus'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

const fetchTickets = async () => {
  const res = await fetch('/customer.json'); 
  return res.json();
}

const ticketsPromise = fetchTickets();

function App() {

  const [selected, setSelected] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);

  return (
    <>
      <div className='max-w-7xl mx-auto p-1'>

        <Navbar></Navbar>
        <Banner progress={progress} completed={completed}></Banner>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <div className='col-span-3'>
            <h1 className='text-2xl font-bold mt-4'>Customer Tickets</h1>
              {
                <Suspense fallback={<div>Loading...</div>}>
                  <ViewTicket progress={progress} setProgress={setProgress} selected={selected} setSelected={setSelected} ticketsPromise={ticketsPromise}></ViewTicket>
                </Suspense>
              }
          </div>
          <div className='col-span-1'>
            <TaskStatus progress={progress} setProgress={setProgress} setResolved={setResolved} resolved={resolved} completed={completed} setCompleted={setCompleted} selected={selected} setSelected={setSelected}></TaskStatus>
          </div>
        </div>

       

      </div>

      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
