import Image from "next/image";
import Bounded from "./Bounded";
import clsx from "clsx";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

interface IProps {
  casestudyData: CasestudyProps[];
}
export default function Casestudies({ casestudyData }: IProps) {
  return (
    <>
      {casestudyData.map((item) => {
        const {
          _id,
          caseStudy,
          title,
          description: [
            {
              children: [{ text }],
            },
          ],
        } = item;
        return (
          <Bounded key={_id}>
            <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
              {title}
            </h2>
            <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
              {text}
            </div>
            <div className="mt-20 grid gap-16">
              {caseStudy.map((item, i) => {
                const {
                  _key,
                  casestudyDescription,
                  casestudyLink,
                  casestudyTitle,
                  image,
                } = item;
                const { children } = casestudyDescription[0];
                return (
                  <div
                    key={i}
                    className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 lg:grid-cols-3"
                  >
                    <div className="col-span-1 flex flex-col justify-center gap-4">
                      <h3 className="text-4xl">{casestudyTitle}</h3>
                      <div className="max-w-md">
                        <p>{children[0].text}</p>
                      </div>
                      <Link
                        href={`/case-study/${casestudyLink}`}
                        className="after:absolute after:inset-0 hover:underline"
                      >
                        Read {casestudyTitle}'s case study
                      </Link>
                    </div>
                    <Image
                      src={urlFor(image.asset._ref).url()}
                      alt="case-study_image"
                      width={778}
                      height={454}
                      className={clsx(
                        "rounded-xl lg:col-span-2",
                        i % 2 && "md:-order-1",
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </Bounded>
        );
      })}
    </>
  );
}
