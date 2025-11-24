import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-400 mt-6">
      <div className="hidden md:flex flex-col items-center py-8">
        <div className="mb-14 border-t border-t-gray-400 w-full relative px-8">
          <Image
            src="/logo-footer.png"
            alt="footer-image"
            width={68}
            height={76}
            className="w-14 h-10 absolute -top-5 left-1/2 transform -translate-x-1/3 bg-[#1A1A1A]"
          />
        </div>
        <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-wider">
          <div className="flex justify-center gap-8">
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition">
                About
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition">
                Athlete Application
              </Link>
              <a href="#" className="hover:text-white transition">
                Newsletter
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition">
                Careers
              </Link>
              <a href="#" className="hover:text-white transition">
                Accessibility Statement
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition">
                A-Z Index
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 w-full border-t border-t-gray-400 pt-3">
          <p className="text-center">
            © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden flex flex-col items-center py-8">
        <div className="mb-14 border-t border-t-gray-400 w-full relative px-8">
          <Image
            src="/logo-footer.png"
            alt="footer-image"
            width={68}
            height={76}
            className="w-14 h-10 absolute -top-5 left-1/2 transform -translate-x-1/3 bg-[#1A1A1A]"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs uppercase tracking-wider text-center px-6 w-full max-w-md">
          <Link href="#" className="hover:text-white transition">
            About
          </Link>
          <Link href="#" className="hover:text-white transition">
            Athlete Application
          </Link>
          <Link href="#" className="hover:text-white transition">
            Careers
          </Link>
          <Link href="#" className="hover:text-white transition">
            Privacy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Terms
          </Link>
          <Link href="#" className="hover:text-white transition">
            Cookie Policy
          </Link>
          <Link href="#" className="hover:text-white transition">
            Newsletter
          </Link>
          <Link href="#" className="hover:text-white transition">
            Accessibility Statement
          </Link>
          <Link href="#" className="hover:text-white transition">
            A-Z Index
          </Link>
          <Link href="#" className="hover:text-white transition">
            Cookies Settings
          </Link>
        </div>

        <div className="mt-8 text-xs text-gray-500 w-full border-t border-t-gray-400 pt-3">
          <p className="text-center">
            © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
