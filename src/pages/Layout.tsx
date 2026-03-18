import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='w-[80%] m-auto'>
            <header className='flex py-5 mb-5 items-center gap-20 justify-center'>
                <Link to={"/"}>
                    <h1 className='text-2xl font-bold'>Zustand</h1>
                </Link>
                <Link to={"/jotai"}>
                    <h1 className='text-2xl font-bold'>Jotai</h1>
                </Link>
                <Link to={"/redux"}>
                    <h1 className='text-2xl font-bold'>Redux</h1>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
