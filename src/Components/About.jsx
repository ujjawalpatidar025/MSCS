import React from 'react';
import emblem from '../Images/emblem.png'

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row  justify-around items-center pt-10  mt-10 mb-16 lg:py-10">
      {/* Left Side (Image) */}
      <div className="w-1/6 lg:w-1/4">
        <img src={emblem} alt="About Image" className="w-3/4 m-8 h-auto lg:rounded-lg " />
      </div>

      {/* Center (Content) */}
      <div className="w-full lg:w-2/3 p-8 lg:px-10">
        <h2 className="text-3xl font-bold font-serif text-center mb-4">Multi State Cooperative Societies ACT, 2002</h2>
        <p className="text-lg text-center text-gray-600">
        An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government. In order to achieve the objective The Multi State Cooperative Societies Bill was introduced in the Parliament.The bill having been passed by both the Houses of Parliament received the assent of the President on 3rd July 2002 and it came on the Statute Book as The Multi State Cooperative Societies ACT 2002 (39 of 2002).
        </p>
        
      </div>

      {/* Right Side (News Box) */}
      <div className="w-full lg:w-1/3 h-auto flex justify-center items-center m-8   lg:mt-0">
       
        <div className="overflow-hidden rounded-lg shadow-lg m-4 bg-gray-100 h-auto w-full justify-center">
        <h2 className='text-center text-2xl m-4 font-bold font-serif'>News Feed</h2>
          <ul className=" list-none space-y-2 p-4">
            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className=" text-center text-sm text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"> Notice for winding up_Khusi Credit Cooperative Society_Dated 15-06-2023</a>
            </li>
            <hr />
            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className=" text-center text-sm text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"> Liquidator Change Order_subh kalyan Multistate Cooperative Credit Society Ltd dated 05.06.2023</a>
            </li>
            <hr />


            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className=" text-center text-sm text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Liquidator extension order</a>
            </li>
            <hr />


            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className= " text-center text-sm text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Under Section 97 of the Multi State Co-operative Societies Act,2002</a>
            </li>
            <hr />

            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className=" text-center text-sm text-gray-700 hover:text-blue-500  transition duration-300 ease-in-out">Notice for initiation of winding up process of Real India Credit Cooperative Society ltd Sirohi Rajasthan datd 07 march 2023</a>
            </li>
            <hr />

            <li className="flex items-center justify-center h-auto">
              
              <a href="#" className="  text-sm text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out">Liquidator extension order of Shree Swastik Credit Cooperative Society ltd</a>
            </li>
        
            {/* Add more news links as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
