"use client";

import { BlobType } from "@/app/common/types/blob-type";
import Link from "next/link";
import { useState } from "react";

interface BlobProps {
  blob: BlobType;
}

export function BlobPortfolio({ blob }: BlobProps) {
  const [isWebsiteShowed, setIsWebsiteShowed] = useState(false);
  const handleOnHover = (isHover: boolean) => {
    setIsWebsiteShowed(isHover);
  };

  return (
    <div key={blob.src}>
      <div
        className="relative w-fit !z-20 overflow-hidden hover:scale-110 transition-transform"
        onMouseEnter={() => handleOnHover(true)}
        onMouseLeave={() => handleOnHover(false)}
      >
        <img
          src={blob.src}
          alt="portfolio icon"
          width={300}
          height={300}
          className="cursor-pointer"
        />
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          {blob.text}
        </p>
      </div>
      {isWebsiteShowed && (
        <Link
          href={blob.websiteSrc ?? ""}
          onMouseEnter={() => handleOnHover(true)}
          onMouseLeave={() => handleOnHover(false)}
          target="_blank"
        >
          <img
            src={blob.websiteImgSrc ?? ""}
            alt="portfolio icon"
            width={500}
            height={500}
            className="relative -bottom-5 sm:-top-20 z-10 sm:left-[15%] border-2 border-solid border-green-600 rounded-md"
          />
        </Link>
      )}
    </div>
  );
}
