import Hero from "@/components/Hero";
import BentoBox from "@/components/BentoBox";
import { fetchData } from "./utils/fetchData";

export default async function Home() {
  const data: HeroProps[] = await fetchData("hero");
  const bentoData: BentoProps[] = await fetchData("bento");

  return (
    <>
      <Hero data={data} />
      <BentoBox bentoData={bentoData} />
    </>
  );
}
