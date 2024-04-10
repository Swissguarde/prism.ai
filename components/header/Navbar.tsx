"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import ButtonLink from "../ButtonLink";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";

type NavbarProps = {
  data: NavigationProps[];
};

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { buttons, logo } = data[0];

  return (
    <nav aria-label="Main" className="p-4 md:p-0">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50" onClick={() => setOpen(false)}>
            <Image
              src={urlFor(logo).url()}
              alt="prismic_logo"
              width={250}
              height={80}
              className="h-12 w-full object-cover sm:h-20"
            />
            <span className="sr-only">Prismic.ai Home Page</span>
          </Link>

          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-[100] flex flex-col items-end gap-4 bg-[#04050e] pr-4 pt-14 transition-transform duration-700 ease-in-out motion-reduce:transition-none md:hidden",
            open ? "left-[10%] translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            type="button"
            className="fixed right-4 top-4 mb-4 block p-2 text-3xl  text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(false)}
          >
            <MdClose />
            <span className="sr-only">Close Menu</span>
          </button>

          <div className="mt-10 grid justify-items-end gap-8">
            {buttons.map((button) => {
              const { _key, buttonLink, buttonText, isFeatured } = button;
              return (
                <div key={_key}>
                  {!isFeatured ? (
                    <Link
                      className="inline-flex min-h-11 items-center text-3xl"
                      href={buttonLink}
                      onClick={() => setOpen(false)}
                    >
                      {buttonText}
                    </Link>
                  ) : (
                    <ButtonLink
                      className="inline-flex min-h-11 items-center"
                      linkTo={buttonLink}
                      title={buttonText}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {buttons.map((button) => {
            const { _key, buttonLink, buttonText, isFeatured } = button;
            return (
              <li key={_key}>
                {!isFeatured ? (
                  <Link
                    className="inline-flex min-h-11 items-center"
                    href={buttonLink}
                  >
                    {buttonText}
                  </Link>
                ) : (
                  <ButtonLink
                    className="inline-flex min-h-11 items-center"
                    linkTo={buttonLink}
                    title={buttonText}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
