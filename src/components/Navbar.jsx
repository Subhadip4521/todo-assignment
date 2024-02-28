import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import task from "../assets/task.svg";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import logout from "../assets/logout.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between rounded-lg md:flex-col gap-5 space-x-5 md:space-x-0 space-y-2 md:my-10 mx-4 md:ml-12 py-5 px-3 md:px-6 md:py-5 bg-slate-300">
        <div>
          <img src={logo} alt="" className="w-12 " />
        </div>
        <div className="pl-3 md:pl-1 md:pt-6 flex md:flex-col gap-5">
          <div>
            <Link to="/form">
              <img src={task} alt="" className="w-10" />
            </Link>
          </div>
          <div>
            <img src={home} alt="" className="w-10" />
          </div>
          <div>
            <img src={notification} alt="" className="w-10" />
          </div>
        </div>
        <div className="pl-3 md:pl-1 md:pt-6">
          <img src={logout} alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
