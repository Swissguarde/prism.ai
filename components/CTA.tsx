import { GiNinjaStar } from "react-icons/gi";
import Bounded from "./Bounded";
import ButtonLink from "./ButtonLink";

export default function CTA() {
  return (
    <Bounded className="relative py-32 text-center font-medium md:py-40">
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter" />
      <div className="glass-container rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
        <GiNinjaStar className="text-6xl" />
      </div>

      <div className="mt-8 max-w-xl text-balance text-5xl">
        <h2>AI powered insights for designers</h2>
      </div>
      <ButtonLink className="mt-6" linkTo="/" title="Learn More" />
    </Bounded>
  );
}
