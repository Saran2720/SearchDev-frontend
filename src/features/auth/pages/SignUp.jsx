import React from 'react'
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <>
      <div className='h-full flex justify-center items-center'>
        <div className='flex justify-center items-center w-full'>
          <div className='mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 flex flex-col items-center'>

            <div className='w-full'>
              <div className="text-center">
                <h1 className='text-3xl font-semibold text-gray-900'>New User</h1>
                <p class="mt-2 text-gray-500">Create an account</p>
              </div>

              <div className='mt-5'>
                <form action="">
                  {/* login */}
                  <div className="relative mt-6">
                    <input type="text" name="name" id="name" placeholder="Name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none placeholder:text-transparent" autocomplete="NA" />
                    <label htmlFor="name" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Name</label>
                  </div>

                  {/* email */}
                  <div className="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none placeholder:text-transparent" autocomplete="NA" />
                    <label htmlFor="email" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Email Address</label>
                  </div>

                  {/* password */}
                  <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none placeholder:text-transparent" autocomplete="NA" />
                    <label htmlFor="password" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Password</label>
                  </div>

                  {/* confirm Password */}
                  <div className="relative mt-6">
                    <input type="password" name="Confirm password" id="Confirm password" placeholder="Confirm password" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none placeholder:text-transparent" autocomplete="NA" />
                    <label htmlFor="Confirm password" className='pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'>Confirm password</label>
                  </div>

                  <div className='my-7'>
                    <button type='submit' className='w-full bg-black text-white border-1 py-4 rounded-md cursor-pointer transition duration-500 hover:tracking-widest'>Sign up</button>
                  </div>

                  <p className='text-center text-sm text-gray-500'>Already have an account?
                    <Link to="/login" className="cursor-pointer text-black"> Login</Link>
                  </p>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp