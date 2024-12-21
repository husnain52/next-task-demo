import { TrendingUpIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between py-2 px-6">
        <a
          href="/"
          className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <img src="logo.png" alt="logo" className="h-14" />
        </a>
        {isScrolled && (
          <a
            href="https://next-task-seven-hazel.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-blue-900 hover:bg-blue-800 p-2 px-5 text-white text-md rounded-xl font-bold flex justify-center align-middle">
              <TrendingUpIcon className="h-4 w-4 text-white mt-1 mr-1" />
              <span>Demo</span>
            </button>
          </a>
        )}
      </div>
    </header>
  );
}
