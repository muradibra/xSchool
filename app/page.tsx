import { Banner } from "@/components/Banner";
import { getData } from "../lib/api";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Program } from "@/components/Program";
import { Marquee } from "@/components/Marquee";
import { Faq } from "@/components/FAQ";

export default async function Home() {
  const data = await getData();

  if (!data) {
    throw new Error("Failed to load page data");
  }

  return (
    <div className="">
      <Banner
        banner_title={data.banner_title ?? ""}
        banner_image={data.banner_image ?? ""}
      />
      <About
        about_title={data.about_title ?? ""}
        about_description={data.about_description ?? ""}
        about_images={data.about_images ?? []}
      />
      <Founder founders={data.founders ?? []} />
      <Program programs={data.programs ?? []} />
      <Marquee text_slider={data.text_slider ?? ""} />
      <Faq faqs={data.xschool_faq ?? []} />
    </div>
  );
}
