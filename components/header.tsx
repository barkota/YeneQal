"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react"

// Custom TikTok SVG Icon matching Footer layout
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.23 1.25 2.92 1.84 4.62 2.02V10c-1.38-.03-2.76-.36-3.99-1.04-.49-.26-.94-.61-1.33-.99v6.52c.02 2.34-1.01 4.66-2.88 6.1-2.12 1.7-5.18 2.05-7.63.89-2.75-1.21-4.46-4.32-4.14-7.31.25-3.19 2.87-5.91 6.07-6.17v4.06c-1.2.14-2.31.95-2.67 2.11-.47 1.43.16 3.09 1.48 3.75 1.22.65 2.83.33 3.69-.73.4-.48.58-1.1.55-1.72V0h4.31z"/>
    </svg>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    setIsMobileMenuOpen(false)
    window.dispatchEvent(new Event("open-contact-modal"))
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="የኔ ቃል Logo"
              width={60}
              height={60}
              className="drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
            >
              Modules
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 h-9 font-semibold text-sm"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Demo
            </Button>
            <button
              onClick={handleContactClick}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer text-sm"
            >
              Contact
            </button>

            {/* Vertical Splitter Line */}
            <div className="h-4 w-[1px] bg-border mx-1" />

            {/* Desktop Social Group */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#screenshots"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Modules
              </a>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold w-full"
                onClick={() => {
                  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMobileMenuOpen(false)
                }}
              >
                Try Demo
              </Button>
              <button
                onClick={handleContactClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-left cursor-pointer text-sm"
              >
                Contact
              </button>

              {/* Mobile Horizontal Divider */}
              <div className="h-[1px] w-full bg-border my-1" />

              {/* Mobile Social Tray */}
              <div className="flex items-center gap-5 text-muted-foreground py-2 justify-center sm:justify-start">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="TikTok">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}