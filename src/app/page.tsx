import { LampDemo } from "@/demos/LampDemo";
import {Barra} from "@/components/barra";
import NavBar from "@/components/navbar";
import { Projects } from "@/components/ui/projects";


export default function Home() {
  return (
    <>
      <Barra />
      <NavBar />
      <LampDemo />
      <Projects/>
    </>
  );
}