import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import MobileMenu from "./mobilemenu";

const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center py-5 px-7 sticky top-0 z-50">
      <div className="flex gap-10">
        <div className="flex gap-3">
          <MobileMenu />
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="blog logo"
              width={135.44}
              height={30}
            />
          </Link>
        </div>
        <nav className="text-white hidden lg:flex text-lg font-medium justify-between items-center gap-5">
          <Link
            className="hover:underline underline-offset-4 transition-all duration-1000"
            href={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all duration-1000"
            href={"/category"}
          >
            Categories
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all duration-1000"
            href={"/videos"}
          >
            Videos
          </Link>
          <Link
            className="hover:underline underline-offset-4 transition-all duration-1000"
            href={"/about"}
          >
            About
          </Link>
        </nav>
      </div>
      <div>
        <FiSearch size={24} className="text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
