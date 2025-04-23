"use client";
import Image from "next/image";
import React from "react";
import canvas1 from "../../public/canvas1.png"
import { WobbleCard } from "../components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Instant Access, No Sign-Up Required!
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Unlock the full potential where Ideas Meet Intelligent Ink!
          </p>
        </div>
        <Image
  src={canvas1}
  width={500} 
  height={500} 
  alt="linear demo image"
  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
/>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Sketch your ideas effortlessly—simply press the Magic Button to unlock intelligent insights!
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       Get details information of Image by pressing the Magic Button 
        </p>
      </WobbleCard>
      
    </div>
  );
}
