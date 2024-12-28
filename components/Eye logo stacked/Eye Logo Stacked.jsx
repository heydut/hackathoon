"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./eye logo stacked.css";

export default function Eye_Logo_Stacked({ white }) {
  const moveAreaRef = useRef(null);

  const src = white
    ? "/Hackathoon 1 (fafafa).svg" // White Logo
    : "/Hackathoon 1 (09090b).svg"; // Default Logo (Dark)

  // Handle mouse movement to rotate eyes
  const handleMouseMove = useCallback((event) => {
    const moveArea = moveAreaRef.current;
    const eyes = moveArea.querySelectorAll(".stacked-eye, .dark-stacked-eye");

    eyes.forEach((eye) => {
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      eye.style.transform = `rotate(${angle}deg)`;
    });
  }, []);

  useEffect(() => {
    const moveArea = moveAreaRef.current;
    moveArea.addEventListener("mousemove", handleMouseMove);

    return () => {
      moveArea.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <main
      className="flex items-center justify-center h-full w-full relative"
      ref={moveAreaRef}
    >
      <div className="relative -bottom-10 md:-bottom-16 -right-6 md:-right-10 z-10">
        <div className={white ? "stacked-eye" : "dark-stacked-eye"}></div>
        <div className={white ? "stacked-eye" : "dark-stacked-eye"}></div>
      </div>
      <Image
        src={src}
        alt="Hackathoon logo"
        width={600}
        height={200}
        className="absolute object-fit h-36 md:h-60 w-auto"
      />
    </main>
  );
}
