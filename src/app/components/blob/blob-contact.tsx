"use client";

import { BlobType } from "@/app/common/types/blob-type";

interface BlobProps {
  blob: BlobType;
  className?: string;
}

export function BlobContact({ blob, className }: BlobProps) {
  return (
    <div key={blob.src} className={className}>
      <div className="relative w-fit !z-20 overflow-hidden hover:scale-110 transition-transform">
        <a href={blob.href ?? "/"} target="_blank">
          <img
            src={blob.src}
            alt="portfolio icon"
            width={300}
            height={300}
            className="cursor-pointer"
          />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full flex gap-3 items-center justify-center">
            <div className="text-right">
              <p className="text-black/60">{blob.text}</p>
              <p className="text-black/60 text-sm max-w-[140px] break-words">
                {blob.bottomText}
              </p>
            </div>
            <img
              src={blob.iconSrc ?? ""}
              alt="icon"
              width={40}
              height={40}
              className={blob.imgClassName ?? "w-[30px] sm:w-[40px]"}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
