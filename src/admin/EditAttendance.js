import Header from "../components/navbars/Header";
import { useLocation } from "react-router-dom";
import EditResponseUser from "../components/edit/EditResponseUser";
import { useState, useEffect } from "react";
import EditResponse from "../components/attendance/EditResponse";
export default function EditAttendance() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const { course, date } = location.state;
  const [editResponse, setEditResponse] = useState(false);
  useEffect(() => {
    console.log(location.state.state);
    setUser(location.state.state);
  }, []);
  return (
    <div>
      <Header />
      {editResponse && user.length > 0 ? (
        <EditResponse state={user} course={course} date={date} />
      ) : (
        <EditResponseUser
          state={user}
          date={date}
          course={course}
          setState={setUser}
        />
      )}
    </div>
  );
}
