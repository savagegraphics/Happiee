import React from 'react';

type Props = {};

const Zero = (props: Props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Elegant Decor</h6>
          <p className="text-sm text-gray-900">
            Our selection of elegant decor pieces will transform your living spaces into a masterpiece of style and sophistication.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Timeless Classics</h6>
          <p className="text-sm text-gray-900">
            Embrace the timeless classics that never go out of style. Our collection includes pieces that stand the test of time.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-5 duration-300 transform bg-white border rounded-lg shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Modern Aesthetics</h6>
          <p className="text-sm text-gray-900">
            Experience modern aesthetics with our collection of contemporary decor that redefines your living spaces.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Zero;
