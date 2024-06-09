import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './headerbottom.js';
import React, { useState } from 'react';
import { Logo } from "../../assets/index.js";
const Header = () => {
  const [showall, setShowAll] = useState(false);
  console.log(showall);
  const allItems = [
    {
      _id: '102', title: 'Music'
    },
    {
      _id: '103', title: 'Nike'
    },
    {
      _id: '104', title: 'prime video'
    },
    {
      _id: '105', title: 'adidas'
    }, {
      _id: '106', title: 'video games'
    }, {
      _id: '107', title: 'womens fashion'
    }, {
      _id: '108', title: 'toys'
    }, {
      _id: '109', title: 'sports'
    }, {
      _id: '110', title: 'software'
    },


    {
      _id: '119', title: 'Music'
    },
    {
      _id: '120', title: 'Nike'
    },
    {
      _id: '121', title: 'prime video'
    },
    {
      _id: '122', title: 'adidas'
    }, {
      _id: '123', title: 'video games'
    }, {
      _id: '124', title: 'womens fashion'
    }, {
      _id: '125', title: 'toys'
    }, {
      _id: '126', title: 'sports'
    }, {
      _id: '127', title: 'software'
    },

  ];


  return (
    <div className='w-full sticky top-0 z-50' >

    <div className='max-w-container bg-amazon_blue h-14 py-3 text-white px-4 flex items-center gap-4' >
      {/* image start */}
      <div className='headerHover'>
        <img className="w-24 mt-2" src={Logo} alt='' />
      </div>
      {/* image end */}
      {/* deliver start */}
      <div className='headerHover hidden md1:inline-flex'>
        <LocationOnIcon />
        <p className='text-sm text-lighttext font-light flex flex-col'>Deliver to {" "}
          <span className='text-sm font-semibold -mt-1 text-white_text'>Dilmohan</span></p>
      </div>
      {/* deliver end */}
      {/* search start */}
      <div className='h-10 rounded-md hidden lg:flex flex-grow relative'>
        <span onClick={() => setShowAll(!showall)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
          All<span></span><ArrowDropDownIcon />
        </span>
        {
          showall && (
            <div><ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border border-amazon_blue text-black p-2 flex flex-col gap-1 z-50'>

              {
                allItems.map((item) => (
                  <li className='text-sm  tracking-wide font-titleFont border-b border-b-transparent hover:border-b-amazon_blue hover:bg-gray-200 cursor-pointer duration-200 border-b-gray-200' key={item._id}>{item.title}</li>
                ))
              }

            </ul></div>
          )
        }
        <input className='h-full  text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'></input>
        <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md '><SearchIcon /></span>
      </div>
      {/* search end */}
      {/* signin start */}
      <div className='flex flex-col items-start justify-center headerHover'>
        <p className='text-sm md1:text-xs text-white md1:text-lighttext  font-light'>Hello, sign in</p>
        <p className='text-sm font-semibold -mt-1 text-[white_text] hidden md1:inline-flex'>Accounts & Lists{" "}
          <span><ArrowDropDownIcon /></span>
          </p >
      </div>
      {/* signin end  */}
      {/* order start */}
      <div className='hidden lg:flex flex-col items-start justify-center headerHover'>
        <p className='text-xs text-lighttext font-light'>Returns</p>
        <p className='text-sm font-semibold -mt-1 text-[white] '>& Orders</p>
        
      </div>
      

      {/* order end */}
      {/* cart start */}
      <div className='flex items-start justify-center headerHover relative'>
          <ShoppingCartIcon/>
          <p className='text-xs font-semibold mt-3 text-white'>Cart<span className='absolute text-xs top-3 right-12 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex  justify-center items-center'>0</span></p>
        </div>

      {/* cart end  */}
    
    </div>
    <HeaderBottom/>
    </div>
  );
};

export default Header;