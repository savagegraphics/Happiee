import React from 'react'
import Cards from './Cards'
import SingleCard from './SingleCard'

type Props = {}

const Grid = (props: Props) => {
  return (
    <div className='flex flex-col w-full lg:flex-row mt-2 m-4'>
      <div className='grid flex-grow lg:mr-4 mb-4 h-[248px] lg:w-[357px] w-full'>
        <Cards />
      </div>
      <div className='grid flex-grow lg:ml-4 mb-4 h-[248px] lg:w-[140px] w-full'>
        <SingleCard />
      </div>
    </div>
  )
}

export default Grid
