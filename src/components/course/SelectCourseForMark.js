import Select from "react-select";
import { useEffect, useState } from "react";
import { getCourses } from "../../admin/helper/AdminHelper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SelectCourseForMark({
  setSelectedCourse,
  startDate,
  setStartDate,
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      console.log(data);
      if (data.status) {
        //handle error
      } else {
        const optionsArray = [];
        data.forEach((item) => {
          const newObj = {
            value: item,
            label: item.course_name,
          };
          optionsArray.push(newObj);
        });

        setOptions(optionsArray);
      }
    });
  }, []);

  const handleSelectChange = (data) => {
    setSelectedCourse(data.value);
  };

  return (
    <div>
      <div className=" text-gray-700  md:mx-[450px] mr-4 ml-4 md:w-[500px]  ">
        <div>
          <Select
            options={options}
            onChange={(data) => {
              handleSelectChange(data);
            }}
            placeholder="Select Course"
          />
        </div>
        <div className="flex my-3 space-x-2 mx-auto justify-center ">
          <span className="text-white font-bold ">Date</span>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
    </div>
  );
}
