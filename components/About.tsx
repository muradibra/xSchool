import { AboutProps } from "@/app/types";
import Link from "next/link";
import { AboutSlider } from "./AboutSlider";

export const About = ({
  about_title,
  about_description,
  about_images,
}: AboutProps) => {
  return (
    <section className=" font-hoves">
      <div className="px-5 pt-15 lg:px-15 lg:pt-65">
        <div className="flex justify-between items-end mb-10 lg:mb-20">
          <h2 className="leading-9 text-2xl lg:leading-25 lg:text-[90px]  font-medium whitespace-pre-line font-first-neue">
            {about_title}
          </h2>

          <Link
            href={"/xscholl"}
            className="border-b-2 pb-1 border-black lg:text-2xl font-medium"
          >
            Go to xSchool
          </Link>
        </div>

        <p className="whitespace-pre-line text-xl pb-15 lg:pb-20 lg:text-[30px] leading-7 lg:leading-11 ">
          {about_description}
        </p>
      </div>

      <AboutSlider about_images={about_images} />
    </section>
  );
};
