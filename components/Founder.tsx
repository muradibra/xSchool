import { FounderProps } from "@/app/types";
import Image from "next/image";

export const Founder = ({ founders }: FounderProps) => {
  return (
    <section className="pt-15 lg:pt-65 px-5 lg:px-15 font-hoves">
      <h2 className="uppercase font-first-neue font-medium text-2xl lg:text-[90px] leading-9 lg:leading-25 ">
        Founder
      </h2>
      {founders.map((founder, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[60px] lg:gap-[115px] mt-10 lg:mt-30"
        >
          <div className="relative w-full h-[522px] lg:w-[50%] ">
            <Image
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
              fill
            />

            <div className="absolute bottom-3.25 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-[85%] sm:max-w-[70%] lg:max-w-[65%] rounded-[3.85px] bg-primary-white px-1.5 py-3 text-center text-sm lg:text-normal font-medium text-[#001C21] whitespace-nowrap overflow-hidden text-ellipsis">
              {founder.name} -{" "}
              <span className="text-[#001c21c5]">{founder.position}</span>
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col justify-center">
            <h3 className="font-medium text-xl lg:text-4xl leading-7 lg:leading-11">
              {founder.title}
            </h3>
            <p className="mt-10 lg:mt-5  font-normal text-xl leading-7 lg:leading-8">
              {founder.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
