import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import { BASE_URL } from "../../CONSTANTS";
import "../../css/styles.css";
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
        style={{ backgroundColor: "white", overflowY: "scroll" }}
      >
        <h3 className="notification__heading">All Public Announcements</h3>
        <div className="notification__container">{allAnnouncements}</div>
        <div className="form__mail">
          <AnnouncementForm
            type={"announcement"}
            button={"Create New Announcement"}
          />
        </div>
      </div>
    );
  }
}

export default Announcement;