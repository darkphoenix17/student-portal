import React from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../CONSTANTS";

const addAnnouncement = async data => {
  console.log("announceemnt", data);
  await fetch(`${BASE_URL}/tpo/add-announcement`, {
    method: "post",
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: data.announcementMessage }),
  });
};

/* <form className="form__ui" onSubmit={handleSubmit(onSubmit)}>
  <input
    className="form__ui-send"
    type="email"
    placeholder="Reciever Mail/ Phone Number/ Id"
    {...register("recieverMail", { required: true })}
  />
  <textarea {...register("Announcement Message", { required: true })} />

  <input type="submit" className="formSend" value={button} />
</form>; */

const AnnouncementForm = ({ button, type }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="form__ui" onSubmit={handleSubmit(addAnnouncement)}>
      <textarea
        {...register("announcementMessage", { required: true })}
        placeholder={"Type your Message Here"}
        style={{ backgroundColor: "#EEEEEE" }}
      />

      <input type="submit" className="formSend" value={button} />
    </form>
  );
};
export default AnnouncementForm;
