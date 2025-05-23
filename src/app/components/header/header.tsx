import Link from "next/link";

interface HomeProps {
  pageName: string;
  className?: string;
}

export function Header({ pageName, className }: HomeProps) {
  return (
    <header
      className={`py-8 md:py-12 flex justify-between gap-4 items-center flex-wrap ${className}`}
    >
      <h5 className="text-4xl">{pageName}</h5>
      <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-12 md:justify-end text-xl text-gray-500">
        <Link href={"/"} className="hover:text-black transition-colors">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-black transition-colors">
          About Me
        </Link>
        <Link
          href={"/portfolio"}
          className="hover:text-black transition-colors"
        >
          Portfolio
        </Link>
        <Link href={"/contact"} className="hover:text-black transition-colors">
          Contact
        </Link>
      </div>
    </header>
  );
}
