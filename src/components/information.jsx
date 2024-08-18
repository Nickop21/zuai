import React from "react";
import CommanCard from "./evalution/commanCard";

function Information({classs="absolute bottom-20 md:top-0 right-5"}) {
  function RoundedCard({ src, text }) {
    return (
      <CommanCard>
        <div className="flex items-center gap-2 rounded-2xl">
          <img src={`/home/info/${src}.svg`} alt="src" height={20} width={20} />
          <span className="text-[#5B6170] font-extrabold text-sm">{text}</span>
        </div>
      </CommanCard>
    );
  }
  function Allround({ src }) {
    return (
      <CommanCard classes="w-14 h-14 rounded-full bg-[#FFFFFFA3] mt-4 flex items-center justify-center p-0 cursor-pointer hover:bg-violet-100 hover:animate-pulse">
        <div className="w-9 h-9 bg-[#FFFFFF] rounded-full flex items-center p-2 justify-center shadow-md shadow-[#EAF0F2] ">
          <img src={`/home/info/${src}.svg`} alt="src" height={28} width={28} />
        </div>
      </CommanCard>
    );
  }
  return (
    <div className={` ${classs}`}>
      <div className=" flex flex-col items-center justify-center  ">
        <RoundedCard src="coin" text="120" />
        <RoundedCard src="streak" text="24" />
        <Allround src={"calender"} />
        <Allround src={"pagecard"} />
      </div>
    </div>
  );
}

export default Information;
