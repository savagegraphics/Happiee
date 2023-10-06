import React from 'react'

type Props = {}

const FaqGrid = (props: Props) => {
  return (
<div className="flex">
<dl className="mt-8 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
<div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:px-8 lg:px-12 xl:px-32 divide-[#9e9c9c]">
			<div className="flex flex-col lg:w-full w-[50%] lg:ml-0 ml-8 divide-y divide-[#9e9c9c]">
				<div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2">
               <h1 className='text-[#666565] text-xs font-thin font-Aeonik'>Product</h1>
                <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap'>Camera</span>
                </div>
                <div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2">
                <h1 className='text-[#666565] text-xs font-thin font-Aeonik'>Weight</h1>
                <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap'>8kg</span>
                </div>
    			</div>
			<div className="flex flex-col lg:w-full w-[50%] lg:ml-0 ml-8 divide-y divide-[#9e9c9c]">
            <div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2 mr-8">
            <h1 className='text-[#666565] text-xs font-thin font-Aeonik'>From</h1>
            <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap mr-2'>Lagos, Nigeria</span>
                </div>
                <div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2">
                <h1 className='text-[#666565] text-xs font-thin font-Aeonik'>Price</h1>
                <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap'>N80,000</span>
                </div>
    			</div>
			<div className="lg:w-[100%] w-[50%] lg:ml-0 ml-8 divide-y sm:flex-col sm:flex divide-[#9e9c9c]">
            <div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2">
            <h1 className='text-[#666565] text-xs font-thin font-Aeonik ml-8'>To</h1>
            <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap ml-0 lg:ml-8'>Ontario, Canada</span>
                </div>
                <div rel="noopener noreferrer" className="items-center justify-center pr-6 sm:py-8 lg:py-2">
                <h1 className='text-[#666565] text-xs font-thin font-Aeonik whitespace-nowrap'>Ordered Date</h1>
                <span className='text-[#3A3A3A] text-base font-medium font-Aeonik whitespace-nowrap'>Camera</span>
                </div>
    			</div>
		</div>
		</dl>
</div>
  )
}

export default FaqGrid