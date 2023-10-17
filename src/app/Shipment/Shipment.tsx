import React from 'react'
import OneGrid from '@/app/Dashboard/OneGrid'
import Delivery from './Delivery'
import Shippings from './Shippings'
import Estimated from './Estimated'

type Props = {}

const Shipment = (props: Props) => {
  return (
    <section className=''>
      <div className='container px-6 py-2 mx-auto'>
        <div className='lg:flex lg:-mx-6'>
          <div className='lg:w-3/4 lg:px-6'>
            <Shippings />
            <Delivery />
          </div>

          <div className='mt-8 lg:w-1/4 lg:mt-0 lg:mr-4 bg-slate-300 rounded-lg'>
            <Estimated />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shipment
