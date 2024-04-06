import { MainContent } from "@/demos/MainContent";
import { LampDemo } from "@/demos/LampDemo";
import {Barra} from "@/components/barra";
import { ButtonMoving } from "@/demos/ButtonMoving";
import { AnimatedPinDemo } from "@/demos/AntimatedPinDemo";
import NavBar from "@/components/navbar";
import { Projects } from "@/components/ui/projects";


export default function Home() {
  return (
    <>
      <Barra />
      <NavBar />
      {/* <MainContent />*/ }
      <LampDemo />
      {/*<AnimatedPinDemo />*/}
      <Projects/>
      {/*Falta agregar el animateTooltipPreview */}
     

    </>
  );
}