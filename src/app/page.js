import Container from "@/components/container";
import EvaluateCourse from "@/components/home/evaluateCourse";
import ExploreCourseWork from "@/components/home/exploreCourseWork";
import MyCourseWork from "@/components/home/myCourseWork";
import Sidebar from "@/components/sidebar/sidebar";


export default function Home() {
  return (
    <main className="relative">
      <Sidebar/>
      <Container>
        <EvaluateCourse/>
     
        <MyCourseWork/>
        <ExploreCourseWork/>
        
      </Container>
     
    </main>
  );
}
