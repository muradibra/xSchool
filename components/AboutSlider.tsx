"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";

export const AboutSlider = ({
  about_images,
}: {
  about_images: [{ image: string }];
}) => {
  const middleIndex = Math.floor(about_images.length / 2);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      startIndex: middleIndex,
      align: "center",
      loop: true,
      dragFree: false,
      containScroll: false,
    },
    [WheelGesturesPlugin({ forceWheelAxis: "x" })],
  );

  return (
    <div className="relative w-full">
      <div
        ref={emblaRef}
        className="overflow-hidden w-full"
        style={{ padding: "0 12%" }}
      >
        <div className="flex">
          {about_images.map((img, i) => (
            <div
              key={i}
              className="relative flex-none w-full md:w-[50%] aspect-4/3 mx-1.5 md:mx-2.5"
              style={{ touchAction: "pan-y pinch-zoom" }}
            >
              <Image
                src={img.image}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover select-none"
                sizes="76vw"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
