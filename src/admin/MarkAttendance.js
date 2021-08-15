import Header from "../components/navbars/Header";
import SelectCourseForMark from "../components/course/SelectCourseForMark";
import { useState, useEffect } from "react";
import { getUsersByCourseId } from "./helper/AdminHelper";
import LoadUserForAttendance from "../components/attendance/LoadUserForAttendance";
import toast, { Toaster } from "react-hot-toast";
import EditResponse from "../components/attendance/EditResponse";

const markFail = (msg) => {
  toast.error(msg, {
    duration: 2000,
  });
};

function MarkAttendance() {
  const [selectedCourse, setSelectedCourse] = useState({});
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [editResponse, setEditResponse] = useState(false);

  useEffect(() => {
    if (
      Object.entries(selectedCourse).length === 0 &&
      selectedCourse.constructor === Object
    )
      return;
    const id = selectedCourse._id;
    const convertedDate = [];
    selectedCourse.dates.forEach((dates) => {
      convertedDate.push(dates.split("T")[0]);
    });
    if (selectedCourse.course_duration <= selectedCourse.dates.length) {
      markFail("Course Expired");
      setUsers([]);
      return;
    }
    if (convertedDate.includes(startDate.toISOString().split("T")[0])) {
      markFail("Date marked already");
      setUsers([]);
      return;
    }
    getUsersByCourseId(id)
      .then((data) => {
        if (data.status) {
          //handle error
          data.json().then((response) => {
            markFail(response.msg);
          });
        } else {
          //we have modify it
          const tempUsersList = [];
          data.forEach((item) => {
            let newObject = {
              item,
              select: false,
            };
            tempUsersList.push(newObject);
          });

          setUsers(tempUsersList);
        }
      })
      .catch((e) => {});
  }, [selectedCourse, startDate]);

  return (
    <div>
      <Toaster />
      <Header />
      {editResponse ? (
        <EditResponse state={users} date={startDate} course={selectedCourse} />
      ) : (
        <>
          <SelectCourseForMark
            setSelectedCourse={setSelectedCourse}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          <LoadUserForAttendance
            state={users}
            course={selectedCourse}
            editResponse={editResponse}
            setEditResponse={setEditResponse}
            date={startDate}
            setState={setUsers}
          />
        </>
      )}
    </div>
  );
}

export default MarkAttendance;
