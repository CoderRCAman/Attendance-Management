import { UserIcon, LogoutIcon, CogIcon } from '@heroicons/react/solid';
import Logout from './Logout';
function Header() {
    return (
        <nav className="flex mx-6 my-5 justify-between font-sans ">
            <div >
                {/* left part  */}
                <h1 className='text-2xl font-mono'>Dashboard</h1>
            </div>
            <div className='flex  justify-evenly'>
                {/* right part  */}
                <span className="flex group flex-col cursor-pointer items-center   mr-7">
                    <UserIcon className='h-6 w-6 group-hover:animate-bounce ' />
                    <p className='opacity-0 group-hover:opacity-100 font-bold'>Profile</p>
                </span >
                <span className="flex group flex-col cursor-pointer items-center mr-7">
                    <CogIcon className='h-6 w-6 group-hover:animate-bounce' />
                    <p className='opacity-0 group-hover:opacity-100 font-bold'>Settings</p>
                </span >
                <Logout />

            </div>
        </nav>
    )
}

export default Header
