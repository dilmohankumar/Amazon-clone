import React, { useState } from 'react';
import { darklogo } from '../assets';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Password } from '@mui/icons-material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner';
import { setUserInfo } from '../Redux/amazoneslice';
import { useDispatch } from 'react-redux';



const Signin = () => {
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erremail, setErrEmail] = useState('');
  const [errpassword, setErrPassword] = useState('');
  // firebaseerr 
  const [userEmailErr, setUserEmailErr] = useState('');
  const [userPassErr, setUserPassErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleemail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  }
  const handlepassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  }



  const handleLogin = (e) => {
    e.preventDefault()
    if (!email) {
      setErrEmail('Enter your email');
    }
    if (!password) {
      setErrPassword('Enter your password');
    }
    if (email && password) {
      setLoading(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          dispatch(setUserInfo({
            _id:user.uid,
            userName:user.displayName,
            email:user.email,
            image:user.photoURL,
          }))

          // ...
          setLoading(false);
          setSuccessMsg('Login successful! Welcome back!');
          setTimeout(() => {
            navigate('/')
          }, 2000)
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes('auth/invalid-email')) {
            setUserEmailErr('Invalid email format. Please check your email.');
          }

          if (errorCode.includes('auth/wrong-password')) {
            setUserPassErr('Incorrect password. Please try again.');
          }


        
        });

      setEmail('');
      setPassword('');
    }
  }

  return (
    <div className='w-full pt-4'>
      <div className='w-full bg-gray-100 pb-10'>
      {
        successMsg?(<div className='w-full flex justify-center items-center py-32'>
          <p  className='text-base font-titleFont font-semibold text-green-500 border-[1px]
        border-green-500 px-2 text-center'
      >
        {successMsg}</p></div>):(
           <form className='w-[350px] mx-auto flex flex-col items-center'>
        <img className='w-32 pb-4' src={darklogo} alt='darkLogo' />
        <div className='w-full border border-zinc-200 p-6'>
          <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Email or mobile phone number</p>
              <input
                onChange={handleemail}
                value={email} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm 
              outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='email' />
              {
                erremail && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{erremail}</p>
                )
              }
              {
                userEmailErr && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                  gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{userEmailErr}</p>
                )
              }

            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Password</p>
              <input
                onChange={handlepassword}
                value={password} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm 
              outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password' />

              {
                errpassword && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errpassword}</p>
                )
              }
              {
                userPassErr && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                  gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{userPassErr}</p>
                )
              }

            </div>
            <button onClick={handleLogin} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]
            hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 
            active:shadow-amazonInput'>Continue</button>
            {loading && (
              <div className='flex justify-center'>
                <RotatingLines
                  visible={true}
                  height="96"
                  width="50"
                  color="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            )}
          </div>
          <p className='text-xs text-black leading-4 mt-4 '>By Continuing, you agree to amazon
            <span className='text-blue-600 '> Conditions of use{' '}</span>and <span className='text-blue-600 '>Privacy Notice.</span></p>
          <p className='text-xs text-gray-600 mt-4 cursor-pointer group'><ArrowRightIcon /><span
            className='text-blue-600 group-hover:text-orange-700 group-hover:underline under-line-off-set-1'>Need help?</span></p>

        </div>
        <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
          <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
          <span className='w-1/3 text-center'>New to Amazon?</span>
          <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
        </p>
        <Link className='w-full' to='/Registration' >
          <button className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100
            hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 
            active:shadow-amazonInput'>Create your Amazon account</button></Link>
      </form>)
      }

      </div>
      <div>
        <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10 '>
          <div className='flex items-center gap-6'>
            <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100 '>Conditions of use</p>
            <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100 '>Privacy Notice</p>
            <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100 '>Privacy Notice</p>
          </div>

          <p className='text-xs text-gray-600 '>&copy; copy rights reserved by under section 1999</p>

        </div>
      </div>
    </div>
  );
};

export default Signin;
