import Image from "next/image";
import { BackgroundBeamsWithCollision } from "../Aceternity/background-beams-with-collision";
import Logo from "../UI/Logo";
import Button from "../UI/Button";
import Link from "next/link";
import {
  RiAliensFill,
  RiRocketFill,
  RiPlanetFill,
  RiSparkling2Fill,
  RiHeart3Fill,
} from "react-icons/ri";
import { SparklesCore } from "../Aceternity/sparkles";

export default function Home_Comingsoon() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden h-[100vh] w-[100vw]">
      <div className="absolute z-30 inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="rgba(255, 255, 255)"
        />
      </div>
      <div className="relative z-40 w-full margin-x ">
        {/* <BackgroundBeamsWithCollision> */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-16 pt-40 md:pt-48 pb-32 md:pb-64">
          <div className="flex flex-col items-center justify-center md:gap-2 group">
            <h2 className="mb-1.5 md:mb-3 text-zinc-400">We are the</h2>
            <div className="relative">
              <RiAliensFill className="absolute -top-10 -left-0 text-lime-500 text-2xl rotate-12 group-hover:scale-125 transition" />
              <RiRocketFill className="absolute -top-10 right-2 text-cyan-300 text-2xl rotate-45 group-hover:scale-125 transition" />
              <RiPlanetFill className="absolute top-0 -left-10 text-purple-500 text-2xl group-hover:scale-125 transition" />
              <RiSparkling2Fill className="absolute top-2 -right-10 text-amber-400 text-2xl group-hover:scale-125 transition" />
              <RiHeart3Fill className="absolute -bottom-2 -right-8 text-red-600 text-md rotate-6 max-md:hidden group-hover:scale-125 transition" />

              <Logo white={true} size="h-10 md:h-20" stacked={false} />
            </div>
            <h2 className=" text-zinc-400">you've been waiting for!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
