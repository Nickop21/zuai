import Sideicons from "./sideicons";

function Sidebar() {
  return (
    <div className=" w-[68px] p-2 fixed h-full ">
      <div className="bg-[#F8FAFC] flex justify-between  items-center flex-col gap-4 rounded-sm h-full">
        <div className="mt-1 flex flex-col items-center gap-4">
          
          <Sideicons src={"/zuailogo.svg"} alt={"zuai"} style={"h-12 w-12"} link="/"/>
          <Sideicons src={"/sidebaricons/icon1.svg"} alt={"icon1"} style={"h-9 w-9 bg-[#6947BF]"} link="/"/>
          <Sideicons src={"/sidebaricons/icon2.svg"} alt={"icon4"} style={"h-9 w-9"} link="/"/>
          <Sideicons src={"/sidebaricons/icon3.svg"} alt={"icon3"} style={"h-9 w-9"} link="/"/>
          <Sideicons src={"/sidebaricons/icon4.svg"} alt={"icon4"} style={"h-9 w-9"} link="/"/>
        </div>
        
        <Sideicons src={"/sidebaricons/human.svg"} alt={"human"} style={"mb-2 bg-[white]"}/>
        

        
      </div>
    </div>
  );
}

export default Sidebar;
