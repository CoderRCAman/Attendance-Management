import { UserIcon, LogoutIcon, CogIcon } from '@heroicons/react/solid';
function Header() {
    return (
        <nav className="flex mx-6 my-5 justify-between font-sans ">
            <div >
                {/* left part  */}
                <h1 className='text-2xl font-mono'>Dashboard</h1>
            </div>
            <div className='flex  justify-evenly'>
                {/* right part  */}
                <span className="flex group flex-col cursor-pointer items-center transition duration-300 ease-out  transform hover:-translate-y-1  mr-7">
                    <UserIcon className='h-6 w-6 ' />
                    <p className='opacity-0 group-hover:opacity-100 font-bold'>Profile</p>
                </span >
                <span className="flex group flex-col cursor-pointer items-center transition duration-300 ease-out  transform hover:-translate-y-1  mr-7">
                    <CogIcon className='h-6 w-6 ' />
                    <p className='opacity-0 group-hover:opacity-100 font-bold'>Settings</p>
                </span >
                <span className="flex group flex-col cursor-pointer items-center transition duration-300 ease-out  transform hover:-translate-y-1  mr-7">
                    <LogoutIcon className='h-6 w-6 ' />
                    <p className='opacity-0 group-hover:opacity-100 font-bold'>Logout</p>
                </span >

            </div>
        </nav>
    )
}

export default Header
