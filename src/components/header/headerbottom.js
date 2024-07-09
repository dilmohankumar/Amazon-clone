import React, { useEffect, useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidenavContent from './sidenavcontent';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

const HeaderBottom = () => {
    const ref = useRef();
    const userInfo = useSelector((state) => state.amazon.userInfo); // Get userInfo from Redux state

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (ref.current && e.target.contains(ref.current)) {
                setSidebar(false);
            }
        });
    }, [ref, sidebar]);

    return (
        <div className='w-full px-4 h-[36px] bg-amazon_light text-[white] flex items-center'>
            {/* list start */}
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={() => setSidebar(true)} className='headerHover flex items-center gap-1'><MenuIcon />All</li>
                <li className='headerHover hidden md:inline-flex'>Today Deals</li>
                <li className='headerHover hidden md:inline-flex'>Customer service</li>
                <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
                <li className='headerHover hidden md:inline-flex'>Registery</li>
                <li className='headerHover hidden md:inline-flex'>Sell </li>
            </ul>
            {/* list end */}
            {/* sidenav start */}
            {sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}
                            className='w-[80%] md:w-[350px] h-full bg-[white] border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon />
                                {
                                    userInfo ? (<h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                        {userInfo.userName}
                                    </h3>) : (<h3 className='font-titleFont font-bold text-lg tracking-wide'>
                                        Hello, Sign In
                                    </h3>)
                                }
                            </div>
                            <SidenavContent
                                title='Digital content and devices'
                                one='Amazon Music'
                                two='Kindle Ebooks'
                                three='Amazon Appstore'
                            />
                            <SidenavContent
                                title='Shop by department'
                                one='Electronics'
                                two='Computers'
                                three='Smart Home'
                            />
                            <SidenavContent
                                title='Programs and features'
                                one='Gift Cards'
                                two='Amazon Live'
                                three='International Shopping'
                            />
                            <SidenavContent
                                title='Help & Settings'
                                one='Your Account'
                                two='Customer service'
                                three='Contact us'
                            />
                            <span onClick={() => setSidebar(false)} className='cursor-pointer absolute top-0 left-[82%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-[white] duration-300'><CloseIcon /></span>
                        </motion.div>
                    </div>
                </div>
            )}
            {/* sidenav end */}
        </div>
    );
};

export default HeaderBottom;
