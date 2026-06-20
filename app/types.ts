export type BannerProps = {
  banner_title: string;
  banner_image: string;
};

export type AboutProps = {
  about_title: string;
  about_description: string;
  about_images: [
    {
      image: string;
    },
  ];
};

export type Founder = {
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
  linkedin_url: string;
  instagram_url: string;
};

export type FounderProps = {
  founders: Founder[];
};

export type Program = {
  title: string;
  description: string;
};

export type ProgramProps = {
  programs: Program[];
};

export type TextSlider = {
  xline1: string;
  xline2: string;
  xline3: string;
};

export type MarqueeProps = {
  text_slider: TextSlider;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FaqProps = {
  faqs: Faq[];
};
