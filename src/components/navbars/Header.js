import { UserIcon, LogoutIcon, CogIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logout from "./Logout";
function Header() {
  const [userInfo, setUserInfo] = useState({});
  const loadUserDetail = async () => {
    let information = await JSON.parse(localStorage.getItem("user"));
    console.log(information);
    setUserInfo({
      name: information.name ? information.name : "admin",
      email: information.email,
      role: information.role,
    });
  };
  useEffect(() => {
    loadUserDetail();
  }, []);
  return (
    <nav className="flex mx-6 my-5 justify-between font-sans ">
      <div>
        {/* left part  */}
        <h1 className="text-2xl font-mono">
          {userInfo.role === 1 ? (
            <Link to="/admin">Dashboard</Link>
          ) : (
            <Link to="/user">Dashboard</Link>
          )}
        </h1>
      </div>
      <div className="flex  justify-evenly">
        {/* right part  */}
        <span className="flex group flex-col cursor-pointer items-center  md: mr-7 relative group">
          <UserIcon className="h-6 w-6 group-hover:animate-bounce " />
          <p className="opacity-0 group-hover:opacity-100 font-bold">Profile</p>
          <div className="hidden arrow group-hover:inline-block" />
          <div className="hidden absolute text-white text-xl bg-gray-400 top-[54px] rounded-sm p-4 min-w-[160px] shadow-xl z-1 group-hover:inline-block">
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        </span>

        <Logout />
      </div>
    </nav>
  );
}

export default Header;
