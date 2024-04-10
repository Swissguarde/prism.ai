import { fetchNavigation } from "@/app/utils/fetchNavigation";
import Navbar from "./Navbar";

export default async function Header() {
  const headerData: NavigationProps[] = await fetchNavigation();
  return <Navbar data={headerData} />;
}
