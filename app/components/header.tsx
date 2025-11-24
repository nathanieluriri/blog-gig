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
  const res = await fetch(`${BASE_URL}/api/v1/articles/content/categories`, {
    cache: "no-cache",
  });

  let allCategories = [];
  if (res.ok) {
    const data = await res.json();
    allCategories = data.data.listOfCategories;
  } else {
    console.error("Failed to fetch categories:", res.status);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  const mainCategories = allCategories.slice(0, 4);
  const moreCategories = allCategories.slice(4);

  return (
    <header className="bg-black flex justify-between items-center px-3 py-5 lg:px-7 sticky top-0 z-40">
      <div className="flex gap-10">
        <div className="flex gap-3">
          <MobileMenu data={allCategories} />
          <Link href="/">
            <Image
              src="/logo-footer.png"
              alt="blog logo"
              width={135.44}
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
          {moreCategories.length > 0 && (
            <HeaderMoreDropdown items={moreCategories} label="MORE" />
          )}
        </nav>
      </div>
      <div>
        <SearchBtn />
      </div>
    </header>
  );
};

export default Header;
