import React from 'react'

type Props = {}

const SingleCard = (props: Props) => {
  return (
    <section className='mx-2 my-6 lg:w-[189px] lg:h-[150px] w-[329px] h-[120px]  rounded-lg bg-white'>
      <div className='mx-6 py-4'>
        <p className='text-gray-400 text-xs font-medium font-Aeonik'>
          Departure Date
        </p>

        <p className='text-black text-xs font-medium font-Aeonik'>
          12 January 2023 <span> 5:55 AM</span>
        </p>
      </div>

      <div className='mx-6 py-4'>
        <p className='text-gray-400 text-xs font-medium font-Aeonik'>
          Departure Date
        </p>

        <p className='text-black text-xs font-medium font-Aeonik'>
          12 January 2023 <span> 5:55 AM</span>
        </p>
      </div>
    </section>
    // <div className='rounded-2xl bg-white border border-gray-200'>
    //   {/* <div className='grid grid-cols-2 gap-4 mt-4 shrink-0'>
    //     <button className=' text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none'>
    //       Accept all
    //     </button>

    //     <button className=' text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none'>
    //       Reject all
    //     </button>

    //     <button className=' text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none'>
    //       Preferences
    //     </button>

    //     <button className=' text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none'>
    //       Close
    //     </button>
    //   </div> */}
    // </div>
  )
}

export default SingleCard
