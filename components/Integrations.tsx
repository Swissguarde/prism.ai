"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Bounded from "./Bounded";
import StarBackground from "./StarBackground";
import background from "@/images/integration-background.jpg";
import {
  FaDigitalOcean,
  FaCloudflare,
  FaNpm,
  FaGithub,
  FaFigma,
  FaFly,
} from "react-icons/fa6";
import StylizedLogoMark from "./StylizedLogoMark";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Integrations() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(".pulsing-logo", {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.4,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 0.9,
          },
        ],
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "center", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );

      tl.to(
        ".pulsing-icon",
        {
          keyframes: [
            {
              opacity: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
              duration: 1,
            },
            {
              opacity: 0.4,
              duration: 1,
              stagger: {
                from: "center",
                each: 0.3,
              },
            },
          ],
        },
        "-=2",
      );
    },
    { scope: container },
  );

  const icons = [
    { title: "digitalOcean", icon: FaDigitalOcean },
    { title: "cloudflare", icon: FaCloudflare },
    { title: "npm", icon: FaNpm },
    { title: "github", icon: FaGithub },
    { title: "figma", icon: FaFigma },
    { title: "fly", icon: FaFly },
  ];

  return (
    <Bounded className="relative overflow-hidden">
      <Image
        src={background}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
          Integrations galore.
        </h2>
        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
          The integrations your team needs to be productive at scale with no
          impact on your burn rate.
        </div>

        <div
          ref={container}
          className="mt-20 flex flex-col items-center md:flex-row"
        >
          {icons.map(({ title, icon: IconComponent }, index) => (
            <React.Fragment key={title}>
              {index === Math.floor(icons.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="signal-line rotate-180 bg-gradient-to-t" />
                </>
              )}
              <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
                <IconComponent />
              </div>
              {index !== icons.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(icons.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
