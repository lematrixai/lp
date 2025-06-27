'use client'
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary/10 text-white px-4 pt-10 pb-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
        {/* Logo */}
        <div className="flex flex-col items-start md:w-1/4 mb-4 md:mb-0">
          <Image src="/logo/senjaro-pay-dark.png" alt="Senjaro Pay" width={80} height={32} className="h-10 w-auto mb-3" />
          {/* Social icons placeholder */}
          {/* <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Twitter"><svg className="w-5 h-5 text-gray-400 hover:text-white" /></a>
            <a href="#" aria-label="LinkedIn"><svg className="w-5 h-5 text-gray-400 hover:text-white" /></a>
          </div> */}
          <div className="flex gap-3 mt-2"></div>
        </div>
        {/* About */}
        <div className="flex flex-col gap-1 md:w-1/4 text-left">
          <span className="text-xs text-gray-400 font-semibold mb-1">About</span>
          <p className="text-xs text-gray-400 leading-relaxed">Smart payments for Africa's boldest businesses.</p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-1 md:w-1/4 text-left">
          <span className="text-xs text-gray-400 font-semibold mb-1">Contact</span>
          <span className="text-xs text-gray-400 leading-relaxed"> marketing@senjaropay.com developers@senjaropay.com</span>
          <span className="text-xs text-gray-400">+255 748 999 974</span>
        </div>
      </div>
      <div className="border-t border-primary/20 mt-8 pt-4 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Senjaro Pay. All Rights Reserved.
      </div>
    </footer>
  );
}