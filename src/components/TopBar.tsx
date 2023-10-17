'use client'

import React, { Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'

export function AddressBar () {
  const pathname = usePathname()

  return (
    <section className='hidden md:block lg:block space-y-8 px-2 pt-20 lg:pt-4 lg:px-8'>
      <div className='flex justify-end'>
        <form>
          <div className='relative flex space-x-3 bg-white border border-[#366CB1] rounded-lg shadow-lg shadow-gray-100'>
            <div className='flex-[0_0_auto]'>
              <a
                className='p-2 ml-2 mt-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  text-white transition-all text-sm'
                href='#'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.029 2.5401C11.326 2.37514 11.6602 2.28857 12 2.28857C12.3398 2.28857 12.674 2.37514 12.971 2.5401L20.486 6.7141C20.6418 6.80074 20.7716 6.92746 20.862 7.08113C20.9524 7.23479 21 7.40983 21 7.5881V15.8231C20.9999 16.1797 20.9045 16.5299 20.7235 16.8372C20.5426 17.1446 20.2828 17.3979 19.971 17.5711L12.971 21.4611C12.674 21.6261 12.3398 21.7126 12 21.7126C11.6602 21.7126 11.326 21.6261 11.029 21.4611L4.029 17.5711C3.71736 17.398 3.45763 17.1448 3.27671 16.8377C3.0958 16.5305 3.00026 16.1806 3 15.8241V7.5881C2.99999 7.40983 3.04764 7.23479 3.13802 7.08113C3.22839 6.92746 3.3582 6.80074 3.514 6.7141L11.03 2.5401H11.029Z'
                    stroke='#366CB1'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M7.5 4.5L16.5 9.5V13M6 12.328L9 14'
                    stroke='#366CB1'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M3 7L12 12M12 12L21 7M12 12V21.5'
                    stroke='#366CB1'
                    stroke-width='2'
                    stroke-linejoin='round'
                  />
                </svg>
              </a>
            </div>
            <div className='flex-[1_0_0%]'>
              <label
                htmlFor='hs-search-article-1'
                className='block text-sm text-gray-700 font-medium dark:text-white'
              >
                <span className='sr-only'>
                  Search parcel by tracking number
                </span>
              </label>
              <input
                type='email'
                name='hs-search-article-1'
                id='hs-search-article-1'
                className='mt-2 mb-1 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 text-[#3A3A3A] text-opacity-50 lg:text-sm text-xs lg:font-normal font-thin font-Sansation'
                placeholder='Search parcel by tracking number'
              />
            </div>
            <div className='flex-[0_0_auto]'>
              <a
                className='p-2 mr-2 mt-2 mb-[6px] inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
                href='#'
              >
                <button
                  type='button'
                  className='px-6 text-white text-xs font-normal font-Aeonik rounded-lg'
                >
                  Track
                </button>
              </a>
            </div>
          </div>
        </form>
        <div className='mx-2'>
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_1063_166)'>
              <circle cx='28' cy='29' r='18' fill='white' />
              <circle
                cx='28'
                cy='29'
                r='17.75'
                stroke='#ECF1F6'
                stroke-width='0.5'
              />
            </g>
            <path
              d='M30.7273 37.1818C30.7273 37.7604 30.4974 38.3154 30.0883 38.7246C29.6791 39.1337 29.1241 39.3636 28.5455 39.3636C27.9668 39.3636 27.4119 39.1337 27.0027 38.7246C26.5935 38.3154 26.3637 37.7604 26.3637 37.1818H30.7273ZM28.5455 17.5454C28.8348 17.5454 29.1123 17.6603 29.3169 17.8649C29.5215 18.0695 29.6364 18.347 29.6364 18.6363V19.8145C32.7346 20.3381 35.0909 23.0327 35.0909 26.2727V32.8181L38.3637 36.0909H18.7273L22 32.8181V26.2727C22 23.0327 24.3564 20.3381 27.4546 19.8145V18.6363C27.4546 18.347 27.5695 18.0695 27.7741 17.8649C27.9787 17.6603 28.2561 17.5454 28.5455 17.5454Z'
              fill='#366CB1'
            />
            <ellipse
              cx='43.8181'
              cy='19.7273'
              rx='3.27272'
              ry='3.27273'
              fill='#CA2E31'
            />
            <defs>
              <filter
                id='filter0_d_1063_166'
                x='0'
                y='0'
                width='64'
                height='64'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dx='4' dy='3' />
                <feGaussianBlur stdDeviation='7' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.92549 0 0 0 0 0.945098 0 0 0 0 0.964706 0 0 0 1 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_1063_166'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_1063_166'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className='mx-2'>
          <img
            className='object-cover w-[50px] h-[50px] rounded-full ring ring-gray-300'
            src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100'
            alt=''
          />
        </div>
        <div className='mx-4'>
          {' '}
          <h1 className='text-[#3A3A3A] text-lg font-medium leading-normal font-Aeonik'>
            Paul D
          </h1>
          <span className='text-xs font-normal font-Aeonik text-[#A6A6AA]'>
            Paul D Enterprise
          </span>
        </div>
      </div>
    </section>
  )
}
