import Header from "../components/navbars/Header";
import { useState, useReducer, useEffect } from "react";
import "./addremove.css";

import UserList from "../components/user/UserList";
import AddUserModal from "../components/modal/AddUserModal";
import { getAllUser } from "./helper/AdminHelper";
import toast, { Toaster } from "react-hot-toast";
import UserInfoModal from "../components/modal/UserInfoModal";
import EditUserModal from "../components/modal/EditUserModal";
var Spinner = require("react-spinkit");

const addSuccess = () => {
  toast.success("Add user success", {
    duration: 2000,
  });
};
const addFail = () => {
  toast.error("User email already exist", {
    duration: 2000,
  });
};

const editSuccess = () => {
  toast.success("Edit Successful", {
    duration: 2000,
  });
};

const reducer = (state, action) => {
  if (action.type === "success-add") {
    addSuccess();
    return { ...state, reload_state: !state.reload_state };
  }
  if (action.type === "fail-add") {
    addFail();
    return state;
  }
  if (action.type === "info-modal") {
    return { ...state, info_modal: true };
  }
  if (action.type === "set-user") {
    return { ...state, info_user: action.payload };
  }
  if (action.type === "info-modal-not") {
    return { ...state, info_modal: false };
  }
  if (action.type === "edit-modal") {
    return { ...state, edit_modal: true };
  }
  if (action.type === "edit-modal-not") {
    return { ...state, edit_modal: false };
  }
  if (action.type === "edited") {
    const newArray = [...state.user];
    let index;
    newArray.forEach((item, Index) => {
      if (item._id === action.payload._id) {
        index = Index;
        return;
      }
    });
    newArray[index] = action.payload;
    console.log(index);
    editSuccess();
    return { ...state, user: newArray };
  }
  if (action.type === "update-state") {
    return {
      ...state,
      user: action.payload,
    };
  }
};

function AddRemove() {
  const initialState = {
    delete_success: false,
    edit_modal: false,
    info_user: {},
    info_modal: false,
    delete_fail: false,
    reload_state: false,
    user: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  useEffect(() => {
    getAllUser().then((data) => {
      console.log(data);
      if (data.status) {
        //show some error msg
      } else {
        console.log(data);
        dispatch({ type: "update-state", payload: data });
      }
    });
  }, []);
  useEffect(() => {
    getAllUser().then((data) => {
      if (data.status) {
        //show some error msg
      } else {
        dispatch({ type: "update-state", payload: data });
      }
    });
  }, [state.reload_state]);

  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header />
      <Toaster />
      {openInfoModal && (
        <UserInfoModal
          setOpenModal={setOpenInfoModal}
          state={state.info_user}
        />
      )}
      {state.edit_modal && (
        <EditUserModal dispatch={dispatch} state={state.info_user} />
      )}

      {openModal && (
        <AddUserModal setOpenModal={setOpenModal} dispatch={dispatch} />
      )}
      <div className="flex justify-evenly ">
        <div className="w-5/6 flex flex-col items-center">
          {/* <div> to load list of user */}
          <h1 className="text-center text-2xl font-semibold mb-4">
            {" "}
            List of Users{" "}
          </h1>
          <div className=" md:w-4/6 p-2 list-group h-2/5 md:h-[500px] mx-6 overflow-scroll   bg-white  ">
            {state.user.length > 0 ? (
              state.user.map((user) => (
                <UserList
                  state={user}
                  key={user._id}
                  dispatch={dispatch}
                  setOpenModal={setOpenInfoModal}
                />
              ))
            ) : (
              <div className="grid h-96 place-items-center">
                <Spinner
                  className="items-center"
                  fadeIn="none"
                  name="pacman"
                  color="#06202A"
                />
              </div>
            )}
          </div>
        </div>
        <div>
          {/* <div> to load some button */}
          <button
            onClick={(e) => {
              setOpenModal(true);
            }}
            className="btn btn-secondary"
          >
            {" "}
            Add User{" "}
            <svg
              className="w-6 h-6 ml-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRemove;
