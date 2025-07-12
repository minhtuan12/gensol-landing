"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function SimpleThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Pastikan komponen hanya dirender di client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="focus-visible:ring-0 dark:backdrop-blur-md dark:bg-white/10 dark:border-white/20">
      {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground" /> : <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />}
    </Button>
  )
}
