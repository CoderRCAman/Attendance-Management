import Header from "../components/navbars/Header";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addCourse, getCourses } from "../admin/helper/AdminHelper";
import LoadCourses from "../components/course/LoadCourses";

const notifySuccess = () => {
  toast.success("Assigned Course", {
    duration: 2000,
  });
};
const notifyError = () => {
  toast.error("Course already exist", {
    duration: 2000,
  });
};
function AddCourse() {
  const [courses, setcourses] = useState([]);
  const [course_name, setCourseName] = useState("");
  const [course_duration, setCourseDurration] = useState(0);
  const [course_description, setCourseDescription] = useState("");

  useEffect(() => {
    getCourses().then((data) => {
      if (data.status) {
        //error
      } else {
        setcourses(data);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    var courseInfo = {
      course_name: course_name,
      course_duration: course_duration,
      course_description: course_description,
    };
    //console.log(courseInfo);
    addCourse(courseInfo).then((data) => {
      console.log(data);
      if (data.status && data.status !== 200) {
        notifyError();
      } else {
        notifySuccess();
        console.log(data);
        setCourseName("");
        setCourseDescription("");
        setCourseDurration(0);
        setcourses([...courses, data]);
      }
    });
  };
  const addCourseForm = () => {
    return (
      <div className="h-[60vh] grid place-items-center">
        <Toaster />
        <div>
          <p className="text-3xl text-center font-sarif font-semibold">
            Add Course Section
          </p>
          <div className="flex mt-3 ">
            <div className="bg-white w-[270px] h-[350px] rounded-xl mr-5 p-4">
              <form
                className="p-2 space-y-2 flex flex-col"
                onSubmit={handleSubmit}
              >
                <p className="font-roboto text-gray-500 text-xl">
                  {" "}
                  Course Name{" "}
                </p>
                <input
                  value={course_name}
                  onChange={(e) => {
                    setCourseName(e.target.value);
                  }}
                  type="text"
                  className="bg-gray-300 outline-none text-black h-8  p-3 rounded-2xl"
                  placeholder="Course Name"
                />
                <p className="font-roboto text-gray-500 text-xl">
                  {" "}
                  Course Duration{" "}
                </p>
                <input
                  value={course_duration}
                  onChange={(e) => {
                    setCourseDurration(e.target.value);
                  }}
                  type="Number"
                  min="1"
                  className="bg-gray-300 outline-none text-black h-8 p-3 rounded-2xl"
                  placeholder="Duration"
                />
                <p className="font-roboto text-gray-500 text-xl">
                  {" "}
                  Course Description{" "}
                </p>
                <textarea
                  value={course_description}
                  onChange={(e) => {
                    setCourseDescription(e.target.value);
                  }}
                  row="3"
                  className="bg-gray-300 outline-none text-black  p-3 rounded-lg"
                ></textarea>
                <button className="ml-5 bg-[#06202A] p-2 rounded-3xl font-semibold">
                  Add Course
                </button>
              </form>
            </div>
            <LoadCourses courses={courses} setcourses={setcourses} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      {addCourseForm()}
    </div>
  );
}

export default AddCourse;
