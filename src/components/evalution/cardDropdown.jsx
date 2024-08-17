"use client";
import React, { useState } from "react";
import CommanCard from "./commanCard";
import FeedbackCard from "./feedbackCard";
import CircularProgress from "./circularProgress";
import { ArrowDown } from "lucide-react";

function CardDropdown({dataItem,criteria}) {
  const [open, setOpen] = useState(false);
  const Alphabet=['A','B','C','D','E']
  const criteriaType=Alphabet[criteria]
  const scoreColor=["#EB751F","#F9C94E","#3CC28A","#3CC28A"]

  const score=Math.ceil((dataItem?.score)/5)-1

  return (
    <CommanCard>
      <div className="" >
        <div className="flex  justify-between items-center p-2 cursor-pointer"  onClick={() => setOpen(!open)}>
          <CircularProgress
            value={dataItem?.score}
            classes={"w-20 h-20 text-xl"}
            pathColor={scoreColor[score]}
          />

          <div>
            <h6 className="text-[#98A1BB] font-bold text-xs">Criteria {criteriaType}:</h6>
            <h1 className="text-[#3D404B] font-bold text-xl">
              {dataItem?.heading || "Understanding Knowledge Questions"}
            </h1>
          </div>
          <ArrowDown />
        </div>
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden  ${
            open ? "opacity-100 max-h-[400px] pt-5" : "opacity-0 max-h-0"
          }`}
        >
          <div className="border-t-2 border-[#D6DFE4] pt-5">
            <span className="text-[#5B6170] font-semibold text-sm">
              {dataItem?.shortSummary}

            The essay identifies and focuses on the knowledge question regarding
            the resolvability of disputes over knowledge claims within
            disciplines.
            </span>
          </div>
         
          
          <FeedbackCard type="good" textData={dataItem?.strength} />
          <FeedbackCard type="average" textData={dataItem?.improvement}/>
          <FeedbackCard type="bad" textData={dataItem?.bad}/>
        </div>
      </div>
    </CommanCard>
  );
}

export default CardDropdown;
