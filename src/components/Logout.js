import { LogoutIcon } from '@heroicons/react/solid';
import { Redirect } from 'react-router';
import { useState } from 'react'
function Logout() {
    const [redirect, setRedirect] = useState(false)
    const logout = () => {
        sessionStorage.clear('user')
        setRedirect(true)
    }
    return (
        <>
            {redirect && <Redirect to='/' />}
            <span onClick={logout} className="flex group flex-col cursor-pointer items-center mr-7">
                <LogoutIcon className='h-6 w-6  group-hover:animate-bounce ' />
                <p className='opacity-0 group-hover:opacity-100 font-bold'>Logout</p>
            </span>
        </>

    )
}

export default Logout
