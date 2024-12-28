import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex items-center justify-center h-screen margin">
        <Image
          src="/Hackathoon 1 (fafafa).svg"
          alt="Hackathoon logo"
          width={600}
          height={200}
          className="object-fit h-36 md:h-60 w-auto"
        />
      </main>
    </div>
  );
}
