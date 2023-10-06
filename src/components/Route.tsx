'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import History from '@/app/History/History'
import Dashboard from '@/app/Dashboard/Dashboard'
import Shipment from '@/app/Shipment/Shipment'


type Props = {};

const ResumeList = (props: Props) => {
  const [activeButton, setActiveButton] = useState('Animation');

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
  };

  let contentToShow = null;

  switch (activeButton) {
    case 'Animation':
      contentToShow = <History />; 
      break;
    case 'Web Design': 
      // Replace this with the component/content for Web Design
      contentToShow = <Dashboard/>;
      break;
    case 'App Design':
      // Replace this with the component/content for App Design
      contentToShow = <Shipment/>;
      break;
    default:
      contentToShow = null;
  }

  return (
    <div>
      <section className='bg-gray-800 lg:mt-4 m-4 lg:mx-16 rounded-3xl lg-h-[650px] md-h-[580px] sm-h-[700px] max-w-[85rem] px-4 sm:px-6 lg:px-8'>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="flex py-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
              <button
                className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                  activeButton === 'Animation'
                    ? 'text-indigo-300 border-b-2 border-indigo-500'
                    : 'text-gray-200 border-b-2 border-gray-200'
                } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
                onClick={() => handleButtonClick('Animation')}
              >
               Experience
              </button>

          <button
              className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                activeButton === 'Web Design'
                ? 'text-indigo-300 border-b-2 border-indigo-500'
                : 'text-gray-200 border-b-2 border-gray-200'
             } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
              onClick={() => handleButtonClick('Web Design')}
            >
                Skills
            </button>

              <button
                className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                  activeButton === 'App Design'
                  ? 'text-indigo-300 border-b-2 border-indigo-500'
                  : 'text-gray-200 border-b-2 border-gray-200'
              } sm:text-base dark:text-white whitespace-nowrap cursor-pointer focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400`}
                onClick={() => handleButtonClick('App Design')}
              >
                 Additional Expertise.
              </button>
          </div>
          {/* Display the dynamic content */}
          <div className="mt-8">
            {contentToShow}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeList;
