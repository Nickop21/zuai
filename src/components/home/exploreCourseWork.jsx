'use client'
import React, { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import courseWorkStore from "@/store/courseWorkStore";
import CourseCardSkeleton from "./courseCardSkeleton";

function ExploreCourseWork() {
  const [currentActive,setCurrentActive]=useState(0)
  let [coursedata, setcoursedata] = useState(null)
  const options = ["All", "research paper", "Term paper", "Non-Fiction", "Thesis"];
  const filterCourseData=courseWorkStore((state)=>state.filterCourse)
  const selectedCourseWork=courseWorkStore((state)=>state.selectedCourseWork)
  
  
  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data)
  }, [data]);
  if (currentActive!=0) {

    coursedata=coursedata?.filter((filter)=>{
      return  filter.CourseType==selectedCourseWork
    })    
  }


  useEffect(() => {
    filterCourseData(options[currentActive])
  }, [currentActive])
  
  return (
    <div className="mt-8">

      <h5 className="text-xl  mb-3 text-[#5B6170] font-semibold">
        Explore coursework
      </h5>

      <div className="flex items-center mb-4 sm:gap-4 flex-wrap  ">
        {options.map((opt,index) => {
          return (
            <div className={`p-4  font-bold text-xs rounded-xl cursor-pointer  ${currentActive==index ? "bg-[#FFFFFF] transition-colors ease-linear duration-500 text-[#6947BF]" :"text-[#98A1BB]"}`} key={index} onClick={()=>setCurrentActive(index)}>
              {opt}
            </div>
          );
        })}
      </div>
     
      <div className="flex flex-wrap gap-4  transition-opacity duration-500 ease-in-out ">
        {
          coursedata?.length>0?<>
          {coursedata.map((course)=>{
          return(
            <CourseCard coursedata={course} key={course?.id}/>
          )
        })}
          </>:<>
          <CourseCardSkeleton/>
          <CourseCardSkeleton/>
          </>
        }
        
      
      </div>
    </div>
  );
}

export default ExploreCourseWork;
