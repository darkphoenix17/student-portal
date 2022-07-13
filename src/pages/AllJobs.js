import React, { Component } from "react";
import { Link } from "react-router-dom";

import JobCard from "../components/JobCard";
import {BASE_URL} from "../CONSTANTS";

async function getAllJobs() {
  try {
    const data = await fetch(`${BASE_URL}/jobs/all`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    });
    const retData = await data.json();
    // console.log("data", retData);
    return retData;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "error, please check console for details";
  }
}

class AllJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JobsAll: [],
    };
  }

  componentDidMount() {
    getAllJobs()
      .then((res) => {
        // console.log(res);
        this.setState({ JobsAll: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const jobcard = this.state.JobsAll.map((it) => {
      // console.log(it)
      return (
        <Link key={it.jobId} to={"/jobs/" + it._id}>
          <JobCard details={it} />
        </Link>
      );
    });

    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}
        <div className="jobsApply__section">
          <h3 className="jobsApply__section-heading">{this.props.title}</h3>
          <main className="jobsApply__container flex-grow">
            {/* <div className="JobsApply__container"> */}
            {jobcard}
            {/* </div> */}
          </main>
        </div>
      </div>
    );
  }
}

export default AllJobs;
