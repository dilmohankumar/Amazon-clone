import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getAuth, signOut } from "firebase/auth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout'; // Added LogoutIcon import
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch import
import { Link } from 'react-router-dom';
import { Logo } from "../../assets/index.js";
import HeaderBottom from './headerbottom.js';
import { setUserInfo, userSignOut } from '../../Redux/amazoneslice.js'; // Added userSignOut import

const Header = () => {
  const auth = getAuth();
  const dispatch = useDispatch(); // Initialize useDispatch

  const [showall, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon?.products ?? []);

  const userInfo = useSelector((state) => state.amazon.userInfo);

  const allItems = [
    { _id: '102', title: 'Music' },
    { _id: '103', title: 'Nike' },
    { _id: '104', title: 'prime video' },
    { _id: '105', title: 'adidas' },
    { _id: '106', title: 'video games' },
    { _id: '107', title: 'womens fashion' },
    { _id: '108', title: 'toys' },
    { _id: '109', title: 'sports' },
    { _id: '110', title: 'software' },
    { _id: '119', title: 'Music' },
    { _id: '120', title: 'Nike' },
    { _id: '121', title: 'prime video' },
    { _id: '122', title: 'adidas' },
    { _id: '123', title: 'video games' },
    { _id: '124', title: 'womens fashion' },
    { _id: '125', title: 'toys' },
    { _id: '126', title: 'sports' },
    { _id: '127', title: 'software' },
  ];

  const handleLogout = () => {
    
    signOut(auth).then(() => {
      console.log('Sign-out successful.')
      dispatch(userSignOut())
    }).catch((error) => {
      console.log(error)
    });
    
  };


  return (
    <div className='w-full sticky top-0 z-50'>
      <div className='max-w-container bg-amazon_blue h-14 py-3 text-white px-4 flex items-center gap-4'>
        {/* image start */}
        <Link to='/'><div className='headerHover'>
          <img className="w-24 mt-2" src={Logo} alt='' />
        </div></Link>
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
          <span onClick={() => setShowAll(!showall)}
            className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer 
          duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center 
          rounded-tl-md rounded-bl-md'>
            All<span></span><ArrowDropDownIcon />
          </span>
          {
            showall && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll 
                overflow-x-hidden bg-white border border-amazon_blue text-black p-2 flex flex-col gap-1 z-50'>
                  {
                    allItems.map((item) => (
                      <li className='text-sm tracking-wide font-titleFont border-b 
                      border-b-transparent hover:border-b-amazon_blue hover:bg-gray-200
                       cursor-pointer duration-200 border-b-gray-200' key={item._id}>{item.title}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'></input>
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow 
          hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchIcon /></span>
        </div>
        {/* search end */}
        {/* signin start */}
        <Link to="/signin">
          <div className='flex flex-col items-start justify-center headerHover'>
            {
              userInfo ? (<p className='text-sm md1:text-sm text-gray-100 md1:text-lighttext font-medium'>{userInfo.userName}</p>
              ) : (
                <p className='text-sm md1:text-xs text-white md1:text-lighttext font-light'>Hello, sign in</p>)
            }

            <p className='text-sm font-semibold -mt-1 text-[white_text] hidden md1:inline-flex'>Accounts & Lists{" "}
              <span><ArrowDropDownIcon /></span>
            </p>
          </div>
        </Link>
        {/* signin end */}
        {/* order start */}
        <div className='hidden lg:flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lighttext font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-[white] '>& Orders</p>
        </div>
        {/* order end */}
        {/* cart start */}
        <Link to='/cart'>
          <div className='flex items-center justify-center headerHover relative'>
            <ShoppingCartIcon />
            <div className='text-xs font-semibold mt-3 text-white relative'>
              Cart
              <span className='absolute top-[-8px] right-[-10px] p-1 h-4 w-4 bg-[#f3a847]
               text-amazon_blue rounded-full flex items-center justify-center'>
                {products.reduce((total, product) => total + product.quantity, 0)}
              </span>
            </div>
          </div>
        </Link>
        {/* cart end */}
        {
          userInfo && (
            <div onClick={handleLogout} className='flex flex-col justify-center headerHover relative'>
              <LogoutIcon />
              <p className='hidden md1:inline-flex text-xs font-semibold text-white'>Log out</p>
            </div>
          )
        }
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
