import { BannerProps } from "@/app/types";
import Image from "next/image";

export const Banner = ({ banner_title, banner_image }: BannerProps) => {
  const lines = banner_title.split(/\r?\n/).filter(Boolean);

  return (
    <section className="font-hoves relative z-1 isolate min-h-screen overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0">
        <Image
          src={banner_image}
          alt="Hero visual"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/5 via-black/10 to-black/5" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative">
        <div className="relative flex flex-col">
          {lines.map((line, index) => (
            <h1
              key={index}
              className={`text-4xl sm:text-6xl md:text-8xl lg:text-[116px] text-primary-white uppercase leading-tight lg:leading-30.5`}
              style={{ paddingLeft: `${index * 4}rem` }}
            >
              {line}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
};
