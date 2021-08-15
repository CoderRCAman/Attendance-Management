import { useEffect, useState } from "react";
import { getCourses } from "../../admin/helper/AdminHelper";
import LoadCourseItem from "./LoadCourseItem";
import toast, { Toaster } from "react-hot-toast";
const deleteSuccess = () => {
  toast.success("Deleted Successfully", {
    duration: 2000,
  });
};

function LoadCourses({ courses, setcourses }) {
  const [isDeleted, setIsDeleted] = useState({
    status: false,
    item: {},
  });

  useEffect(() => {
    if (isDeleted.status) {
      deleteSuccess();
      setcourses((courses) =>
        courses.filter((course) => course._id !== isDeleted.item._id)
      );
    }
  }, [isDeleted.status, isDeleted.item]);

  return (
    <div className=" w-96  h-[350px] bg-white rounded-t-xl">
      <Toaster />
      <p className="text-gray-100 text-center font-poppin text-xl  bg-indigo-800 rounded-t-lg">
        Courses available
      </p>
      <div className="overflow-scroll p-2 h-[320px]  ">
        {courses.length > 0 &&
          courses.map((course) => (
            <LoadCourseItem
              key={course._id}
              state={course}
              setIsDeleted={setIsDeleted}
            />
          ))}
      </div>
    </div>
  );
}

export default LoadCourses;
