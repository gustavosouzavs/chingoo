import Link from "next/link";
import { NavigationMenuComponent } from "./navigation-menu";

export function Header() {

  return (
    <nav className='py-4 px-5 lg:px-0 shadow-lg bg-primary sticky top-0 flex flex-row gap-2 justify-between'>
      <div className="flex container justify-between">
        <Link href='/'>
          <h5 className='text-2xl font-bold text-background'>Chingoo</h5>
        </Link>
        <NavigationMenuComponent />
      </div>
    </nav>
  )

}