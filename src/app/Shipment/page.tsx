'use client'
import React from 'react'
import Delivery from './Delivery'
import Shippings from './Shippings'
import Shipment from './Shipment'
import Estimated from './Estimated'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className='flex justify-between'>
        <h1 className='font-bold text-[#366CB1] text-2xl'>Shipment</h1>
        <button
          type='button'
          className='mr-8 inline-flex px-4 py-3 font-semibold rounded-full bg-white'
        >
          <svg
            width='13'
            height='13'
            viewBox='0 0 13 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='mt-1 mx-2'
          >
            <g clip-path='url(#clip0_1074_172)'>
              <path
                d='M11.1691 4.57692C10.6003 2.07442 8.41743 0.947754 6.49993 0.947754C6.49993 0.947754 6.49993 0.947754 6.49451 0.947754C4.58243 0.947754 2.3941 2.069 1.82535 4.5715C1.1916 7.3665 2.90326 9.73359 4.45243 11.2232C5.0266 11.7757 5.76326 12.0519 6.49993 12.0519C7.2366 12.0519 7.97326 11.7757 8.54201 11.2232C10.0912 9.73359 11.8028 7.37192 11.1691 4.57692ZM6.49993 7.29067C5.55743 7.29067 4.79368 6.52692 4.79368 5.58442C4.79368 4.64192 5.55743 3.87817 6.49993 3.87817C7.44243 3.87817 8.20618 4.64192 8.20618 5.58442C8.20618 6.52692 7.44243 7.29067 6.49993 7.29067Z'
                fill='#292D32'
              />
            </g>
            <defs>
              <clipPath id='clip0_1074_172'>
                <rect width='13' height='13' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <span className='text-xs font-normal'>Lagos, Nigeria</span>
        </button>{' '}
      </div>
      <Shipment />
    </div>
  )
}

export default page
