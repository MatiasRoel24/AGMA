"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
export function AnimatedPinDemo() {
  return (
    <div className="h-auto w-auto grid grid-col lg:grid-cols-2 gap-24 items-center justify-center mb-24">
      <PinContainer
        title="Harmony Haven"
        href="linktr.ee/harmonyhavenba"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
           Harmony Haven
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-cyan-200 ">
              Centro de estética en San Miguel del Monte
            </span>
          </div>
          <div className="">
           <img className="flex flex-1 w-full rounded-lg mt-4 " src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Kau Chaink"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
            Kau Chaink
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-cyan-200  ">
              Casa de campo en San Miguel del Monte
            </span>
          </div>
          <div className="">
           <img className="flex flex-1 w-full rounded-lg mt-4 " src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Cerrajería Porteña"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
            Cerrajería Porteña
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-cyan-200 ">
              La mejor cerrajería de <br />buenos aires
            </span>
          </div>
          <div className="">
           <img className="flex flex-1 w-full rounded-lg mt-4 " src="https://plus.unsplash.com/premium_photo-1661382024239-67e7c6d2bc72?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </PinContainer>
      <PinContainer
        title="Ascensores Tecnics"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
            Ascensores Tecnics
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-cyan-200  ">
             Subite <br /> ahora
            </span>
          </div>
          <div className="">
           <img className="flex flex-1 w-full rounded-lg mt-4 " src="https://plus.unsplash.com/premium_photo-1683121908375-9a15c9625a1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
