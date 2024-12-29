import Link from "next/link";

interface ButtonProps {
  colour: string;
  text: string;
  link: string;
  size: string;
  style: string;
  target?: string;
}

export default function Button({
  colour,
  text,
  link,
  size,
  style,
  target,
}: ButtonProps) {
  return (
    <Link
      href={link}
      target={target}
      className={`overflow-hidden rounded relative inline-flex group items-center justify-center cursor-pointer select-none
         ${
           size === "sm"
             ? "px-3 py-2 text-xs"
             : size === "lg"
             ? "px-8 py-2.5 text-base"
             : "px-6 py-2 text-sm"
         }
            ${
              style === "outline"
                ? "bg-transparent hover:bg-zinc-100/70 border border-zinc-900/15 text-zinc-500/80 my-transition"
                : style === "light"
                ? "bg-[#fefefe] text-purple-600"
                : style === "dark"
                ? "bg-purple-100 text-purple-600/70"
                : style === "link"
                ? "bg-transparent text-purple-600 hover:bg-purple-50 my-transition"
                : "bg-purple-600 text-white"
            }
            `}
    >
      {/* Circle transition */}
      <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-20"></span>
      {/* Btn text */}
      <span className="relative font-medium flex items-center justify-center">
        {text}
      </span>
    </Link>
  );
}
