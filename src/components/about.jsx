import React from "react";
import {  Outlet, Link, Route, Routes } from "react-router-dom";
import Team from "./aboutteam";

const About = () => {
  return (
    <>
    <div className="row">
        <div className="col-3">
      <Link to={'/about/team'}>Team</Link>
      <Link to={"/about/company"}>Company</Link>
      </div>
      </div>
      <div className="col">
      </div>
    </>
  );
};

export default About;
