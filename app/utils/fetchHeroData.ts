export const fetchHeroData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hero`);
  const data: HeroProps[] = await response.json();
  return data;
};
