'use client'
import React, { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import courseWorkStore from "@/store/courseWorkStore";

function ExploreCourseWork() {
  const [currentActive,setCurrentActive]=useState(0)
  const [coursedata, setcoursedata] = useState(null)
  const options = ["All", "research paper", "Term paper", "Non-Fiction", "Thesis"];
  
  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data)
  }, [data]);
  return (
    <div className="mt-8">
      <h5 className="text-xl  mb-3 text-[#5B6170] font-semibold">
        Explore coursework
      </h5>
      <div className="flex items-center gap-3 mb-4 ">
        {options.map((opt,index) => {
          return (
            <div className={`p-4  font-bold text-xs rounded-xl cursor-pointer  ${currentActive==index ? "bg-[#FFFFFF] transition-colors ease-linear duration-500 text-[#6947BF]" :"text-[#98A1BB]"}`} key={index} onClick={()=>setCurrentActive(index)}>
              {opt}
            </div>
          );
        })}
      </div>
      {/* background: #6947BF;
       */}
      <div className="flex flex-wrap gap-6 ">
        {coursedata && coursedata.map((course)=>{
          return(
            <CourseCard coursedata={course} key={course?.id}/>
          )
        })}
       
        {/* <CourseCard/> */}
      </div>
    </div>
  );
}

export default ExploreCourseWork;
