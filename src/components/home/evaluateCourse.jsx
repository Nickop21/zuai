"use client";
import { AxeIcon } from "lucide-react";
import React, { useState } from "react";

function EvaluateCourse() {
  const [fileData, setFileData] = useState("");

  function uploadeDoc(e) {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
    }
    setFileData(file.name); // Get the file name
    console.log(file);
    console.log(fileData);
  }
  function resetUpload(){
    setFileData("")

  }

  
  return (
    <div className="pt-36 flex gap-4">
      {/* //uplodepart */}
      <div>
        <h1 className="font-bold text-3xl text-[#1E2026]">
          Hey IB Folks ! Unsure about the quality of your answers?{" "}
          <span className="text-[#6947BF]">We get you.</span>{" "}
        </h1>
        <div className="rounded-sm border-2 border-[#D6DFE4] p-4 bg-[#FCFBFDB8] mt-6">
          {/* uplode */}

          <div className="rounded-sm border-dashed border-2 border-[#CEC4EB] p-10 w-full h-[200px] bg-[#FCFBFD] flex items-center justify-center flex-col">
            {!fileData!=""? (
              <>
                <img src="/home/uplode.svg" alt="uplode" className="mb-3" />
                <span className="text-sm text-[#7A8196] font-semibold">
                  Drag and drop PDF
                </span>
                <span className="text-xs  text-[#7A8196] ">
                  *Limit 25MB per file
                </span>
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={(e) => uploadeDoc(e)}
                />
                <label
                  for="upload"
                  className="rounded-lg p-2 px-6 mt-5 bg-[#FCFBFD] border-2 border-gray-100 shadow-sm shadow-gray-100 text-[#6947BF] font-bold text-[15px] cursor-pointer hover:bg-[#f8f8f8]"
                >
                  upload your file
                </label>
              </>
            ) : (
              <>
                <div className="relative rounded-lg p-2 bg-[#FCFBFD] border-2 border-gray-100 shadow-sm shadow-gray-100 flex flex-row items-center gap-2">
                  <div className="rounded bg-[#FCFBFD] border-2 border-gray-100 ">
                    <img
                      src="/home/paper.svg"
                      alt="upload"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex gap-2 items-center p-2">
                    <img src="/home/tick.svg" alt="tick" />
                    <span className="text-[11px] font-semibold text-[#7A8196]">
                      {fileData}
                    </span>
                  </div>
                  <div className="w-4 h-4 rounded-full absolute -right-1 -top-1 border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] flex items-center justify-center" onClick={()=>resetUpload()}>
                    <img src="/home/cross.svg" alt="cross" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* select */}
          <div className="w-1/2">
            <h5 className="my-4 text-xs  text-[#7A8196] ">
              Select your course & subjects*
            </h5>
            <select name="" className="rounded-md p-2 mx-1 outline-none text-[#5B6170] font-bold text-xs ">
              <option value="" disabled selected>Coursework Type</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Physics">Physics</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Maths">Maths</option>
              <option className="text-[#5B6170] font-bold text-xs"value="Computer">Computer</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Javascript">Javascript</option>

            </select>

            <select name="" id="" className="rounded-md p-2 mx-1 outline-none text-[#5B6170] font-bold text-xs ">
              <option  value="" disabled selected>subject</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Physics">Physics</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Maths">Maths</option>
              <option className="text-[#5B6170] font-bold text-xs"value="Computer">Computer</option>
              <option className="text-[#5B6170] font-bold text-xs" value="Javascript">Javascript</option>

            </select>
          </div>
          {/*  */}
          <div className="w-1/2">
            <h5 className="my-4 text-xs  text-[#7A8196] ">
              Enter your essay title*(Required)
            </h5>
            <input
              className="p-2 rounded-md border-2 border-orange-500 w-full"
              placeholder="how nation works..."
            ></input>
          </div>

          <div className="rounded-md p-2 mt-5 bg-[#ADB8C9] text-[#FFFFFF] w-72  flex gap-2">
            <span>
              <AxeIcon />
            </span>
            Evaluate your score
          </div>
        </div>
      </div>

      {/* img part */}

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
