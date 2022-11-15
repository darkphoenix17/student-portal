import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { focusHandling } from "cruip-js-toolkit";
import AOS from "aos";

// import Home from "./TPO/Home";

// import Logout from "./components/Login/Logout";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";

import Header from "./TPO/components/Header";
import Footer from "./TPO/components/Footer";
import Dashboard from "./TPO/Dashboard";
import JobProfile from "./TPO/JobProfile";
import StudentProfile from "./TPO/StudentProfile";
import AllStudents from "./TPO/AllStudents";
import Queries from "./TPO/Queries";
import AllJobs from "./pages/AllJobs";
import PendingApproval from "./TPO/PendingApproval";
import FilledForm from "./TPO/components/FilledForm";
import ErrorPage from "./components/ErrorPage";

function TPOApp() {
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
  }, [location.pathname]); // triggered on route change

  const { setToken } = useToken();

  const links = [
    {
      name: "All Jobs",
      nav: "all-jobs",
    },
    {
      name: "All Students",
      nav: "all-students",
    },
    {
      name: "Queries",
      nav: "queries",
    },
    {
      name: "Pending Approvals",
      nav: "pending-approvals",
    },
  ];

  return (
    <>
      <Header type="dashboardTpo" nav={links} />
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/all-students">
          <AllStudents title="All Students" />
        </Route>
        <Route exact path="/all-jobs">
          <AllJobs title="All Jobs" />
        </Route>

        <Route exact path="/jobs/:id">
          <JobProfile />
        </Route>

        <Route exact path="/studentprofile/:id">
          <StudentProfile />
        </Route>

        <Route exact path="/queries">
          <Queries />
        </Route>

        <Route exact path="/pending-approvals">
          <PendingApproval />
        </Route>
        <Route exact path="/pending-approvals/:id">
          <FilledForm />
        </Route>

        <Route exact path="/login">
          <Login setToken={setToken} />
        </Route>

        <Route exact path="*">
          <ErrorPage />
        </Route>
        {/* <Route exact path="/logout">
          <Logout />
        </Route> */}
      </Switch>
      <Footer />
    </>
  );
}

export default TPOApp;
