import Modal from "react-modal";
import React, { useState } from "react";
import Calendar from "react-calendar";

import "../../user/calendar.css";
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
    top: "20%",
    left: "20%",

    transform: "translate(-10%, -10%)",
  },
};

export default function DescriptiveModal({
  setOpen,
  course,
  totalDates,
  presentDates,
  absentDates,
}) {
  const [value, onChange] = useState(new Date());
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setOpen(false);
  }
  const presentOrAbsent = ({ activeStartDate, date, view }) => {
    const dateSplited = date.toISOString().split("T");
    const checkDate = dateSplited[0];
    //console.log(checkDate)
    return view === "month" && totalDates.has(checkDate) ? (
      presentDates.has(checkDate) ? (
        <p className="bg-green-300 p-2 text-white font-bold">P</p>
      ) : (
        <p className="bg-red-300 p-2 text-white font-bold">A</p>
      )
    ) : null;
  };

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* close btn  */}

        <div className="flex justify-end">
          <button onClick={(e) => setOpen(false)}>
            <svg
              className="w-8 h-8 text-red-400 hover:text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p className="text-3xl font-bold text-gray-600 text-center">
          Consolidated View
        </p>
        <div className="flex md:ml-10 md:mt-9 md:flex-row flex-col">
          <div className="space-y-2 md:mt-9">
            <p>
              <span className="text-gray-400 font-bold text-lg">Course</span> :
              <span className="text-lg ml-4 font-bold font-roboto bg-indigo-300 inline-block p-2 rounded-lg text-white">
                {course.course_name}
              </span>
            </p>
            <p>
              <span className="text-gray-400 font-bold text-lg">
                Course Duration
              </span>{" "}
              :
              <span className="text-lg ml-4 font-bold font-roboto bg-indigo-300 inline-block p-2 rounded-lg text-white">
                {course.course_duration} lecture
              </span>
            </p>
            <p>
              <span className="text-gray-400 font-bold text-lg">
                Conducted Lecture
              </span>{" "}
              :
              <span className="text-lg ml-4 font-bold font-roboto bg-indigo-300 inline-block p-2 rounded-lg text-white">
                {course.dates.length} lecture
              </span>
            </p>
            <p>
              <span className="text-gray-400 font-bold text-lg">
                Attended Lecture
              </span>{" "}
              :
              <span className="text-lg ml-4 font-bold font-roboto bg-indigo-300 inline-block p-2 rounded-lg text-white">
                {presentDates.size} lecture
              </span>
            </p>
            <p>
              <span className="text-gray-400 font-bold text-lg">
                Percentage
              </span>{" "}
              :
              <span className="text-lg ml-4 font-bold font-roboto bg-indigo-300 inline-block p-2 rounded-lg text-white">
                {Math.round(
                  ((presentDates.size /
                    (totalDates.size === 0 ? 1 : totalDates.size)) *
                    100 +
                    Number.EPSILON) *
                    100
                ) / 100}{" "}
                %
              </span>
            </p>
          </div>
          {/* calendar section  */}
          <div className="md:-mt-10 flex items-center">
            <div className=" md:ml-10 mt-5  text-gray-600 md:w-[700px] border-none">
              <Calendar
                className="w-full"
                onChange={onChange}
                value={value}
                tileContent={presentOrAbsent}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
