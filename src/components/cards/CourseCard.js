import { useEffect } from 'react';
export default function CourseCard(
    {
      course
  }
) {
    useEffect(() => {
      console.log(course)
    }, []);
    return (
        <div className='group ml-4 mr-4 md:mr-0  mb-4 py-16 border-2 hover:border-indigo-700 hover:bg-gray-300 transform  cursor-pointer bg-gray-100 w-[250px] h-[250px] rounded-md flex items-center flex-col text-gray-700  md:mt-20 md:ml-20'>
            <p className='font-bold text-lg'>{course.course_name}</p>
            <p className='text-gray-500 font-mono'>
                {course.course_description}
            </p>
            <p className='text-gray-600 font-bold'>
                Duration : {course.course_duration} lectures
            </p>
          
        </div>
    )
}
