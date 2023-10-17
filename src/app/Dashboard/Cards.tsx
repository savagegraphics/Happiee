import React from 'react'

type Props = {}

const Cards = (props: Props) => {
  return (
    <div className='p-8 bg-gray-100'>
      <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-3'>
        <div className='overflow-hidden bg-white rounded-lg shadow'>
          <div className='px-4 py-5 lg:p-6'>
            <dl>
              <dt className='text-sm font-medium leading-5 text-gray-500 truncate'>
                Total Subscribers
              </dt>
              <dd className='mt-1 text-3xl font-semibold leading-9 text-gray-900'>
                71,367
              </dd>
            </dl>
          </div>
        </div>
        <div className='overflow-hidden bg-white rounded-lg shadow'>
          <div className='px-4 py-5 lg:p-6'>
            <dl>
              <dt className='text-sm font-medium leading-5 text-gray-500 truncate'>
                Avg. Open Rate
              </dt>
              <dd className='mt-1 text-3xl font-semibold leading-9 text-gray-900'>
                53.16%
              </dd>
            </dl>
          </div>
        </div>
        <div className='overflow-hidden bg-white rounded-lg shadow'>
          <div className='px-4 py-5 lg:p-6'>
            <dl>
              <dt className='text-sm font-medium leading-5 text-gray-500 truncate'>
                Avg. Click Rate
              </dt>
              <dd className='mt-1 text-3xl font-semibold leading-9 text-gray-900'>
                21.57%
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
