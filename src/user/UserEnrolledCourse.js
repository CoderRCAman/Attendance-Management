import { useState, useEffect } from "react";
import { isAuthenticated } from "../Authentication/helper/AuthApiCalls";
import CourseCard from "../components/cards/CourseCard";
import { getUserById } from "./helper/UserApiCall";
import DescriptiveModal from "../components/modal/DescriptiveModal";
export default function UserEnrolledCourse({
  courses,
  setCourses,
  currentPage,
  postsPerPage,
}) {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const [courseInfo, setCourseInfo] = useState({});
  const [presentDates, setPresent] = useState(new Set());
  const [absentDates, setAbsent] = useState(new Set());
  const [totalDates, setTotal] = useState(new Set());
  const [currentCourses, setCurrentCourses] = useState([]);
  const grabCourses = async () => {
    const newArray = await isAuthenticated().enrolled_course;
    return newArray;
  };
  const openModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    getUserById().then((data) => {
      if (data.status) {
        //handle error
        alert("Something went wrong");
      } else {
        setUser(data);
        setCourses(data.enrolled_course);
      }
    });
  }, []);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentCourse = courses.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentCourses(currentCourse);
  }, [currentPage, courses]);

  function setAttendance(course) {
    const attendanceInfo = user.enrolled_course_attendance.find(
      (element) => element.course_name === course.course_name
    );
    const present = attendanceInfo.present_days;
    const absent = attendanceInfo.absent_days;
    const total = course.dates;
    const presentSet = new Set();
    const absentSet = new Set();
    const totalSet = new Set();
    console.log(total);
    console.log(present);
    console.log(absent);
    present.forEach((item) => {
      let date = new Date(item);
      date.setDate(date.getDate() - 1);
      console.log(date);
      const prevIsoDate = date.toISOString();
      presentSet.add(prevIsoDate.split("T")[0]);
    });
    absent.forEach((item) => {
      let date = new Date(item);
      date.setDate(date.getDate() - 1);
      console.log(date);
      const prevIsoDate = date.toISOString();
      absentSet.add(prevIsoDate.split("T")[0]);
    });
    total.forEach((item) => {
      let date = new Date(item);
      date.setDate(date.getDate() - 1);
      console.log(date);
      const prevIsoDate = date.toISOString();
      totalSet.add(prevIsoDate.split("T")[0]);
    });
    setPresent(presentSet);
    setAbsent(absentSet);
    setTotal(totalSet);
  }
  return (
    <div>
      {open && (
        <DescriptiveModal
          setOpen={setOpen}
          course={courseInfo}
          totalDates={totalDates}
          presentDates={presentDates}
          absentDates={absentDates}
        />
      )}
      <p className="text-white text-center font-raleway text-2xl font-bold">
        Enrolled Courses
      </p>
      <div className="flex items-cente flex-wrap justify-content-center">
        {currentCourses.length > 0 &&
          currentCourses.map((course) => (
            <span
              key={course._id}
              onClick={(e) => {
                setOpen(true);
                setCourseInfo(course);
                setAttendance(course);
              }}
            >
              <CourseCard course={course} totalItem={courses.length} />
            </span>
          ))}
      </div>
    </div>
  );
}
