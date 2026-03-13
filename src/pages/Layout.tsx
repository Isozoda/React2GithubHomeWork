import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className=''>
            <header className='shadow '>
                <div className=' w-[50%] flex m-auto py-5 justify-between items-center gap-20'>
                    <Link to={"/"}>
                        <h1 className='font-bold text-2xl hover:text-blue-900 text-gray-900'>Jotai</h1>
                    </Link>
                    <Link to={"/redux"}>
                        <h1 className='font-bold text-2xl hover:text-blue-900 text-gray-900'>Radux</h1>
                    </Link>
                    <Link to={"/zustand"}>
                        <h1 className='font-bold text-2xl hover:text-blue-900 text-gray-900'>Zustand</h1>
                    </Link>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
