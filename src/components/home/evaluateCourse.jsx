"use client";
import courseWorkStore from "@/store/courseWorkStore";
import { AxeIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import SelectDropdown from "../customSelect";
import Upload from "./upload";

function EvaluateCourse() {
  const [fileData, setFileData] = useState("");
  const [courseWork, setCourseWork] = useState({
    fileName: fileData,
    CourseType: "",
    subject: "",
    title: "",
  });
  const courseTypeOptions = [
    { value: "Physics", label: "Physics" },
    { value: "Maths", label: "Maths" },
    { value: "Computer", label: "Computer" },
    { value: "Javascript", label: "Javascript" },
  ];

  const subjectOptions = [
    { value: "Physics", label: "Physics" },
    { value: "Maths", label: "Maths" },
    { value: "Computer", label: "Computer" },
    { value: "Javascript", label: "Javascript" },
  ];

  const addCourse = courseWorkStore((state) => state.addCourse);

  function uploadeDoc(e) {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
    }
    setFileData(file.name); // Get the file name
    setCourseWork((prevCourseWork) => ({
      ...prevCourseWork,
      fileName: file.name,
    }));
  }
  function resetUpload() {
    setFileData("");
  }

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFileData(droppedFiles[0].name);
    }
  };

  function isCourseWorkBlank(courseWork) {
    return (
      !courseWork.fileName &&
      !courseWork.CourseType &&
      !courseWork.subject &&
      !courseWork.title
    );
  }

  const onOptionChange = (e) => {
    const { name, value } = e.target;
    setCourseWork((prevCourseWork) => ({
      ...prevCourseWork,
      [name]: value,
    }));
  };

  function evaluateScore() {
    if (!isCourseWorkBlank(courseWork)) {
      addCourse(courseWork);
      setTimeout(() => {
        setCourseWork({
          fileName: "",
          CourseType: "",
          subject: "",
          title: "",
        });
        resetUpload();
      }, 1000);
    }
  }

  return (
    <div className="pt-36 flex gap-4">
      {/*uplodepart */}
      <div>
        <h1 className="font-bold text-3xl text-[#1E2026]">
          Hey IB Folks ! Unsure about the quality of your answers?{" "}
          <span className="text-[#6947BF]">We get you.</span>{" "}
        </h1>
        <div className="rounded-sm border-2 border-[#D6DFE4] p-4 bg-[#FCFBFDB8] mt-6">
          {/* uplode */}

          <Upload
            fileData={fileData}
            uploadeDoc={uploadeDoc}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            isDragging={isDragging}
            resetUpload={resetUpload}
          />

          {/* select dropdown */}
          <div className="w-1/2">
            <h5 className="my-4 text-xs  text-[#7A8196] ">
              Select your course & subjects*
            </h5>
            <SelectDropdown
              name="CourseType"
              value={courseWork.CourseType}
              options={courseTypeOptions}
              onChange={onOptionChange}
              placeholder="Coursework Type"
            />
            <SelectDropdown
              name="subject"
              value={courseWork.subject}
              options={subjectOptions}
              onChange={onOptionChange}
              placeholder="Subject"
            />
          </div>

          {/* title */}
          <div className="w-1/2">
            <h5 className="my-4 text-xs  text-[#7A8196] ">
              Enter your essay title*(Required)
            </h5>
            <input
              className="p-2 rounded-md border-2 border-orange-500 w-full"
              name="title"
              value={courseWork.title}
              placeholder="how nation works..."
              onChange={(e) => onOptionChange(e)}
            ></input>
          </div>

          {/* evaluate score  */}
          <div
            className="rounded-md p-2 mt-5 bg-[#ADB8C9] text-[#FFFFFF] w-72  flex gap-2 cursor-pointer"
            onClick={() => evaluateScore()}
          >
            <span>
              <AxeIcon />
            </span>
            Evaluate your score
          </div>
        </div>
      </div>

      {/* left img part */}

      <div className="w-[345px] flex items-end relative ">
        <div className="rounded-sm mt-6 w-full z-20 ">
          <img src="/home/evaluate.svg" alt="evaluate" />
        </div>
        <img
          src="/home/astronaut.svg"
          alt=""
          className="absolute top-5 translate-x-[10%]"
        />
      </div>
    </div>
  );
}

export default EvaluateCourse;
