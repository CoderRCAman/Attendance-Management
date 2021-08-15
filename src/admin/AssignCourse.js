import Header from "../components/navbars/Header";
import AssignUserList from "../components/assign/AssignUserList";
import toast, { Toaster } from "react-hot-toast";
import { useReducer, useEffect } from "react";
import { getAllUser, getCourses } from "./helper/AdminHelper";
var Spinner = require("react-spinkit");
const successToast = () => {
  toast.success("Assigned Course sucess", {
    duration: 2000,
  });
};
const failToast = () => {
  toast.error("Assigned Course Failed", {
    duration: 2000,
  });
};

const reducer = (state, action) => {
  if (action.type === "success") {
    successToast();
    const newArray = [...state.user];
    var Arrayindex;
    newArray.forEach((item, index) => {
      if (item._id === action.payload.id) {
        Arrayindex = index;
        return;
      }
    });
    newArray[Arrayindex].enrolled_course = newArray[
      Arrayindex
    ].enrolled_course.concat(action.payload.enrolled_course);
    return {
      ...state,
      user: newArray,
    };
  }
  if (action.type === "fail") {
    return { ...state };
  }
  if (action.type === "update-user") {
    return { ...state, user: action.payload };
  }
  if (action.type === "update-courses") {
    return { ...state, course: action.payload };
  }
};

function AssignCourse() {
  const initialState = {
    reload_state: false,
    user: [], // for the user to be assigned the course
    course: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState); // use reducer declaration
  useEffect(() => {
    getAllUser().then((data) => {
      console.log(data);
      if (data.status) {
        //didnot found any
      } else {
        dispatch({ type: "update-user", payload: data });
      }
    });
    getCourses()
      .then((data) => {
        if (data.status) {
          //didnot found any
        } else {
          console.log(data);
          dispatch({ type: "update-courses", payload: data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const assignCourseForm = () => {
    return (
      <div className="h-[70vh] w-11/12 grid place-items-center">
        <p className="text-3xl  font-sarif font-semibold">
          Assign Course Section
        </p>
        <div className="bg-white w-4/6 h-[500px] rounded-xl ">
          <p className="p-2 bg-green-600 rounded-t-lg text-xl font-semibold text-center">
            {" "}
            List of users{" "}
          </p>
          <div className="h-[430px] overflow-y-scroll ">
            {state.user.length > 0 ? (
              state.user.map((user) => (
                <AssignUserList
                  state={user}
                  id={user._id}
                  courses={state.course}
                  dispatch={dispatch}
                />
              ))
            ) : (
              <div className="grid h-[10vh] place-items-center">
                <Spinner fadeIn="none" name="ball-grid-pulse" color="#06202A" />
              </div>
            )}
          </div>
          <div className="bg-[#F9F5F2]" />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />

      <Toaster />
      {assignCourseForm()}
    </div>
  );
}

export default AssignCourse;
