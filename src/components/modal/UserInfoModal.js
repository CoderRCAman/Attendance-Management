import Modal from "react-modal";
import React, { useState } from "react";
import { getCourses } from "../../admin/helper/AdminHelper";

function UserInfoModal({ state, setOpenModal }) {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setOpenModal(false);
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center ">
          <p className="text-xl font-bold text-[#06202A]">{state.name}</p>
          <p className="text-lg font-semibold text-[#06202A]">
            Email:<span> {state.email} </span>
          </p>
          <p className="text-lg font-semibold text-[#06202A]">
            Courses:
            <div className="max-h-[300px] overflow-y-scroll bg-purple-50">
              {state.enrolled_course.length > 0 &&
                state.enrolled_course.map((course, index) => (
                  <div
                    key={course._id}
                    className="flex flex-col bg-purple-200   items-center p-2 mb-2"
                  >
                    <p className="text-green-800 font-bold text-xl">
                      # {index + 1}
                    </p>
                    <div className="flex">
                      {" "}
                      <p className="bg-purple-200 text-blue-500">
                        Course Name:
                      </p>
                      <span className="text-gray-500">
                        &nbsp;{course.course_name}
                      </span>
                    </div>
                    <div className="flex">
                      {" "}
                      <p className="bg-purple-200 text-blue-500">
                        Course Duration:
                      </p>
                      <span className="text-gray-500">
                        &nbsp;{course.course_duration} lectures
                      </span>
                    </div>
                    <div className="flex">
                      {" "}
                      <p className="bg-purple-200 text-blue-500">
                        Lectures Made:
                      </p>
                      <span className="text-gray-500">
                        &nbsp;{course.dates.length} lectures
                      </span>
                    </div>
                    <div className="flex">
                      {" "}
                      <p className="bg-purple-200 text-blue-500">Attended:</p>
                      {state.enrolled_course_attendance.map((item) => {
                        if (item.course_name === course.course_name)
                          return (
                            <span className="text-gray-500">
                              &nbsp;{item.present_days.length} lectures
                            </span>
                          );
                      })}
                    </div>
                    <div className="flex ">
                      <p className="bg-purple-200 text-blue-500">Percentage:</p>
                      {state.enrolled_course_attendance.map((item) => {
                        if (item.course_name === course.course_name)
                          return (
                            <span className="text-gray-500">
                              &nbsp;
                              {Math.round(
                                ((item.present_days.length /
                                  (course.dates.length === 0
                                    ? 1
                                    : course.dates.length)) *
                                  100 +
                                  Number.EPSILON) *
                                  100
                              ) / 100}{" "}
                              % lectures
                            </span>
                          );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </p>
        </div>
      </Modal>
    </div>
  );
}

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "40%",
    left: "50%",
    borderRadius: "10px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    position: "absolute",
    zIndex: 20,
  },
};

export default UserInfoModal;
