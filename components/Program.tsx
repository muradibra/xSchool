import { ProgramProps } from "@/app/types";

export const Program = ({ programs }: ProgramProps) => {
  return (
    <section className="pt-15 px-5 lg:px-15 lg:pt-65 font-hoves">
      <h2 className="uppercase font-first-neue font-medium text-2xl lg:text-[90px] leading-9 lg:leading-25 ">
        Program
      </h2>
      {programs.map((program, index) => {
        const html = program.description
          .replace(/<p>&nbsp;<\/p>/g, "")
          .replace(/<p>\s*<\/p>/g, "")
          .replace(/&nbsp;/g, " ");

        return (
          <div key={index} className="mt-10 lg:mt-30">
            <div className="">
              <h3 className="font-medium text-xl lg:text-4xl leading-7 lg:leading-11 ">
                {program.title}
              </h3>
              <div
                className="
                mt-10 lg:mt-20
                text-xl
                lg:text-3xl
                leading-8
                lg:leading-11

                [&_p]:mb-6
                [&_strong]:font-semibold

                [&_ul]:list-disc
                [&_ul]:pl-6
                [&_ul]:space-y-3"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};
