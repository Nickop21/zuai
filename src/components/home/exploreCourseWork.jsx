'use client'
import React, { useState } from "react";
import CourseCard from "./courseCard";

function ExploreCourseWork() {
  const [currentActive,setCurrentActive]=useState(0)
  const options = ["All", "Physics", "Maths", "Computer", "Javascript"];
  return (
    <div className="mt-8">
      <h5 className="text-xl  mb-3 text-[#5B6170] font-semibold">
        Explore coursework
      </h5>
      <div className="flex items-center gap-3 mb-4 ">
        {options.map((opt,index) => {
          return (
            <div className={`p-4  font-bold text-xs rounded-xl cursor-pointer  ${currentActive==index ? "bg-[#FFFFFF] transition-colors ease-linear duration-500 text-[#6947BF]" :"text-[#98A1BB]"}`} onClick={()=>setCurrentActive(index)}>
              {opt}
            </div>
          );
        })}
      </div>
      {/* background: #6947BF;
       */}
      <div className="flex flex-wrap gap-6 ">
        <CourseCard />
        <CourseCard />
        {/* <CourseCard/> */}
      </div>
    </div>
  );
}

export default ExploreCourseWork;
