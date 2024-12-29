import Image from "next/image";

interface LogoProps {
  white: boolean;
  stacked: boolean;
  size: string;
}

export default function Logo({ white, stacked, size }: LogoProps) {
  const src = stacked
    ? white
      ? "/Hackathoon 1 (fafafa).svg" // Stacked & White Logo
      : "/Hackathoon 1 (09090b).svg" // Stacked & Default Logo
    : white
    ? "/Hackathoon 2 (fafafa).svg" // Horizontal & White Logo
    : "/Hackathoon 2 (09090b).svg"; // Horizontal & Default Logo

  return (
    <main>
      <Image
        src={src}
        alt="Hackathoon logo"
        width={400}
        height={200}
        className={`object-fit w-auto ${size}`}
      />
    </main>
  );
}
