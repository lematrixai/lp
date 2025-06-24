'use client'
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export function Footer() {
  

  return (
    <footer className="bg-primary/10 text-white border-t border-primary/50">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className=" md:mb-0">
            {/* scroll smooth */}
              <ScrollLink to="/" onClick={() => scroll.scrollToTop()}>
              <Image src="/logo/senjaro-pay-dark.png" alt="Senjaro Pay" width={80} height={130} className="h-[80px] w-[130px] opacity-80 p-6" />
            </ScrollLink>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 mb-8 md:mb-0">
            <p className="text-right max-md:text-center text-xs max-w-sm mx-auto text-muted-foreground">© {new Date().getFullYear()} Senjaro Pay All Rights Reserved | Oyster Pearl Galleria, 1st Floor. Dar es Salaam, Tanzania.
            +255748999974, developers@senjaropay.com</p>
          </div>
        </div>

      </div>
    </footer>
  )
}