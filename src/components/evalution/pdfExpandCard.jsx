import React, { useState } from "react";
import CommanCard from "./commanCard";

function PdfExpandCard() {
  const [open, setOpen] = useState(false);
  return (
    <CommanCard>
      <div className="">
        <div className="p-2 flex items-center justify-between">
          <span className="rounded-sm bg-[#98A1BB1F] font-bold text-sm text-[#5B6170] py-1 px-3 ">
            file.pdf
          </span>
          <div>
            {!open ? (
              <>
                <span
                  className="text-[#6947BF] text-base font-extrabold cursor-pointer transition-all duration-700 ease-in-out"
                  onClick={() =>setOpen(!open)}
                >
                  Expand & view your file{" "}
                </span>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 ">
                  <div className="flex items-center gap-2 text-[#5B6170] font-bold text-sm">
                    <img
                      src="/home/zoomout.svg"
                      alt="zoomout"
                      className="cursor-pointer"
                    />
                    <span>60%</span>
                    <img
                      src="/home/zoomin.svg"
                      alt="zoomin"
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="bg-[#FCFBFD] rounded-2xl p-1 cursor-pointer">
                    <img
                      src="/home/fullscreen.svg"
                      alt=""
                      className="text-[#5B6170]"
                    />
                  </div>

                  <button
                    className="bg-[#FCFBFD] rounded-2xl px-4 py-1 flex items-center gap-2 text-[#5B6170] font-bold text-xs cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <img src="/home/expand.svg" alt="expand" />
                    <span>Expand</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden  ${
            open ? "opacity-100 max-h-[500px] pt-5" : "opacity-0 max-h-0"
          }`}
        >
          <div className="p-2 pt-5 ">
            <div className="shadow-custom rounded-[6px] px-4 py-9">

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam incidunt ut accusantium cumque tenetur asperiores aperiam eius consectetur voluptate cum, et consequuntur nulla nemo voluptas corrupti laborum tempora obcaecati natus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolor possimus accusantium. Magni ab blanditiis, eum labore sed nulla sint ut voluptatum iure maiores sapiente ipsa in dolores quasi natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa officiis modi omnis, tempore asperiores fuga maiores quas quam repellat nihil explicabo. Quo deserunt dicta officia quaerat neque perferendis atque.
            </div>
          </div>
        </div>
      </div>
    </CommanCard>
  );
}

export default PdfExpandCard;
