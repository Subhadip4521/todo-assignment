import React from "react";
import Hero from "../components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../components/Form";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero/> } />
          <Route exact path="/form" element={<Form/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Page;
