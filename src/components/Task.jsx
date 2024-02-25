import React from "react";
import rocket from "../assets/rocket.svg";
import checkbox from "../assets/checkbox.svg";

const Task = () => {
  return (
    <div>
      <div className="bg-slate-100 rounded-lg py-2 px-5 sm:px-4">
        <div className="flex justify-center gap-3 ">
          <div className="font-bold text-2xl">Task</div>
          <div>
            <img src={rocket} alt="" className="w-10" />
          </div>
        </div>
        <div>Notes:</div>
        <hr />
        <div className="flex mt-5">
          <div>
            <img src={checkbox} alt="" className="w-6"/>
          </div>
          <div>Here is a task item.</div>
        </div>
        <div className="flex mt-2">
          <div>
            <img src={checkbox} alt="" className="w-6"/>
          </div>
          <div>Here is a task item.</div>
        </div>
        <div className="flex mt-2">
          <div>
            <img src={checkbox} alt="" className="w-6"/>
          </div>
          <div>Here is a task item.</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
