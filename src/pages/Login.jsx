import React from 'react'
import loginBg from '../assets/loginBg.avif'
const Login = () => {
    return (
        <>
            <div className='login min-h-screen flex items-center justify-center bg-cover bg-center hide-scrollbar'
                style={{ backgroundImage: `url(${loginBg})` }}
            >
                <div className="absolute  bg-black/50"></div>

                {/* card */}
                <div className='relative w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8'>

                    <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
                        Welcome Back 👋
                    </h2>
                </div>
            </div >
        </>

    )
}

export default Login