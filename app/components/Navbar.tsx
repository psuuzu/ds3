'use client'
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import Banner from "./Banner"
import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"

export default function Navbar ({
  children, 
  className,
  ...rest
}: {
  children: React.ReactNode
  className: string
}) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="sticky top-0 z-20">
      {/* <Banner text="We Are Recruiting For 2024" link="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" /> */}

      <nav {...rest} className={clsx('relative w-full py-3 bg-background-secondary', className)}>
        <div className="relative max-w-screen-xl flex justify-between gap-3 mx-auto">
          {/* Logo */}
          <div className="flex flex-1 px-4">
            <Link href="/">
              <Image
                className="filter-invert"
                src='/logo.png' 
                width={1363/14} 
                height={552/14} 
                alt="DS Cubed logo"
              ></Image>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="flex gap-6 md:hidden px-4">
            <Link className="my-auto" href="committee">Committee</Link>
            <Link className="my-auto" href="sponsers">Sponsors</Link>
            <Link className="my-auto" href="events">Events</Link>
            <Link className="my-auto px-4 py-2 bg-foreground text-background rounded-full" href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" target="_blank">Membership</Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="hidden md:block px-4" onClick={() => setShowMenu(showMenu ? false : true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>


        {/* Mobile links */}
        <div className={clsx("absolute hidden flex-col w-full bg-background-secondary top-full border-t border-border", {
          'md:flex': showMenu,
        })}>
          <Link className="p-4 border-b border-border" href="committee">Committee</Link>
          <Link className="p-4 border-b border-border" href="sponsers">Sponsors</Link>
          <Link className="p-4 border-b border-border" href="events">Events</Link>
          <Link className="p-4 border-b border-border" href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/dscubed/" target="_blank">Membership</Link>
        </div>
      </nav>
    </div>
  )
}