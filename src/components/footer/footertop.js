import React from 'react'

const footertop = () => {
  return (
    <div className='w-full bg-[white] py-6'>
      <div className='w-full border-t-[1px] border-b-[-1px] py-8'>
        <div className='w-64 mx-auto text-center flex flex-col gap-1'>
          <p className='text-sm '>See Personalised recommendations</p>
          <button className='w-full bg-yellow-400 rounded-md py-1 font-semibold 
          curosr-pointer hover:-yellow-500 active:bg-yellow-700'>Sign In</button>
          <p className='text-xs mt-1'>New Customer?{" "} 
          <span className='text-blue-600 m1-1 cursor-pointer'>Start here.</span></p>
        </div>
      </div>
    </div>
  )
}

export default footertop