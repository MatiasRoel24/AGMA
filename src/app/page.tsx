import { MainContent } from "@/demos/MainContent";
import { LampDemo } from "@/demos/LampDemo";
import {Barra} from "@/components/barra";
import { ButtonMoving } from "@/demos/ButtonMoving";
import { SparklesPreview } from "@/demos/SparklesPreview";
import { AnimatedPinDemo } from "@/demos/AntimatedPinDemo";

export default function Home() {
  return (
    <>
      <Barra />
      <SparklesPreview />
      {/* <MainContent />*/ }
      <LampDemo />
      <AnimatedPinDemo />
      

    </>
  );
}