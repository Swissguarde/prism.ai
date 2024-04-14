"use client";
import { PiGear } from "react-icons/pi";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Bounded from "./Bounded";

interface IProps {
  showcaseData: ShowcaseProps[];
}
export default function Showcase({ showcaseData }: IProps) {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { y: 100 },
        {
          y: 0,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=40%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <>
      {showcaseData.map((showcase) => {
        const {
          _id,
          showcaseButton,
          showcaseDescription,
          showcaseImage,
          showcaseTitle,
          subtitle,
          title,
        } = showcase;

        return (
          <Bounded key={_id} className="relative">
            <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/20 blur-3xl filter" />
            <div
              ref={container}
              className="text-balance text-center text-5xl font-medium md:text-7xl"
            >
              <h2>{title}</h2>
              <h2>{subtitle}</h2>
            </div>

            <div className="mt-16 grid items-center gap-8 rounded-xl border border-blue-50/20 bg-gradient-to-b from-slate-50/15 to-slate-50/5 p-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
              <div>
                <div className="w-fit rounded-lg bg-blue-500/35 p-4 text-3xl">
                  <PiGear />
                </div>
                <div className="mt-6 text-2xl font-normal">{showcaseTitle}</div>
                <div className="prose prose-invert mt-4 max-w-xl">
                  {showcaseDescription}
                </div>
                <ButtonLink
                  linkTo="/"
                  title={showcaseButton}
                  className="mt-6"
                />
              </div>
              <Image
                src={urlFor(showcaseImage.asset._ref).url()}
                alt="showcase_image"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full opacity-90 shadow-2xl lg:-order-1 lg:col-span-2 lg:translate-x-[-15%] lg:pt-0"
              />
            </div>
          </Bounded>
        );
      })}
    </>
  );
}
