"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselFb() {
  return (
    <Carousel className="h-96 max-w-3xl dark:text-red">
      <Image
        src="/images/sectorlink-com-webdevelopment.jpg"
        alt="webdev technology"
        width={700}
        height={700}
        className="rounded-xl"
      />
      <Image
        src="/images/sectorlink-com-webdevelopment.jpg"
        alt="webdev technology"
        width={700}
        height={700}
        className="rounded-xl"
      />
      <Image
        src="/images/sectorlink-com-webdevelopment.jpg"
        alt="webdev technology"
        width={700}
        height={700}
        className="rounded-xl"
      />
      <Image
        src="/images/sectorlink-com-webdevelopment.jpg"
        alt="webdev technology"
        width={700}
        height={700}
        className="rounded-xl"
      />
    </Carousel>
  );
}
