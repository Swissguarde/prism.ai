"use client";
import { urlFor } from "@/app/lib/sanity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import Bounded from "./Bounded";
import ButtonLink from "./ButtonLink";
import StarGrid from "./StarGrid";

interface IProps {
  data: HeroProps[];
}

export default function Hero({ data }: IProps) {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "back" } });
      tl.fromTo(
        ".hero__heading",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.4 },
      );
      tl.fromTo(
        ".hero__body",
        { y: 20 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.3 },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        { y: 100 },
        { y: 0, opacity: 1, duration: 1.3 },
        "+=0.3",
      );
      tl.fromTo(
        ".hero__glow",
        { scale: 0.5 },
        { scale: 1, opacity: 1, duration: 1.8 },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <Bounded className="text-center">
      {data.map((item) => {
        const {
          title,
          banner,
          buttons: [{ buttonLink, buttonText }],
          description: [
            {
              children: [{ text }],
            },
          ],
        } = item;
        return (
          <div className="relative" ref={container} key={item._id}>
            <StarGrid />
            <h1 className="hero__heading text-balance text-5xl font-medium opacity-0 md:text-7xl">
              {title}
            </h1>

            <div className="hero__body mx-auto mt-6 max-w-md text-balance text-slate-300 opacity-0">
              {text}
            </div>

            <ButtonLink
              className="hero__button mt-8 opacity-0"
              linkTo={buttonLink}
              title={buttonText}
            />

            <div className="hero__image glass-container mt-16 w-fit opacity-0">
              <div className="hero__glow absolute inset-0 -z-10 bg-blue-500/30 opacity-0 blur-2xl filter" />
              <Image
                src={urlFor(banner.asset).url()}
                className="h-full w-full rounded-lg object-cover"
                alt="hero_image"
                width={2672}
                height={1604}
              />
            </div>
          </div>
        );
      })}
    </Bounded>
  );
}
