import React, { useState, useEffect } from 'react';
import { darklogo } from '../assets';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

const Registration = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [errClientName, setErrClientName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errCPassword, setErrCPassword] = useState('');
  const [firebaseErr, setFirebaseErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        navigate('/signin');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg, navigate]);

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword('');
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword('');
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!clientName) {
      setErrClientName('Enter Your Name');
    }
    if (!email) {
      setErrEmail('Enter Your email');
    } else {
      if (!emailValidation(email)) {
        setErrEmail('Enter a valid email');
      }
    }

    if (!password) {
      setErrPassword('Enter Your password');
    } else {
      if (password.length < 6) {
        setErrPassword('Passwords must be at least 6 characters');
      }
    }
    if (!cpassword) {
      setErrCPassword('Confirm your password');
    } else if (password !== cpassword) {
      setErrCPassword('Passwords do not match');
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cpassword &&
      password === cpassword
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL: '',
          });
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          setSuccessMsg('Account created successfully');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes('auth/email-already-in-use')) {
            setFirebaseErr('Email already in use. Please try another one.');
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[370px] mx-auto flex flex-col items-center'>
          <img className='w-32' src={darklogo} alt='darklogo'></img>
          <div className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input
                  value={clientName}
                  onChange={handleName}
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm 
                  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type='text'
                />
                {errClientName && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errClientName}</p>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or Phone no.</p>
                <input
                  value={email}
                  onChange={handleEmail}
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm 
                  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type='email || number'
                />
                {firebaseErr && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{firebaseErr}</p>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Password</p>
                <input
                  value={password}
                  onChange={handlePassword}
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm 
                  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type='password'
                />
                {errPassword && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errPassword}</p>
                )}
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter Password</p>
                <input
                  value={cpassword}
                  onChange={handleCPassword}
                  className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm 
                  outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
                  type='password'
                />
                {errCPassword && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center 
                    gap-2 mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{errCPassword}</p>
                )}
                <p className='text-xs text-gray-600'>Password must be at least 6 characters.</p>
              </div>

              <button
                onClick={handleRegistration}
                className='w-full py-1.5 text-sm font-normal 
                rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b]
                hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 
                active:shadow-amazonInput'
              >
                Continue
              </button>
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
              {successMsg && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-base font-titleFont font-semibold text-green-500 border-[1px]
                    border-green-500 px-2 text-center'
                  >
                    {successMsg}
                  </motion.p>
                </div>
              )}
            </div>

            <p className='text-xs text-black leading-4 mt-4'>
              By Creating an account, you agree to Amazon's
              <span className='text-blue-600'> Conditions of use </span>and
              <span className='text-blue-600'> Privacy Notice.</span>
            </p>

            <div>
              <p className='text-xs text-black mt-2'>
                Already have an account?{' '}
                <Link to='/Signin'>
                  <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
                  cursor-pointer duration-100'>Sign in{' '}<ArrowRightIcon /></span>
                </Link>
              </p>
              <p className='text-xs text-black mt-2'>
                Buying for work?{' '}
                <span className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1
                cursor-pointer duration-100'>Create a free business account </span>
              </p>
            </div>
          </div>
        </form>
      </div>

      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
        <div className='flex items-center gap-6'>
          <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100'>Conditions of use</p>
          <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100'>Privacy Notice</p>
          <p className='text-xs text-blue-600 hover:text-orange-700 group-hover:underline under-line-off-set-1 cursor-pointer 
          duration-100'>Privacy Notice</p>
        </div>
        <p className='text-xs text-gray-600'>&copy; copy rights reserved by under section 1999</p>
      </div>
    </div>
  );
};

export default Registration;
