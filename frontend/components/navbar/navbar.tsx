"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Code } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="hidden md:flex">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Code className="mr-2 h-4 w-4" />
                  <span className="font-bold">BackendDev</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === item.href}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-1">
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
          </nav>
        </div>
      </div>
    </header>
  )
}