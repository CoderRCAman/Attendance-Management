import Modal from "react-modal";
import React, { useState } from "react";
import { addUser } from "../../admin/helper/AdminHelper";
import { isAuthenticated } from "../../Authentication/helper/AuthApiCalls";

function AddUserModal({ setOpenModal = (f) => f, dispatch }) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };
    const id = await isAuthenticated()._id;
    console.log(id);
    addUser(userInfo, id).then((data) => {
      if (data.status) {
        dispatch({ type: "fail-add" });
      } else {
        dispatch({ type: "success-add" });
        setOpenModal(false);
      }
    });
  };

  return (
    <Modal
      isOpen={true}
      onafter={afterOpenModal}
      style={customStyles}
      contentLabel="Enter details of User"
      ariaHideApp={false}
    >
      <button
        className="btn btn-danger float-right"
        onClick={(e) => setOpenModal(false)}
      >
        <svg
          class="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <br />
      <form className="flex  flex-col items-center" onSubmit={handleSubmit}>
        <p className="text-2xl text-blue-800 text-center mb-3  text">
          {" "}
          Enter User Details{" "}
        </p>
        <p className="text-xl text-blue-400 ">Name</p>
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text"
          className="rounded-lg p-3 w-4/5 text-black bg-[#EEEEEE] focus:outline-none"
        />{" "}
        <br />
        <p className="text-xl text-blue-400">Email</p>
        <input
          onChange={(e) => {
            setemail(e.target.value);
          }}
          type="email"
          className="p-3 rounded-lg w-4/5 text-black bg-[#EEEEEE] focus:outline-none"
        />{" "}
        <br />
        <p className="text-xl text-blue-400">Password</p>
        <input
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="password"
          className="p-3 rounded-lg w-4/5 text-black bg-[#EEEEEE] focus:outline-none"
        />{" "}
        <br />
        <button className="btn btn-secondary  mt-2">Submit</button>
      </form>
    </Modal>
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
    top: "50%",
    left: "54%",
    borderRadius: "10px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
  },
};

export default AddUserModal;
