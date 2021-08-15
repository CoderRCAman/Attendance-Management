import Modal from "react-modal";
import React, { useState } from "react";

function CourseInfoModal({ state, setOpenModal }) {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
    setOpenModal(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center">
          <p className="text-xl font-bold text-[#06202A]">
            {state.course_name}
          </p>
          <p className="text-lg font-semibold text-[#06202A]">
            Duration:<span> {state.course_duration} lecture</span>
          </p>
          <p className="text-lg font-semibold text-[#06202A]">
            Lectures:<span> {state.dates.length} lecture</span>
          </p>
          {state.course_duration <= state.dates.length && (
            <p className="text-xl font-bold text-red-600">Course Expired</p>
          )}
          <p className="text-md font-semibold text-gray-500">
            {state.course_description}
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
    top: "30%",
    left: "50%",
    borderRadius: "10px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    position: "absolute",
  },
};

export default CourseInfoModal;
