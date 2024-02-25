import React from "react";
import logo from "../assets/logo.svg";
import task from "../assets/task.svg";
import home from "../assets/home.svg";
import notification from "../assets/notification.svg";
import logout from "../assets/logout.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex rounded-lg sm:flex-col gap-5 space-x-5 sm:space-x-0 space-y-2 sm:my-10 mx-4 sm:ml-12 py-5 px-3 sm:px-6 sm:py-5 bg-slate-300">
        <div>
          <img src={logo} alt="" className="w-12 " />
        </div>
        <div className="pl-3 sm:pl-1 sm:pt-6 flex sm:flex-col gap-5">
          <div>
            <img src={task} alt="" className="w-10" />
          </div>
          <div>
            <img src={home} alt="" className="w-10" />
          </div>
          <div>
            <img src={notification} alt="" className="w-10" />
          </div>
        </div>
        <div className="pl-3 sm:pl-1 sm:pt-6">
          <img src={logout} alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
