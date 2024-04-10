export const fetchNavigation = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/navigation`
  );
  const data = await response.json();
  return data;
};
