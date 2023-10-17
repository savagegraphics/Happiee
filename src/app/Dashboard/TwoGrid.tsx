import React from 'react'
import Cards from './Cards'
import SingleCard from './SingleCard'
import Progress from './Progress'

type Props = {}

const Grid = (props: Props) => {
  return (
    <div className='lg:flex lg:-mx-6'>
      <div className='lg:w-4/6 lg:px-6'>
        <Progress />
      </div>

      <div className='mt-8 lg:w-2/6 lg:mt-0 lg:mr-4 bg-slate-300 rounded-lg'>
        <SingleCard />
      </div>
    </div>
  )
}

export default Grid
