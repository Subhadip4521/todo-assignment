import React, { useEffect, useReducer, useState } from "react";
import Calendar from "react-calendar";
import bullseye from "../assets/bullseye.svg";
import sandclock from "../assets/sandclock.svg";
import expand from "../assets/expand.svg";
import Navbar from "./Navbar";
import Task from "./Task";
import ChartGraph from "./Chart";
import OpenLayermap from "./OpenLayermap";

const Hero = () => {

  const handleDelete = async (id) => {
    await fetch(`http://test-backend.durbin.co.in/main/delete`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id.toString() }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

  };

  // eslint-disable-next-line
  const [userData, setUserData] = useState([]);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    fetch("http://test-backend.durbin.co.in/main/bar_chart_data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData([data]);
      });
  }, []);

  useEffect(() => {
    fetch("http://test-backend.durbin.co.in/main/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTaskData([data]);
      });
  }, []);

  const [cal, setCal] = useState("hidden");
  const [date, setDate] = useState("block");
  const [height, setHeight] = useState("mt-20 mx-10");

  const hidecal = () => {
    setCal("block");
    setDate("hidden");
    setHeight("mt-52 md:mt-20 mx-10");
  };
  const hidedate = () => {
    setCal("hidden");
    setDate("block");
    setHeight("mt-20 mx-10");
  };

  return (
    <div>
      <div className="md:flex bg-blue-900 rounded-b-3xl h-52 w-full justify-between text-white">
        <div className="pl-7 md:pl-16 py-10">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold ">Hello Dip, Good Morning</p>
            <img src={bullseye} alt="" className="w-8" />
          </div>
          <div className="flex items-center my-3 gap-3">
            <img
              src={sandclock}
              alt=""
              className="hidden md:block w-10 -mb-4"
            />
            <div className="hidden md:block text-3xl font-bold font-serif mt-5">
              <p className="items-center">10:10 AM</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-black text-center bg-white text-black mx-5 md:mx-28 px-5 md:px-10 py-2 mt-10 -mb-12 rounded-xl">
          <div className={date}>
            <div className="flex gap-3 md:mt-16">
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
        <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between">
          <div className="mt-10 sticky bottom-5 z-50">
            <Navbar />
          </div>
          <div className="md:flex md:flex-wrap md:w-[55%]">
            {taskData[0] ? (
              taskData[0].map((task, ind) => (
                <div className="mt-16 mb-5 mx-3" key={ind}>
                  <Task taskData={task} handleDelete={handleDelete} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="">
            <div className={height}>
              <div className="w-[300px]">
                <ChartGraph chartData={userData} />
              </div>
              <div className="w-48 my-10 rounded-lg">
                <OpenLayermap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
