import Link from "next/link";

interface TagProps {
  colour: string;
  text: string;
  link: string;
}

export default function Tag({ colour, text, link }: TagProps) {
  return (
    <Link
      href={link}
      className={`px-2 py-0.5 flex items-center justify-center rounded-md w-auto group transition select-none border ${
        colour === "purple"
          ? "bg-purple-100 border-purple-300"
          : "bg-zinc-800/60 border-zinc-600"
      }`}
    >
      <p
        className={`text-xs font-medium transition ${
          colour === "purple" ? "text-purple-500" : "text-zinc-500"
        }`}
      >
        {text}
      </p>
    </Link>
  );
}
