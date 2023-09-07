"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import testImage from "/public/images/sectorlink-com-webdevelopment.jpg"

export default function FCarousel() {
  return (
    <Carousel className="h-96">
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
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="fasdf" className="w-full h-full" />
    </Carousel>
  );
}
