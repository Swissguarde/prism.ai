import Hero from "@/components/Hero";
import BentoBox from "@/components/BentoBox";
import Showcase from "@/components/Showcase";
import { fetchData } from "./utils/fetchData";

export default async function Home() {
  const data: HeroProps[] = await fetchData("hero");
  const bentoData: BentoProps[] = await fetchData("bento");
  const showcaseData: ShowcaseProps[] = await fetchData("showcase");

  return (
    <>
      <Hero data={data} />
      <BentoBox bentoData={bentoData} />
      <Showcase showcaseData={showcaseData} />
    </>
  );
}
