import ReactTooltip from "react-tooltip";
import { useState } from "react";
//import AssignCourseModel from "../Modal/AssignCourseModel";
import { deleteCourse } from "../../admin/helper/AdminHelper";
import CourseInfoModal from "../modal/CourseInfoModal";

function LoadCourseItem({ state, dispatch, courses, setIsDeleted }) {
  const [openModal, setOpenModal] = useState(false);
  const deleteCourseHandler = () => {
    const id = state._id;
    deleteCourse(id).then((data) => {
      console.log(data);
      if (data.status) {
        //error
      } else {
        //success
        setIsDeleted({
          status: true,
          item: state,
        });
      }
    });
  };
  return (
    <div className="flex justify-between list-group-item  list-group-item-primary mb-2 ">
      {openModal && (
        <CourseInfoModal state={state} setOpenModal={setOpenModal} />
      )}
      <p>{state.course_name}</p>

      <div className="flex space-x-4">
        <div>
          <button
            data-tip
            data-for="viewTip"
            onClick={(e) => setOpenModal(true)}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ReactTooltip id="viewTip" place="left" effect="solid">
            View
          </ReactTooltip>
        </div>
        <div>
          <button data-tip data-for="EditTip" onClick={deleteCourseHandler}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ReactTooltip id="EditTip" place="left" effect="solid">
            Delete
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default LoadCourseItem;
