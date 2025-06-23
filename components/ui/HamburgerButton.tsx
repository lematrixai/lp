import React from "react";
import "@/app/globals.css";

interface HamburgerButtonProps {
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isActive, onClick, className }) => {
  return (
    <button
      type="button"
      className={`McButton${isActive ? " active" : ""} ${className || ""}`}
      data-hamburger-menu="true"
      aria-label="Menu"
      aria-pressed={isActive}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

interface HamburgerToXButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerToXButton: React.FC<HamburgerToXButtonProps> = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none ${className || ""}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`block absolute h-0.5 w-7 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
          ${isOpen ? "rotate-45 top-1/2" : "-translate-y-1.5 top-4.5"}`}
      />
      <span
        className={`block absolute h-0.5 w-7 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-0 scale-80 top-1/2" : "top-1/2"}`}
      />
      <span
        className={`block absolute h-0.5 w-7 bg-black dark:bg-white rounded transition-all duration-300 ease-in-out
          ${isOpen ? "-rotate-45 top-1/2" : "translate-y-1.5 top-6"}`}
      />
    </button>
  );
}; 