import Logo from "./UI/Logo";

export default function Footer() {
  return (
    <div className="w-full py-4 border border-t border-zinc-100/5">
      <div className="flex items-center justify-center w-full gap-4 margin-x">
        <div className="transition flex items-center py-2">
          <Logo white={true} size="h-6" stacked={true} />
        </div>
      </div>
    </div>
  );
}
