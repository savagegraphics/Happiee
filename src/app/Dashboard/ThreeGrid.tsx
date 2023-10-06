import React from 'react'
import FaqGrid from './FaqGrid'

type Props = {}

const ThreeGrid = (props: Props) => {
  return (
    <section className="bg-white rounded-xl">
		 <div className="flex flex-col-reverse mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="m-5 font-sans text-xl font-bold tracking-tight text-gray-900 sm:text-xl sm:leading-none md:mb-6 group">
		<h2 className="text-2xl mt-4 font-medium text-[#3A3A3A] font-Aeonik">Track your shipment</h2>
		<p className="pt-2 text-base font-medium text-gray-300 font-Aeonik">
		Your delivery will arrive in 2 days
		</p>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </div>

        <form className='m-4'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative mr-4">
        <input type="search" id="default-search" className="block w-full h-[2.75rem] m-2 text-xs text-[#3A3A3A] font-normal border border-gray-300 rounded-lg bg-[#ECF1F6] focus:ring-blue-500 focus:border-blue-500 " placeholder="NNRLSKL567" required />
        <button type="submit" className="text-white absolute right-0 top-1 bg-[#366CB1] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Find</button>
    </div>
</form>

      </div>
 <FaqGrid/>
</section>
  )
}

export default ThreeGrid