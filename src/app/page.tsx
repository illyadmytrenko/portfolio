import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const links = [
    {},
    {
      src: "portfolio.svg",
      alt: "portfolio icon",
      href: "/portfolio",
    },
    {
      src: "about.svg",
      alt: "about icon",
      href: "/about",
    },
    {},
    {},
    {
      src: "contact.svg",
      alt: "contact icon",
      href: "/contact",
    },
  ];
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex flex-col flex-[0_1_50%] gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-8">
            <h3 className="text-lg sm:text-2xl">Hi, I&apos;m</h3>
            <h1 className="text-3xl sm:text-5xl">Illya Dmytrenko</h1>
            <h1 className="text-3xl sm:text-5xl">Frontend developer</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-10 sm:items-center">
            <div className="flex gap-5 md:gap-10 items-center">
              <span className="text-lg sm:text-2xl whitespace-nowrap">
                Located in
              </span>
              <Image
                src="location.svg"
                alt="location icon"
                width={48}
                height={48}
              ></Image>
            </div>
            <span className="text-xl sm:text-3xl">Brovary, Ukraine</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {links.map((link, index) => {
            if (index === 0 || index === 3 || index === 4)
              return <div key={index}></div>;
            return (
              <Link
                key={index}
                href={link.href ?? ""}
                className="hover:scale-110 transition-transform"
              >
                <Image
                  src={link.src ?? ""}
                  alt={link.alt ?? ""}
                  width={160}
                  height={160}
                  className="col-span-1 row-span-1"
                ></Image>
              </Link>
            );
          })}
        </div>
      </div>
      <p className="text-xl sm:text-3xl">
        Here you can find my works and some more info about me.
      </p>
    </div>
  );
}
