'use client'
import React, { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import courseWorkStore from "@/store/courseWorkStore";

function MyCourseWork() {
  const [coursedata, setcoursedata] = useState(null)
  
  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data)
  }, [data]);
  
  return (
    <div className="mt-8">
      <h5 className="text-xl  mb-3 text-[#5B6170] font-semibold">
        My Coursework
      </h5>
      <div className="flex flex-wrap gap-6 ">
        {coursedata && coursedata.map((course)=>{
          return <CourseCard coursedata={course} key={course?.fileName} />
        })}
        
        {/* <CourseCard/> */}
      </div>
      <div className="text-center mt-4 text-[#98A1BB] font-bold text-xs cursor-pointer">view all</div>
    </div>
  );
}

export default MyCourseWork;
