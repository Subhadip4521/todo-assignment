import React from "react";
import Hero from "../components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Hero />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Page;
