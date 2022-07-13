import React from "react";
import { BASE_URL } from "../../CONSTANTS";
import AnnouncementForm from "./AnnouncementForm";
import NotificationCard from "../../components/NotificationCards";

const geeAnnouncements = async () => {
  const data = await fetch(`${BASE_URL}/announcement`, {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
    },
  }).then(val => val.json());
  // console.log(data);
  return data;
};

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
    };
  }
  componentDidMount() {
    geeAnnouncements()
      .then(val => {
        this.setState({ announcements: val });
      })
      .catch(err => {
        console.error("Error in notification", err);
      });
  }
  render() {
    const allAnnouncements = this.state.announcements.reverse().map(val => {
      const date = new Date();
      date.setDate(date.getDate() - 2);

      const announcementDate = new Date(val.date_announced);
      return (
        <NotificationCard
          message={val.message}
          imgSrc={announcementDate > date ? "new.svg" : ""}
          title="New Announcement"
          key={val.date_announced}
        />
      );
    });
    return (
      <div
        className="notification__section"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="notification__heading">All Public Announcements</h3>
        <div className="notification__container tpo__announcement__container">
          <div className="tpo__announcement__card__container">
            {allAnnouncements}
          </div>
          <div className="form__mail">
            <AnnouncementForm
              type={"announcement"}
              button={"Create New Announcement"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Announcement;
