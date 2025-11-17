import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/85 text-gray-400 mt-6">
      <div className="hidden md:flex flex-col items-center py-8 border-t border-gray-800">
        <div className="mb-6">
          <svg
            width="48"
            height="36"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 0C12.6667 0 8.66667 6.24 8.66667 13.44C8.66667 20.64 12.6667 27.36 24 36C35.3333 27.36 39.3333 20.64 39.3333 13.44C39.3333 6.24 35.3333 0 29.3333 0C25.3333 0 21.3333 3.36 18.6667 9.12C18.6667 6.08 18.6667 3.04 18.6667 0Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm uppercase tracking-wider">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Careers
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Newsletter
          </a>
          <a href="#" className="hover:text-white transition">
            A-Z Index
          </a>
          <a href="#" className="hover:text-white transition">
            Cookies Settings
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} - All Rights Reserved
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center py-8 border-t border-gray-800">
        <div className="mb-6">
          <svg
            width="40"
            height="30"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6667 0C12.6667 0 8.66667 6.24 8.66667 13.44C8.66667 20.64 12.6667 27.36 24 36C35.3333 27.36 39.3333 20.64 39.3333 13.44C39.3333 6.24 35.3333 0 29.3333 0C25.3333 0 21.3333 3.36 18.6667 9.12C18.6667 6.08 18.6667 3.04 18.6667 0Z"
              fill="white"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-xs uppercase tracking-wider text-center px-6 w-full max-w-md">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a href="#" className="hover:text-white transition">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Newsletter
          </a>
          <a href="#" className="hover:text-white transition">
            A-Z Index
          </a>
          <a href="#" className="hover:text-white transition">
            Cookies Settings
          </a>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
