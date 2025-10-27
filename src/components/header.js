import { TrendingUpIcon, SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchableContent = [
    { title: "Introduction", id: "introduction", content: "NexTask project management JWT authentication API integration" },
    { title: "Technologies Used", id: "technologies", content: "React Next.js Material UI Tailwind CSS JWT ApexCharts" },
    { title: "Getting Started", id: "getting-started", content: "install dependencies environment setup development server" },
    { title: "Environment Setup", id: "environment", content: "MongoDB Cloudinary JWT SMTP Gmail configuration" },
    { title: "Email Templates", id: "email-templates", content: "welcome emails password reset notifications" },
    { title: "Customization", id: "customization", content: "theme styles components charts" },
    { title: "Features", id: "features", content: "authentication API integration responsive design" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearchSelect = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between py-2 px-6">
        <a href="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-800 transition duration-300">
          <img src="logo.png" alt="logo" className="h-14" />
        </a>
        
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length > 1 && setShowResults(true)}
                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 text-sm"
              />
            </div>
            
            {/* Search Results */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSearchSelect(result.id)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 text-sm text-gray-800"
                  >
                    <div className="font-medium">{result.title}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <a href="https://next-task-seven-hazel.vercel.app" target="_blank" rel="noreferrer">
            <button className="bg-blue-900 hover:bg-blue-800 p-2 px-5 text-white text-md rounded-xl font-bold flex items-center">
              <TrendingUpIcon className="h-4 w-4 text-white mr-1" />
              <span>Demo</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
