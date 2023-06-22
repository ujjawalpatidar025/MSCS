import React, { useEffect } from 'react'
import About from '../Components/About'
import axios from 'axios';

const HomePage = () => {


  return (
    <div>

        <About/>
        <div className="flex flex-wrap justify-center mb-12">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-blue-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Latest Hearings</h2>
          <p className="text-gray-700 mb-4 ">
          saharayn universal multipurose society limited
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          JMJ Multi State Agro Cooperative Society Ltd.
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          Devbhoomi Agro Multi State Cooperative Society Ltd.
          </p>
          
        
          <a href="/next-page" className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-blue-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Latest Certificates</h2>
          <p className="text-gray-700 mb-4 ">
          Jewan Kothi Multi State Agro Cooperative Society Ltd.
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          "Bharathimanass Agriculture
Cooperative Ltd. (BHARATHIMANAS)"
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          "Youth Employability Skill Training
Cooperative Educational Society Ltd."
          </p>
          
          <a href="/next-page" className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <div className="bg-blue-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Latest Order Sheet</h2>
          <p className="text-gray-700 mb-4 ">
          Ramchandra Multi Speciality Cooperative Hospital & Research Center Ltd
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          Mudra Agriculture & Skill Development Multistate Cooperative Society Ltd
          </p>
          <hr className='bg-gray-500 h-[2px]' />
          <p className="text-gray-700 mb-4">
          The Navbharat Multi State Agro Farming and Marketing Cooperative Society Ltd
          </p>
          <a href="/next-page" className="text-blue-500 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default HomePage