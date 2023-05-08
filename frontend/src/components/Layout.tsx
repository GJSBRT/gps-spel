import { Outlet } from "react-router-dom"

export default function() {
    return (
        <div className='flex flex-col bg-gray-800'>
            <div className='sm:max-w-sm mx-auto w-full h-screen bg-gray-900 text-white'>
                <Outlet />
            </div>
        </div>
    )
}