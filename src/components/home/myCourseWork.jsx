"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./courseCard";
import courseWorkStore from "@/store/courseWorkStore";
import CourseCardSkeleton from "./courseCardSkeleton";

function MyCourseWork() {
  const [coursedata, setcoursedata] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data);
  }, [data]);
  const visibleCourses = showAll ? coursedata : coursedata?.slice(0, 2);

  return (
    <div className="mt-8 transition-all">
      <h5 className="text-xl  mb-3 text-[#5B6170] font-semibold">
        My Coursework
      </h5>

      <div className={`flex flex-wrap gap-4`}>
        {visibleCourses && visibleCourses?.length>1 ? (
          <>
            {visibleCourses.map((course) => {
              return <CourseCard coursedata={course} key={course?.id} />;
            })}
          </>
        ) : (
          <>
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </>
        )}
      </div>
      <div
        className="text-center mt-4 text-[#98A1BB] font-bold text-xs cursor-pointer hover:text-[#6947BF]"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "view less" : "view all"}
      </div>
    </div>
  );
}

export default MyCourseWork;
