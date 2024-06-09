import React from 'react'
import FooterMiddleList from './footermiddlelist'
import { Logo, usflag } from '../../assets/index'
import { middleList } from '../../constants'


const FooterMiddle = () => {

  return (
    <div className='w-full bg-amazon_light text-white'>
      {/* top start */}
      <div className='w-full border-b-[1px] border-gray-500 p-10'>
      
        <div className='max-w-5xl mx-auto text-gray-300 '>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:place-items-center md:items-start'>
         
        
          {
            middleList.length ? middleList.map((item) => ( 
              <FooterMiddleList 
               key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
           
            )): <p>Nothing to show</p>
          }
        </div>
        </div>
      </div>
      {/* top end  */}
      {/* bottom start  */}
      <div className='w-full flex gap-6  items-center justify-center py-6'>

        <div>
          <img className='w-20 pt-3' src={Logo} alt='logo' />
        </div>
        <div className='flex gap-2'>
          <p className='flex gap-1 items-center justify-center border border-gray-500
            hover:border-amazon_yellow cursor-pointer  duration-200 px-2 py-1'>English</p>
        </div>
        <div className='flex gap-1 items-center justify-center border border-gray-500
            hover:border-amazon_yellow cursor-pointer  duration-200 px-2 py-1'>
          <img className='w-6' src={usflag} alt='usflag'></img>
          <p>united state</p>
        </div>
      </div>
      {/* bottom end  */}


    </div>
  )
}

export default FooterMiddle


