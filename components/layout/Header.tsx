import TopBanner from "./TopBanner";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <TopBanner />
      <MainNav />
    </div>
  );
}
