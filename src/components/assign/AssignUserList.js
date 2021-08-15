import ReactTooltip from "react-tooltip";
import { useState } from "react";
import AssignCourseModel from "../modal/AssignCourseModel";
import UserInfoModal from "../modal/UserInfoModal";

function AssignUserList({ state, dispatch, courses }) {
  const [OpenModal, setOpenModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  return (
    <div className="flex justify-between list-group-item  list-group-item-primary mb-2">
      {OpenModal && (
        <AssignCourseModel
          courses={courses}
          setOpenModal={setOpenModal}
          state={state}
          dispatch={dispatch}
        />
      )}
      {openInfoModal && (
        <UserInfoModal state={state} setOpenModal={setOpenInfoModal} />
      )}
      <p>{state.name}</p>

      <div className="flex space-x-4">
        <div>
          <button
            data-tip
            data-for="viewTip"
            onClick={(e) => {
              setOpenInfoModal(true);
            }}
          >
            <svg
              class="w-6 h-6"
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
          <button
            data-tip
            data-for="AssignTip"
            onClick={(e) => {
              setOpenModal(true);
            }}
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ReactTooltip id="Tip" place="left" effect="solid">
            Assign Course
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default AssignUserList;
