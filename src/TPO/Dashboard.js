import React from "react";
import Stats from "./components/Stats";
import Announcement from "./components/Announcements";
// import AnnouncementForm from "./components/AnnouncementForm";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex flex-col overflow-hidden">
        {/*  Page content */}

        <div className="dashboard__section">
          <main className="dashboard__container flex-grow">
            <div className="dashboard__cunt-2">
              {/* <NotificationTpo /> */}
              <div className="notification__section">
                <h3 className="notification__heading">Calendar</h3>

                <div className="tpo__calendar__container">
                  <iframe
                    title="calendar"
                    className="tpo__calendar"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%231a5f99&ctz=Asia%2FKolkata&showTitle=0&showDate=0&showPrint=0&showCalendars=0&showTz=0&showNav=1&src=cmR0aXdhcmkub2ZmaWNpYWxAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2xhc3Nyb29tMTAzNjg4NDA2MDkxMDE4NjQ5Mzk0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043&color=%237627bb"
                  ></iframe>
                </div>
              </div>
              <div className="notification__section dashboard__stats__container">
                <h3 className="notification__heading">
                  Students Placement Statistics
                </h3>
                <div className="dashboard__stats">
                  <div className="piechart">
                    <Stats batch="B.Tech" />
                  </div>
                  <div className="piechart">
                    <Stats batch="B.Tech Intern" />
                  </div>
                  <div className="piechart">
                    <Stats batch="M.Tech" />
                  </div>
                  <div className="piechart">
                    <Stats batch="MBA" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard__cunt-2">
              <Announcement />

              {/* <div className="notification__section">
                <h3 className="notification__heading">Create Notification</h3>
                <div className="form__dashboard">
                  <div className="form__mail">
                    <AnnouncementForm
                      button={"Send as Personal Notification"}
                    />
                  </div>
                  <div className="form__mail">
                    <AnnouncementForm button={"Send to all as mail"} />
                  </div>

                  <div className="form__mail">
                    <AnnouncementForm button={"Send to all as SMS"} />
                  </div>
                </div>
              </div> */}
              {/* </div> */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
