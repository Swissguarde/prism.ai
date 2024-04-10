import Hero from "@/components/Hero";
import { fetchHeroData } from "./utils/fetchHeroData";

export default async function Home() {
  const data = await fetchHeroData();

  return (
    <>
      <Hero data={data} />
    </>
  );
}
