"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[60rem] w-full flex items-center justify-center bg-black">
      <PinContainer
        title="Projecto 1"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Projecto 1
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Es una tienda de hamburguesas
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
             <img  className="w-full h-full" src="https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
      </PinContainer>
      <PinContainer
        title="Proyecto 2"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Proyecto 2
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Es una tienda de bebidas
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
             <img  className="w-full h-full" src="https://plus.unsplash.com/premium_photo-1682129387960-5535d195f1d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
      </PinContainer>
      <PinContainer
        title="Proyecto 3"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Proyecto 3
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Es una tienda de tecnologia
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 " />
             <img  className="w-full h-full" src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
      </PinContainer>
      
    </div>
  );
}
