import { Link, NavLink } from "react-router-dom";

const HeaderNav = () => {
  const links = ["home", "about", "blog"];
  const MyNav = links.map((link, idx) => (
    <li key={idx}>
      <NavLink
        to={link === "home" ? "/" : `/${link}`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "MyBtn" : ""
        }
      >
        {link}
      </NavLink>
    </li>
  ));
  return (
    <div className="absolute top-0 right-0 left-0">
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
          <img src="./img/logo.png" alt="" className="w-40" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{MyNav}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn MyBtn border-none">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
