import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { focusHandling } from "cruip-js-toolkit";
import AOS from "aos";

// import Home from "./pages/Home";

// import Logout from "./components/Login/Logout";
import Login from "./components/Login/Login";

import Header from "./Student/components/Header";
import Footer from "./Student/components/Footer";

import Dashboard from "./Student/Dashboard";
import AllJobs from "./pages/AllJobs";
import AppliedJobs from "./Student/AppliedJobs";
import JobProfile from "./components/JobProfile";
import EditUser from "./Student/EditUser";

import useToken from "./components/App/useToken";
import Queries from "./Student/Queries";

function StudentApp() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change.

  const { setToken } = useToken();

  return (
    <>
      <Header type="dashboard" />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/edit-user">
          <EditUser />
        </Route>
        <Route exact path="/all-jobs">
          <AllJobs title="All Jobs" />
        </Route>
        <Route exact path="/applied-jobs">
          <AppliedJobs title="Applied Jobs" />
        </Route>
        <Route exact path="/query">
          <Queries title="Ask Query" />
        </Route>
        <Route exact path="/jobs/:id">
          <JobProfile />
        </Route>
        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>
        {/* <Route exact path="/logout">
          <Logout />
        </Route> */}
      </Switch>
      <Footer />
    </>
  );
}

export default StudentApp;
