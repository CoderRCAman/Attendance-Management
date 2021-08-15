import Header from "../components/navbars/Header";
import Pagination from "../components/pagination/Pagination";
import UserEnrolledCourse from "./UserEnrolledCourse";
import { useState, useEffect } from "react";
function User() {
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const paginate = (toPage) => {
    console.log(toPage);
    if (toPage > 0 && toPage <= Math.ceil(courses.length / 3)) setPage(toPage);
  };
  return (
    <div>
      <Header />
      <UserEnrolledCourse
        courses={courses}
        setCourses={setCourses}
        currentPage={page}
        postsPerPage={3}
      />
      {courses.length > 0 && (
        <Pagination
          postsPerPage={3}
          setPage={setPage}
          page={page}
          paginate={paginate}
          totalPosts={courses.length}
        />
      )}
    </div>
  );
}

export default User;
