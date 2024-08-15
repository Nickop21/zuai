import React from "react";
import TypeCard from "./typeCard";

function CourseCard() {
  return (
    <div class="bg-gradient-to-r from-white via-[#D8E3F4]/[32%] to-[#D8E3F4] p-6 rounded-lg shadow-md w-[42%] flex gap-5 ">
      <div className="w-96 h-40 bg-[#FFFFFF] rounded-[8px] border-1 border-[#EAF0F2]  px-3">
        <img src="/home/paper.svg" alt="" className="w-full h-full " />
      </div>
      <div >
        <div className="w-[70%]">
        <h3 className="font-extrabold text-[18px] line-clamp-2 ">
          How does the temperature of a Copper pipe affect the time it takes a
          magnet to fall thought{" "} How does the temperature of a Copper pipe affect the time it takes a
          magnet to fall thought{" "}
        </h3>
        <p className="text-[11px] text-[#7A8196] font-semibold ">
          How does the temperature of a Copper pipe affect the time it takes a
          magnet to fall thought{" "}
        </p>
        </div>
        
        <div className=" flex gap-2 flex-wrap mt-3">
          <TypeCard icon={"/home/typeCard/human.svg"} text="Physics HL"/>
          <TypeCard icon={"/home/typeCard/clock.svg"} text="Physics HL"/>
          <TypeCard icon={"/home/typeCard/read.svg"} text="Physics HL"/>
          <TypeCard icon={"/home/typeCard/star.svg"} text="Physics HL"/>
         

          

        </div>
      </div>
    </div>
  );
}

export default CourseCard;
