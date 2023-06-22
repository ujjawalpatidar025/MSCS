import React, { useState } from 'react';
import logo from '../Images/MSCS.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-cyan-800 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Navigation links */}
          <div className="hidden sm:block">
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(1)}
                onMouseLeave={() => toggleDropdown(1)}
              >
                Home
               
              </a>
              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(2)}
                onMouseLeave={() => toggleDropdown(2)}
              >
                Charts
                {activeDropdown === 2 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">State-Wise</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Year-Wise</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Type-Wise</a>
                    
                  </div>
                )}
              </a>
              {/* Add more links and submenus as needed */}

              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(3)}
                onMouseLeave={() => toggleDropdown(3)}
              >
                Reg. Societies
                {activeDropdown === 3 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">State-Wise List</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">All Reg. Societies(pdf)</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Societies registered before 1986</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Calender Year-wise List</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Financial Year-wise List</a>
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(4)}
                onMouseLeave={() => toggleDropdown(4)}
              >
                Forms
                {activeDropdown === 4 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Form I</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Form II</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Form III</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Form IV</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Form V</a>
                  </div>
                )}
              </a>



              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(5)}
                onMouseLeave={() => toggleDropdown(5)}
              >
                MSCS Acts
                {activeDropdown === 5 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">MSCS Acts, 2002</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">MSCS Rules, 2002</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Checklist</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">National Policy on Cooperative, 2002</a>
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(6)}
                onMouseLeave={() => toggleDropdown(6)}
              >
                Application
                {activeDropdown === 6 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Received Application</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Status of Application</a>
                  
                  </div>
                )}
              </a>



              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(7)}
                onMouseLeave={() => toggleDropdown(7)}
              >
               MSCS-MIS
                {activeDropdown === 7 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">New User Registration</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">User Login</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Admin User</a>
                    
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(8)}
                onMouseLeave={() => toggleDropdown(8)}
              >
                Reports
                {activeDropdown === 8 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">All Reg Societies</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Registered Users</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Filed Annual Returns Online</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Annual Returns: Offline</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Reminder Message</a>
                  </div>
                )}
              </a>



              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(9)}
                onMouseLeave={() => toggleDropdown(9)}
              >
                Liquidation
                {activeDropdown === 9 && (
                  <div className="absolute left-0 w-40 mt-2 bg-white text-cyan-700 py-2 rounded-md shadow-lg">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Societies under Liquidation</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-100">Liquidatipn Process Initiated</a>
             
                  </div>
                )}
              </a>



              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                onMouseEnter={() => toggleDropdown(10)}
                onMouseLeave={() => toggleDropdown(10)}
              >
                Banks
                
              </a>
            </div>
          </div>

          {/* Hamburger icon for mobile */}
          <div className="flex sm:hidden">
            <button
              type="button"
              className="text-cyan-300 hover:bg-cyan-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(1)}
              >
                Home
                
              </a>
              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(2)}
              >
                Charts
                {activeDropdown === 2 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">State-Wise</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Year-Wise</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Type-Wise</a>
                   
                  </div>
                )}
              </a>
              {/* Add more links and submenus as needed */}


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(3)}
              >
                Reg. Societies
                {activeDropdown === 3 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">State-Wise List</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">All Reg. Societies(pdf)</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Societies registered before 1986</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Calender Year-wise List</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Financial Year-wise List</a>
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(4)}
              >
                Forms
                {activeDropdown === 4&& (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Form I</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Form II</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Form III</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Form IV</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Form V</a>
                  </div>
                )}
              </a>



              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(5)}
              >
                MSCS Acts
                {activeDropdown === 5 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">MSCS Acts, 2002</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">MSCS Rules, 2002</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Checklist</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">National Policy on Cooperative, 2002</a>
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(6)}
              >
                Application
                {activeDropdown === 6 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Received Application</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Status of Application</a>
             
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(7)}
              >
               MSCS-MIS
                {activeDropdown === 7 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">New User Registration</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">User Login</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Admin User</a>
                    
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(8)}
              >
                Reports
                {activeDropdown === 8 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">All Reg Societies</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Registeres Users</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Filed Annual Returns : Online</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Annual Returns : Offline</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Reminder Message</a>
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(9)}
              >
                Liquidation
                {activeDropdown === 9 && (
                  <div className=" ">
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Societies under Liquidation</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-cyan-600">Liquidatipn Process Initiated</a>
                    
                  </div>
                )}
              </a>


              <a
                href="#"
                className="text-cyan-300 hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => toggleDropdown(10)}
              >
                Banks
               
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
