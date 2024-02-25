import React, { useState } from "react";
import Calendar from "react-calendar";
import bullseye from "../assets/bullseye.svg";
import sandclock from "../assets/sandclock.svg";
import expand from "../assets/expand.svg";
import Navbar from "./Navbar";
import Task from "./Task";
import { UserData } from "./Data";
import ChartGraph from "./Chart";
import Map from "./Map";

const Hero = () => {
  const [cal, setCal] = useState("hidden");
  const [date, setDate] = useState("block");
  const [height, setHeight] = useState("mt-20 mx-10");

  const hidecal = () => {
    setCal("block");
    setDate("hidden");
    setHeight("mt-52 mx-10");
  };
  const hidedate = () => {
    setCal("hidden");
    setDate("block");
    setHeight("mt-20 mx-10");
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Tasks Done",
        data: UserData.map((data) => data.task_done),
        backgroundColor: ["green", "red", "blue", "purple"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div className="sm:flex bg-blue-900 rounded-b-3xl h-52 justify-between text-white">
        <div className="pl-7 sm:pl-16 py-10">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold ">Hello Dip, Good Morning</p>
            <img src={bullseye} alt="" className="w-8" />
          </div>
          <div className="flex items-center my-3 gap-3">
            <img
              src={sandclock}
              alt=""
              className="hidden sm:block w-10 -mb-4"
            />
            <div className="hidden sm:block text-3xl font-bold font-serif mt-5">
              <p className="items-center">10:10 AM</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-black text-center bg-white text-black mx-5 sm:mx-28 px-5 sm:px-10 py-2 mt-10 -mb-12 rounded-xl">
          <div className={date}>
            <div className="flex gap-3 sm:mt-16">
              <img src={expand} alt="" className="w-5" onClick={hidecal} />
              <p className="font-bold">February, 2024</p>
            </div>
            <div className="font-extralight">
              <i>* Expand to see the calendar view</i>
            </div>
          </div>
          <div className={cal}>
            <div className="">
              <img
                src={expand}
                alt=""
                className="w-5 rotate-180"
                onClick={hidedate}
              />
              <Calendar />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="sm:hidden">
          <div className={height}>
            <div className="w-[280px]">
              <ChartGraph chartData={userData} />
            </div>
            <div className="w-52 my-10">
              <Map />
            </div>
          </div>
          <div>
            <div className="mt-16 mx-5">
              <Task />
            </div>
            <div className="mt-16 mx-5">
              <Task />
            </div>
            <div className="mt-16 mx-5">
              <Task />
            </div>
          </div>
          <div className="mt-[100px] mb-5 sticky bottom-5">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex justify-between">
        <div className="mt-20">
          <Navbar />
        </div>
        <div className="mb-10">
          <div>
            <div className="flex">
              <div className="mt-20 px-6">
                <Task />
              </div>
              <div className="mt-20 px-6">
                <Task />
              </div>
              <div className="mt-20 px-6">
                <Task />
              </div>
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="mt-20 px-6">
                <Task />
              </div>
              <div className="mt-20 px-6">
                <Task />
              </div>
              <div className="mt-20 px-6">
                <Task />
              </div>
            </div>
          </div>
        </div>
        <div className="my-20 mx-10">
          <div className="w-[400px] ">
            <ChartGraph chartData={userData} />
          </div>
          <div className="w-[450px] my-10">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
