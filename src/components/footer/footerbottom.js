import React from 'react';
import { footerBottomItem } from '../../constants';

const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5x1 max-auto px-4'>
        <div className='w-full grid grid-cols-3 md:grid-cols-5 md1:grid-cols-6 lg:grid-cols-7 gap-3 place-content-center text-gray-400'>
          {footerBottomItem.map((item) => (
            <div className='group cursor-pointer' key={item._id}>
              <h3 className='w-24 font-semibold text-[12px] group:hover:underline text'

              >
                {item.title}


              </h3>
              <p className='w-24 tracking-tight text-[12] text-[999] group-hover:underline'>
                  {item.des}
              </p>
              
            </div>
          ))}
        </div>
         {/* {
            middleList.map((item) => ( 
              <FooterMiddleList 
               key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))
          } */}

      </div>

    </div>
  );
};

export default FooterBottom;
