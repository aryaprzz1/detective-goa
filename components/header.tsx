"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Shield } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-slate-900/95">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-3">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setIsSheetOpen(false)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-slate-800 to-slate-900">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-lg font-medium ${
                      isActive(item.path) ? "text-amber-400 font-bold" : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Button
                    className="w-full bg-amber-600 text-white hover:bg-amber-700"
                    asChild
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-base text-white leading-tight">SeekProof</span>
              <span className="text-xs text-amber-300 font-medium">Detective Goa</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-all duration-300 ${
                isActive(item.path) ? "text-amber-400 border-b-2 border-amber-400" : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10" asChild>
            <Link href="tel:+919152695373">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Call us</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="hidden md:flex text-white hover:bg-white/10" asChild>
            <Link href="https://wa.me/919152695373" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="sr-only">WhatsApp us</span>
            </Link>
          </Button>

          <Button className="hidden md:inline-flex bg-amber-600 text-white hover:bg-amber-700" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
