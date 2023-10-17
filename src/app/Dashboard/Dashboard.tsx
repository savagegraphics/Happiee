import React from 'react'
import OneGrid from './OneGrid'
import ThreeGrid from './ThreeGrid'
import TwoGrid from './TwoGrid'
import 'tailwindcss/tailwind.css'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <section className=''>
      <div className='container px-6 py-10 mx-auto'>
        <div className='lg:flex lg:-mx-6'>
          <div className='lg:w-3/4 lg:px-6'>
            <ThreeGrid />
            <TwoGrid />
          </div>

          <div className='mt-8 lg:w-1/4 lg:mt-0 lg:mr-4 bg-slate-300 rounded-lg'>
            <OneGrid />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
