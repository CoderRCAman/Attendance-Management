import Card from "../components/cards/Card";
import Header from "../components/navbars/Header";
function Admin() {
  return (
    <div>
      <Header />
      {/* Add Remove User */}
      <div className="mx-10 md:flex flex-wrap items-evenly  ">
        <Card
          title={"Add or Remove User"}
          icon_one={"UserAddIcon"}
          icon_two={"UserRemoveIcon"}
        />
        {/* Add Course */}
        <Card title={"Add Course"} icon_one={"PlusCircleIcon"} />
        {/* Assign Courses to User  */}
        <Card title={"Assign Course to User"} icon_one={"ArchiveIcon"} />
        {/* Mark attendance  */}
        <Card title={"Mark Attendance"} icon_one={"MarkAttendance"} />
      </div>
    </div>
  );
}

export default Admin;
