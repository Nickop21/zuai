"use client";
import React from "react";
import TypeCard from "./typeCard";
import Link from "next/link";
import courseWorkStore from "@/store/courseWorkStore";
// import { toast, useToast } from "../ui/use-toast";
import {reducer, toast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";


function CourseCard({ coursedata }) {
  // const toast  = useToast()
  
  const colors = [
    "border-[rgba(233,216,244,1)] bg-gradient-to-r from-transparent via-[rgba(233,216,244,0.32)] to-[rgba(255,255,255,0)]",
    "bg-gradient-to-r from-white via-[#D8E3F4]/[32%] to-[#D8E3F4]",
    "border-[rgba(244,234,216,1)] bg-gradient-to-r from-[rgba(255,255,255,0)] to-[rgba(244,234,216,0.32)]",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  const filterPdf=courseWorkStore((state)=>state.filterPdf)
  const coursedata1 = courseWorkStore((state) => state.courseData).filter((item)=>item.id==coursedata.id);

 
  
  function ToastWithAction() {
    const DeletePdf=()=>{
      filterPdf(coursedata1?.id)
      toast({
        variant: "destructive",
        title: "Deleted Sucessfully ",
      })
    }
    toast({
      title: "Uh oh! Think again",
      description: "Are you sure you want to delete "+coursedata?.fileName,
      action: (
        <button onClick={DeletePdf} className="bg-red-500 rounded-sm p-4 font-extrabold text-white ">
          Yes
        </button>
      ),
    })
  }
  
  
  return (
    <div
      className={` md:w-[48%] flex gap-5 p-6 rounded-lg border-[1px] ${colors[randomIndex]}  shadow-md transition-all duration-500 animate-fade-in `}
      
    > 
      <div className="h-auto px-2 hidden lg:flex bg-[#FFFFFF] rounded-[8px] border-2 border-[#EAF0F2] ">
        <img src="/home/paper.svg" alt="" className="w-full h-full " />
      </div>
      <div className="w-[100%] relative">
      <img src="/home/dustbin.png" className="absolute w-8 -right-5 -top-3 z-10 text-2xl hover:animate-bounce   cursor-pointer" onClick={() => ToastWithAction()}/>
        <div className="lg:w-[68%] cursor-pointer " >
        <Link href={`evalution/${coursedata?.id}`}>
        
          <h3 className="font-extrabold text-[18px] line-clamp-2 ">
            {coursedata?.title}
          </h3>
          <p className="text-[11px] text-[#7A8196] font-semibold ">
            How does the temperature of a Copper pipe affect the time it takes a
            magnet to fall thought{" "}
          </p>
        </Link>
        </div>

        <div className=" flex gap-2 flex-wrap mt-3">
          <TypeCard
            icon={"/home/typeCard/human.svg"}
            text={coursedata?.subject}
          />
          <TypeCard icon={"/home/typeCard/clock.svg"} text="18 min read" />
          <TypeCard icon={"/home/typeCard/read.svg"} text="2388 words" />
          <TypeCard icon={"/home/typeCard/star.svg"} text="7/7" />
          <TypeCard icon={"/home/typeCard/hand.svg"} text="English" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
