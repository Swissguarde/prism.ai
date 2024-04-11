import { fetchData } from "@/app/utils/fetchData";
import Navbar from "./Navbar";

export default async function Header() {
  const headerData: NavigationProps[] = await fetchData("navigation");
  return <Navbar data={headerData} />;
}
