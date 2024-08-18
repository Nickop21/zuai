"use client";
import React from "react";
import TypeCard from "./typeCard";
import Link from "next/link";

function CourseCard({ coursedata }) {
  //   rgba(255, 255, 255, 0)
  // rgba(233, 216, 244, 0.32)  b-rgba(233, 216, 244, 1)
  //   //
  //   background: linear-gradient(0deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.64)),
  // linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(244, 234, 216, 0.32) 100%);
  // b-rgba(244, 234, 216, 1)

  const colors = [
    "border-[rgba(233,216,244,1)] bg-gradient-to-r from-transparent via-[rgba(233,216,244,0.32)] to-[rgba(255,255,255,0)]",
    "bg-gradient-to-r from-white via-[#D8E3F4]/[32%] to-[#D8E3F4]",
    "border-[rgba(244,234,216,1)] bg-gradient-to-r from-[rgba(255,255,255,0)] to-[rgba(244,234,216,0.32)]",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return (
    <Link
      className={`border-[1px] ${colors[randomIndex]} p-6 rounded-lg shadow-md  md:w-[48%] flex gap-5  cursor-pointer transition-all duration-500 animate-fade-in `}
      href={`evalution/${coursedata?.id}`}
    >
      <div className="h-auto  bg-[#FFFFFF] rounded-[8px] border-1 border-[#EAF0F2]  px-2 hidden lg:flex">
        <img src="/home/paper.svg" alt="" className="w-full h-full " />
      </div>
      <div className="w-[100%]">
        <div className="lg:w-[68%]">
          <h3 className="font-extrabold text-[18px] line-clamp-2 ">
            {coursedata?.title}
          </h3>
          <p className="text-[11px] text-[#7A8196] font-semibold ">
            How does the temperature of a Copper pipe affect the time it takes a
            magnet to fall thought{" "}
          </p>
        </div>

        <div className=" flex gap-2 flex-wrap mt-3">
          <TypeCard icon={"/home/typeCard/human.svg"} text={coursedata?.subject} />
          <TypeCard icon={"/home/typeCard/clock.svg"} text="18 min read" />
          <TypeCard icon={"/home/typeCard/read.svg"} text="2388 words" />
          <TypeCard icon={"/home/typeCard/star.svg"} text="7/7" />
          <TypeCard icon={"/home/typeCard/hand.svg"} text="English" />

        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
