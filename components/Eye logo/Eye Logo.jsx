"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import "./eye logo.css";

export default function Eye_Logo({ white }) {
  const moveAreaRef = useRef(null);

  const src = white
    ? "/Hackathoon 2 (fafafa).svg" // White Logo
    : "/Hackathoon 2 (09090b).svg"; // Default Logo (Dark)

  // Handle mouse movement to rotate eyes
  const handleMouseMove = useCallback((event) => {
    const moveArea = moveAreaRef.current;
    const eyes = moveArea.querySelectorAll(".eye, .dark-eye");

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
      <div className="relative -bottom-0.5 -right-[107px] md:-right-[214px] z-10">
        <div className={white ? "eye" : "dark-eye"}></div>
        <div className={white ? "eye" : "dark-eye"}></div>
      </div>
      <Image
        src={src}
        alt="Hackathoon logo"
        width={600}
        height={200}
        className="absolute object-fit h-12 md:h-24 w-auto"
      />
    </main>
  );
}
