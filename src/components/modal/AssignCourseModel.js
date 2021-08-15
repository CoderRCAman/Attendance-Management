import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { getCourses, assignCourse } from "../../admin/helper/AdminHelper";

function AssignCourseModal({
  dispatch = (f) => f,
  setOpenModal,
  courses,
  state,
}) {
  const [course, setCourses] = useState([]);
  const [ids, setids] = useState([]); //to stores ids for enrolled courses
  useEffect(() => {
    const enrolled_ids = [];
    state.enrolled_course.forEach((course) => {
      enrolled_ids.push(course._id);
    });

    setids(enrolled_ids);
  }, []);
  const onChangeCheckbox = (e, course) => {
    console.log("dss");
    console.log(course);
    if (e.target.checked) setCourses((newarray) => [...newarray, course]);
    else {
      setCourses((course) => [
        ...course,
        course.filter((items) => items.name !== course.name),
      ]);
      console.log(course);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (course.length > 0) {
      const payloadData = {
        enrolled_course: course,
        id: state._id,
      };
      assignCourse(course, state._id)
        .then((data) => {
          if (data.status) {
            //failed
          } else {
            dispatch({ type: "success", payload: payloadData });
            setOpenModal(false);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setOpenModal(false);
    }
  };
  return (
    <div>
      <Modal
        isOpen={true}
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
        <form
          className="flex  flex-col items-center text-gray-400"
          onSubmit={handleSubmit}
        >
          <p>Select courses</p>
          {courses &&
            courses.map((course) => (
              <>
                {!ids.includes(course._id) &&
                  course.course_duration > course.dates.length && (
                    <div key={course._id} class="form-check">
                      <input
                        className="form-check-input"
                        onClick={(e) => onChangeCheckbox(e, course)}
                        type="checkbox"
                        value={course}
                        id="flexCheckDefault"
                      />
                      <label
                        htmlFor="flexCheckDefault"
                        className="form-check-label text-gray-500 font-medium"
                      >
                        {course.course_name}
                      </label>
                    </div>
                  )}
              </>
            ))}
          <button className="bg-green-700 p-2 rounded-xl text-white font-semibold">
            Assign
          </button>
        </form>
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

export default AssignCourseModal;
