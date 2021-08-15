import AttendanceUser from "./AttendanceUser";
import Spinner from "react-spinkit";
import { useState } from "react";
import { markAttendance } from "../../admin/helper/AdminHelper";
import toast, { Toaster } from "react-hot-toast";

const markSuccess = () => {
  toast.success("Marked Attendance", {
    duration: 2000,
  });
};
const markFail = (msg) => {
  toast.error(msg, {
    duration: 2000,
  });
};
export default function LoadUserForAttendance({
  state,
  setState,
  course,
  date,
  setEditResponse,
}) {
  const [user_ids, setUser_ids] = useState(new Map());

  const submitHandler = (event) => {
    event.preventDefault();
    const newArray = [...state];
    state.forEach((item, index) => {
      user_ids.get(item.item._id) === true
        ? (newArray[index].select = true)
        : (newArray[index].select = false);
    });
    const infoToSend = {
      course,
      record: newArray,
      date: date,
    };
    setState(newArray);
    markAttendance(course._id, infoToSend)
      .then((data) => {
        if (data.status) {
          data.json().then((res) => {
            markFail(res.msg);
          });
        } else {
          markSuccess();
          setEditResponse(true);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Toaster />

      <form
        className="bg-white w-4/6 h-[520px] rounded-xl my-0 mx-auto mt-4"
        onSubmit={submitHandler}
      >
        <p className="p-2 bg-green-600 rounded-t-lg text-xl font-semibold text-center">
          {" "}
          Mark{" "}
        </p>
        <div className="h-[430px] overflow-y-scroll ">
          {state.length > 0 ? (
            state.map((user) => (
              <span key={user.item._id}>
                <AttendanceUser
                  state={user}
                  ids={user_ids}
                  setIds={setUser_ids}
                />
              </span>
            ))
          ) : (
            <div className="grid h-[10vh] place-items-center">
              <Spinner fadeIn="none" name="ball-grid-pulse" color="#06202A" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button className="p-2 bg-green-500 rounded-3xl btnOuter text-white text-bold ">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
