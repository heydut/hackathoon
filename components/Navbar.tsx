import Link from "next/link";
import Logo from "./UI/Logo";
import Button from "./UI/Button";

const links = [
  { name: "About us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="fixed z-[9999] top-0 left-0 right-0 w-full py-4 backdrop-blur-2xl border border-b border-zinc-100/5">
      <div className="flex items-center justify-center w-full gap-4">
        <div className="grid transition grid-cols-1 sm:grid-cols-3 w-full margin-x">
          <div className="max-sm:hidden transition flex items-center py-2">
            <Logo white={true} size="h-6" stacked={true} />
          </div>
          <div className="flex items-center justify-center gap-4 py-2 px-6">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <p className="text-white hover:text-purple-500">{link.name}</p>
              </Link>
            ))}
          </div>
          <div className="max-sm:hidden flex items-center justify-end transition">
            <Button
              colour="purple"
              text="Login"
              link="/"
              size="sm"
              style="solid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
