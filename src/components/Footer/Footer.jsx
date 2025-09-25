import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-black text-white p-10">
            <div className=" flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-8 mb-4">
                
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-bold mb-4">CS - Ticket System</h3>
                    <p className="text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                
                <div className="w-full md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="" className="hover:text-white">About Us</a></li>
                        <li><a href="" className="hover:text-white">Our Mission</a></li>
                        <li><a href="" className="hover:text-white">Contact Sales</a></li>
                    </ul>
                </div>

               
                <div className="w-full md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="" className="hover:text-white">Products & Services</a></li>
                        <li><a href="" className="hover:text-white">Customer Stories</a></li>
                        <li><a href="" className="hover:text-white">Download Apps</a></li>
                    </ul>
                </div>

               
                <div className="w-full md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4">Information</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="" className="hover:text-white">Join Us</a></li>
                    </ul>
                </div>

               
                <div className="w-full md:w-1/5">
                    <h4 className="text-lg font-semibold mb-4">Social Links</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li className="flex items-center space-x-2">
                            <i class="fa-brands fa-instagram"></i>
                            <a href="" className="hover:text-white">@CS — Ticket System</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i class="fa-brands fa-linkedin"></i>
                            <a href="" className="hover:text-white">@CS — Ticket System</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i class="fa-brands fa-facebook"></i>
                            <a href="" className="hover:text-white">@CS — Ticket System</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="" className="hover:text-white">support@cs.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-500 text-sm">
                <p>&copy; 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;