import Image from "next/image";
import Inputcomp from "./_components/Inputcomp";
import TaskList  from "./_components/TaskList";
export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <Inputcomp/>
      
      <TaskList/>
    </div>
  );
}
