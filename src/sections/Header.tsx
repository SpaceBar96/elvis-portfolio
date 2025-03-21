"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#my-projects", label: "Projects" },
  { href: "#my-experience", label: "Experience" },
  { href: "#about-me", label: "About" },
];

export const Header = () => {
  const [activeTab, setActiveTab] = useState("#home");

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-item px-4 py-2 rounded-full transition ${
              activeTab === href
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/20 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(href)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
