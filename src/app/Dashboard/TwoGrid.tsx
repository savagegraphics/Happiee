import React from 'react'
import { CustomStepper } from './Step'

type Props = {}

const TwoGrid = (props: Props) => {
  return (
<div className="flex flex-col w-full lg:flex-row mt-6">
  <div className="grid flex-grow lg:mr-2 mb-4 h-full lg:w-[260px] w-full rounded-lg bg-gray-600">
    <h1 className="p-3 text-lg">
        Tracking
        <hr className='border-[#3A3A3A]'/>
    </h1>
     <CustomStepper />
    {/* <ul className="steps">
  <li data-content=">" className="step step-primary">Recipient Order</li>
  <li data-content=">" className="step step-primary">Order Pickup</li>
  <li data-content=">" className="step">Order Route</li>
  <li data-content="✓" className="step">Order Destination</li>
</ul> */}
    </div> 
  <div className="grid flex-grow lg:ml-2 mb-4 h-[150px] lg:w-[160px] w-full rounded-lg bg-gray-400">
    content
    </div>
</div>     
  )
}

export default TwoGrid