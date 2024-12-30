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

export default function Home_Hero() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden">
      <div className="margin-x relative">
        <div className="absolute z-0 -top-[300px] md:-top-[600px] -right-[10%] aspect-square w-[500px] md:w-[1000px] rounded-full blur-3xl bg-cyan-400 opacity-15" />
        <div className="absolute z-0 -top-[300px] md:-top-[600px] -left-[10%] aspect-square w-[500px] md:w-[1000px] rounded-full blur-3xl bg-purple-600 opacity-15" />
      </div>
      <div className="absolute inset-0 h-full w-full">
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
      <div className="relative z-10 w-full backdrop-blur-3xl margin-x ">
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
          <p className="text-lg md:text-xl text-center md:w-2/3">
            Ready for a hackathon that's as fun as it is challenging?{" "}
            <span className="font-medium text-white">
              Sign up now to join the action when we launch our next event.
            </span>{" "}
            Be the first to know, and get ready to level up your skills with a
            community of like-minded coders!
          </p>
          <div>
            <div className="flex items-center gap-4 -mt-8">
              <input className="h-9 w-full sm:w-64 bg-zinc-800/30 border border-zinc-600/50 rounded-md px-4"></input>
              <Button
                colour="purple"
                text="Subscribe"
                link="/"
                size=""
                style="solid"
              />
            </div>
            <p className="text-sm opacity-80 mt-2 text-center">
              Or{" "}
              <Link href="/" className="border-b border-zinc-700 font-bold">
                click here
              </Link>{" "}
              and check our upcoming events.
            </p>
          </div>
        </div>
        {/* </BackgroundBeamsWithCollision> */}
      </div>

      <div className="absolute z-20 bottom-0 right-0 left-0 mx-auto">
        <Image
          src="/Space images/Hero Shape.svg"
          alt="Hero Shape"
          draggable={false}
          width={1920}
          height={1080}
          className="object-cover w-full h-auto select-none"
        />
      </div>
    </div>
  );
}
