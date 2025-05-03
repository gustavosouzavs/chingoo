import Link from "next/link";
import { NavigationMenuComponent } from "./navigation-menu";

export function Header() {
  return (
    <nav className="py-4 px-5 lg:px-0 shadow-lg bg-primary sticky top-0 flex flex-row gap-2 justify-between z-[999]">
      <div className="flex container justify-between">
        <Link href="/">
          <img src={"/logo-shadow.png"} className="w-[75px] h-auto" />
        </Link>
        <NavigationMenuComponent />
      </div>
    </nav>
  );
}
