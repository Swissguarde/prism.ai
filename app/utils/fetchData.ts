// const fetchBentoData = async () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bento`);
//   const data: BentoProps[] = await response.json();
//   return data;
// };

// const fetchHeroData = async () => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hero`);
//   const data: HeroProps[] = await response.json();
//   return data;
// };

// const fetchNavigation = async () => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/navigation`,
//   );
//   const data = await response.json();
//   return data;
// };

// export { fetchBentoData, fetchHeroData, fetchNavigation };

async function fetchData<T>(endpoint: string): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${endpoint}`,
  );
  const data: T = await response.json();
  return data;
}

export { fetchData };
