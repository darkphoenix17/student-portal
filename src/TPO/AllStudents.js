import React, { Component } from "react";
import "./components/css/table.css";
import { BASE_URL } from "../CONSTANTS";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { ExportJsonCsv } from "react-export-json-csv";

const tableFields = [
  "#",
  "Enrollment",
  "Full Name",
  "Backlogs",
  "CGPA",
  "profile",
];

const headings = [
  "srno",
  "enrollmentNumber",
  "fullName",
  "backlogs",
  "cgpa",
  "profile",
];

const headingColumnsCsv = [
  {
    key: "enrollmentNumber",
    name: "Enrollment Number",
  },
  {
    key: "fullName",
    name: "Full Name",
  },
  {
    key: "gender",
    name: "Gender",
  },
  {
    key: "contactNo",
    name: "Contact Number",
  },
  {
    key: "email",
    name: "Email",
  },
  {
    key: "passoutBatch",
    name: "Passout year",
  },
  {
    key: "backlogs",
    name: "Backlogs",
  },
  {
    key: "cgpa",
    name: "CGPA",
  },
  {
    key: "linkedInURL",
    name: "LinkedIn",
  },
  {
    key: "resumeUrl",
    name: "Resume",
  },
];

const getAllStudentsData = async () => {
  try {
    const allStudents = await fetch(`${BASE_URL}/students/all`, {
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then(val => val.json());
    console.log("allStudents", allStudents);
    return allStudents;
  } catch (err) {
    console.error("Error in loading data from server", err);
    return "Error, please check console for details";
  }
};

class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStudents: [],
    };
  }

  componentDidMount() {
    getAllStudentsData().then(data => {
      this.setState({
        allStudents: data,
      });
    });
  }

  // exportToCsv(filename, rows) {
  //   var processRow = function (row) {
  //     var finalVal = "";
  //     for (var j = 0; j < row.length; j++) {
  //       var innerValue = row[j] === null ? "" : row[j].toString();
  //       if (row[j] instanceof Date) {
  //         innerValue = row[j].toLocaleString();
  //       }
  //       var result = innerValue.replace(/"/g, '""');
  //       if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
  //       if (j > 0) finalVal += ",";
  //       finalVal += result;
  //     }
  //     return finalVal + "\n";
  //   };

  //   var csvFile = "";
  //   for (var i = 0; i < rows.length; i++) {
  //     csvFile += processRow(rows[i]);
  //   }

  //   var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
  //   if (navigator.msSaveBlob) {
  //     // IE 10+
  //     navigator.msSaveBlob(blob, filename);
  //   } else {
  //     var link = document.createElement("a");
  //     if (link.download !== undefined) {
  //       // feature detection
  //       // Browsers that support HTML5 download attribute
  //       var url = URL.createObjectURL(blob);
  //       link.setAttribute("href", url);
  //       link.setAttribute("download", filename);
  //       link.style.visibility = "hidden";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   }
  // }

  // exportToCsv('export.csv', [
  //   ['name','description'],
  //   ['david','123'],
  //   ['jona','""'],
  //   ['a','b'],

  // ])

  render() {
    const students = this.state.allStudents.map((val, index) => {
      val = {
        srno: index + 1,
        ...val,
      };

      // console.log("val", val);
      let rowData = [];

      headings.forEach(key => {
        rowData.push({
          key,
          value: val[key],
        });
      });

      // console.log("r", rowData);

      return (
        <tr key={val._id}>
          {rowData.map((data, index) => {
            if (data.key === "profile") {
              return (
                <td key={index} data-heading={data.key}>
                  <Link to={`/studentprofile/${val._id}`}>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleRight}
                      className="ml-2 website-arrow-icon"
                    />
                  </Link>
                </td>
              );
            }
            return (
              <td key={index} data-heading={data.key}>
                {data.value}
              </td>
            );
          })}
        </tr>
      );
    });

    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Page content */}
        <div className="allStudents__section">
          {/* <h3 className="allStudents__section-heading">All Students</h3> */}
          <main className="allStudents__container flex-grow">
            <div className="table-container my-5">
              <div
                className="table-container__title"
                style={{ justifyContent: "space-around" }}
              >
                <h2>All Students</h2>
                <ExportJsonCsv
                  headers={headingColumnsCsv}
                  items={this.state.allStudents}
                  fileTitle="All_Students_Placement_2022"
                >
                  Download Data
                </ExportJsonCsv>
              </div>
              <table className="table-container__table  table-container__table--break-md">
                <thead>
                  <tr>
                    {tableFields.map((val, ind) => {
                      return <th key={ind}>{val}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>{students}</tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default AllStudents;
