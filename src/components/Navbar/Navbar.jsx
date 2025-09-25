import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="font-bold btn-ghost text-sm md:text-2xl">CS — Ticket System</a>
  </div>
  <div className="flex items-center ">
    <ul className="menu menu-horizontal px-1 text-xl flex-none hidden md:flex">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li className='mr-2'><a>Contact</a></li>
        
    </ul>
    <button className="btn btn-primary text-xl">+ New Ticket</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;