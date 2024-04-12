import Hero from "@/components/Hero";
import BentoBox from "@/components/BentoBox";
import Showcase from "@/components/Showcase";
import Casestudies from "@/components/Casestudies";
import { fetchData } from "./utils/fetchData";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";

export default async function Home() {
  const data: HeroProps[] = await fetchData("hero");
  const bentoData: BentoProps[] = await fetchData("bento");
  const showcaseData: ShowcaseProps[] = await fetchData("showcase");
  const casestudyData: CasestudyProps[] = await fetchData("casestudy");

  return (
    <>
      <Hero data={data} />
      <BentoBox bentoData={bentoData} />
      <Showcase showcaseData={showcaseData} />
      <Casestudies casestudyData={casestudyData} />
      <Integrations />
      <CTA />
    </>
  );
}
