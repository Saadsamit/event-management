import { useContext, useState } from "react";
import logo from "../../public/img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { context } from "../Mycontext";
import { CgProfile } from 'react-icons/cg';
const HeaderNav = () => {
  const { user,logOut } = useContext(context);
  const [toggle,setToggle] = useState(false) 
  const links = ["home", "schedule", "contact"];
  const MyNav = links.map((link, idx) => (
    <li key={idx} className="m-2 capitalize">
      <NavLink
        to={link === "home" ? "/" : `/${link}`}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-white hover:text-white MyGradient"
            : "hover:text-white hover:MyGradient"
        }
      >
        {link}
      </NavLink>
    </li>
  ));
  return (
    <div className="absolute z-10 top-0 right-0 left-0">
      <div className="navbar container mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MyNav}
            </ul>
          </div>
          <img src={logo} alt="" className="w-40" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{MyNav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
          <div className="dropdown">
            <div onClick={()=>setToggle(!toggle)} className="avatar cursor-pointer">
            <div className="w-10 bg-base-200 rounded-full ring ring-borderColor ring-offset-base-100 ring-offset-2">
              {user.photoURL ? <img src={user.photoURL} /> : <div className="flex justify-center items-center h-full"><CgProfile className="text-2xl"></CgProfile></div>}
            </div>
          </div>
          {
            toggle ? (
              <ul
              tabIndex={0}
              className="menu menu-sm right-0 space-y-2 absolute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <h3 className="text-center py-2 text-xl bg-base-200 hover:bg-slate-300 rounded-xl">{user.displayName}</h3>
              <button className="btn MyBtn border-none" onClick={()=>{
                logOut()
                setToggle(false)
                }}>
              logout
            </button>
            </ul>
            ) : ""
          }
            
          </div>
          ) : (
            <Link to="/login" className="btn MyBtn border-none">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
