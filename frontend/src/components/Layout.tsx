import { Outlet } from "react-router-dom";
import socketio from "../socketio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function() {
    const [ connected, setConnected ] = useState<boolean>()
    socketio.on('connect', () => {
        console.log('Connected to socket.io server!');
        setConnected(true)
    });

    socketio.on('disconnect', () => {
        console.log('Disconnected from socket.io server!');
        setConnected(false)
    });

    return (
        <>
            {(!connected && connected != undefined) &&
                <div className="absolute h-screen flex flex-col w-full bg-gray-200/30">
                    <div className='w-full mx-auto my-auto text-red-200 flex flex-col text-center bg-red-500 p-4 rounded'>
                        <FontAwesomeIcon icon={faTriangleExclamation} className='text-5xl'/>
                        <label className="text-3xl">Niet verbonden!</label>
                        <label className="text-xl">Opnieuw aan het verbinden...</label>
                    </div>
                </div>
            }
            <div className='flex flex-col bg-gray-800'>
                <div className='sm:max-w-sm mx-auto w-full h-screen bg-gray-900 text-white'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}