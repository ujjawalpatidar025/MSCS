import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-800 ">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-cyan-300">
            
            <a href="#" className="block hover:text-white">State Registrars</a>
            <a href="#" className="block hover:text-white">Societies in the Second Schedule</a>
            <a href="#" className="block hover:text-white">Complaint & Hearing Notice</a>
           
          </div>
          <div className="text-cyan-300">
           
            <a href="#" className="block hover:text-white">Circulars</a>
            <a href="#" className="block hover:text-white"> Latest Certificates</a>
            <a href="#" className="block hover:text-white">Amendment (Bye Laws)</a>
            <a href="#" className="block hover:text-white">Notices (New Registration)</a>
          </div>
          <div className="text-cyan-300">
            
            <a href="#" className="block hover:text-white">Rejection Orders</a>
            <a href="#" className="block hover:text-white">Feedback</a>
            <a href="#" className="block hover:text-white">RTI</a>
            <a href="#" className="block hover:text-white">Other Links</a>
          </div>
          <div className="text-cyan-300">
           
            <a href="#" className="block hover:text-white">Contact Us</a>
            <a href="#" className="block hover:text-white">Grievance</a>
            <a href="#" className="block hover:text-white">Hearing Order Sheet</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
