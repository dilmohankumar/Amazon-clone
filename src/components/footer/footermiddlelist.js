import React from 'react';

const FooterMiddleList = ({title, listItem}) => {
 
  return (
    <div className='w-full'>
      <h3 className='font-titleFont text-[white] text-base font-semibold mb-3'>{title}</h3>
      <ul className='flex flex-col gap-2 font-bodyFont'>
     
    {listItem.length && listItem.map((item, index) => (
      // console.log(item)
      item.listData.length && item.listData.map((data, index) => (
        // console.log(`data`,data)
        <li className='footerLink ' key={index}>{data}</li>
      ))
    
    ))}
       
        {/* {
        listItem.map((item) => item.listData.map((data)=>(
<li>{data}</li>
        )))} */}
      </ul>
    </div>
  );
}

export default FooterMiddleList;

