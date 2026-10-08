import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobilemenu";
import HeaderDropdown from "./headerdropdown";
import HeaderMoreDropdown from "./headermoredropdown";
import { BASE_URL } from "../util/api";
import SearchBtn from "./searchbtn";

export interface IMenuItems {
  name: string;
  slug: string;
}

const Header = async () => {
  let allCategories: IMenuItems[] = [];
  try {
    const res = await fetch(`${BASE_URL}/api/v1/articles/content/categories`, {
      next: { revalidate: 300 },
    });
    if (res.ok) allCategories = (await res.json()).data?.listOfCategories ?? [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }

  const mainCategories = allCategories.slice(0, 5);
  const moreCategories = allCategories.slice(0, 5);

  return (
    <header className="bg-black flex justify-between items-center px-3 py-5 lg:py-3 lg:px-7 sticky top-0 z-40">
      <div className="flex gap-10">
        <div className="flex gap-3">
          <MobileMenu data={moreCategories} />
          <Link href="/blog">
            <Image
              src="/logo-footer.png"
              alt="blog logo"
              width={70.44}
              height={30}
              priority
            />
          </Link>
        </div>

        <nav className="text-white hidden lg:flex text-sm font-medium items-center gap-5">
          {mainCategories.map((category: IMenuItems) => (
            <HeaderDropdown
              key={category.slug}
              name={category.name}
              slug={category.slug}
            />
          ))}
        </nav>
      </div>
      <div>
        <SearchBtn />
      </div>
    </header>
  );
};

export default Header;
