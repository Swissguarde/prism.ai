import clsx from "clsx";
import Bounded from "./Bounded";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface IProps {
  bentoData: BentoProps[];
}

export default function BentoBox({ bentoData }: IProps) {
  return (
    <Bounded>
      {bentoData.map((item) => {
        const {
          _id,
          description: [
            {
              children: [{ text }],
            },
          ],
          highlighted,
          title,
          bento,
        } = item;
        return (
          <div key={_id}>
            <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
              {title}
              <br />
              <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
                {highlighted}
              </em>
            </h2>

            <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
              <p>{text}</p>
            </div>

            <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
              {bento.map((item) => {
                const {
                  _key,
                  wide,
                  bentoHeader,
                  bentoImage,
                  bentoDescription,
                } = item;
                return (
                  <div
                    className={clsx(
                      "glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4",
                      wide ? "md:col-span-2" : "md:col-span-1",
                    )}
                    key={_key}
                  >
                    <h3 className="text-2xl">{bentoHeader}</h3>
                    <div className="max-w-md text-balance text-slate-300">
                      <h2>{bentoDescription}</h2>
                    </div>
                    <Image
                      src={urlFor(bentoImage.asset).url()}
                      alt="bento_img"
                      className="max-h-36 w-auto"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Bounded>
  );
}
