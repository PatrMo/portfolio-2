"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Code } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useRef, useEffect } from "react"

import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

const navItems = [
  { name: "About", href: "/" },
  { name: "Resume", href: "Resume" },
  { name: "Contact", href: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && 
          event.target instanceof Node && 
          !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close the dropdown when screen size changes to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className={navigationMenuTriggerStyle()}>
          <Code className="mr-2 h-4 w-4" />
          <span className="font-bold">Patrick Molka</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle (always visible) */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Hamburger Menu Button with Animation */}
          <div className="relative md:hidden" ref={dropdownRef}>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
              aria-label="Menu"
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                {/* Animated hamburger icon */}
                <span 
                  className={`block bg-foreground dark:bg-foreground h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`} 
                />
                <span 
                  className={`block bg-foreground dark:bg-foreground h-0.5 w-5 rounded-sm my-1 transition-all duration-300 ease-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`} 
                />
                <span 
                  className={`block bg-foreground dark:bg-foreground h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`} 
                />
              </div>
            </Button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}