"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, Mail, Phone, X, CheckCircle, Linkedin, Instagram, Facebook } from "lucide-react"

// Simple Custom TikTok Icon since it's not native to standard lucide-react builds
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

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  
  // Custom states to handle Web3Forms tracking instead of Formspree hooks
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  // Sync state with header actions
  useEffect(() => {
    const handleOpenModal = () => {
      setIsContactOpen(true)
      setIsSuccess(false) // Reset state when opening modal
      setFormError(null)
    }
    window.addEventListener("open-contact-modal", handleOpenModal)
    
    return () => window.removeEventListener("open-contact-modal", handleOpenModal)
  }, [])

  // Web3Forms Async Submit Handler
  const handleWeb3FormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        e.currentTarget.reset() // Clear input elements
      } else {
        setFormError(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setFormError("Unable to connect to the server. Check your network link.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="የኔ ቃል Logo"
              width={40}
              height={40}
              className="drop-shadow-sm"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#demo" className="hover:text-foreground transition-colors">
              Demo
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              About
            </a>
            {/* Contact Trigger Button */}
            <button 
              onClick={() => {
                setIsSuccess(false)
                setFormError(null)
                setIsContactOpen(true)
              }}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Made with love */}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for every child</span>
          </div>
        </div>

        {/* Divider line before social rows */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} የኔ ቃል. All rights reserved.</p>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors p-1"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-foreground transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* --- CONTACT MODAL POPUP --- */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card w-full max-w-md rounded-2xl border border-border p-6 shadow-lg relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success HUD State */
              <div className="text-center py-8 animate-in fade-in duration-300">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">
                  Thank you for reaching out. The የኔ ቃል team will review your message and respond shortly.
                </p>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="py-2 px-6 rounded-lg bg-muted text-foreground hover:bg-muted/80 text-sm font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              /* Main Interactive Layout */
              <>
                {/* Header */}
                <h3 className="text-xl font-bold text-foreground mb-1">Get in Touch</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Have questions about የኔ ቃል? Reach out to us directly.
                </p>

                {/* Quick Actions (Call & Email Taps) */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a 
                    href="mailto:info@yeneqal.com" 
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border/60 transition-colors text-center group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:scale-105 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">Email Us</span>
                  </a>
                  
                  <a 
                    href="tel:+251944256780" 
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border/60 transition-colors text-center group"
                  >
                    <Phone className="w-5 h-5 text-primary group-hover:scale-105 transition-transform" />
                    <span className="text-xs font-semibold text-foreground">Call Directly</span>
                  </a>
                </div>

                {/* Web3Forms Managed Integration Form */}
                <form onSubmit={handleWeb3FormSubmit} className="space-y-3">
                  {/* Your Hidden Access Key */}
                  <input 
                    type="hidden" 
                    name="access_key" 
                    value="87e8f263-9055-4e1b-89fd-810f5b6570a0" 
                  />
                  
                  {/* Subject Line for clean styling in your Web3Forms Email notification */}
                  <input 
                    type="hidden" 
                    name="subject" 
                    value="New Contact Form Submission - YeneQal" 
                  />

                  {/* Optional bot honeypot protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground block mb-1">
                      Your Name
                    </label>
                    <input 
                      id="name"
                      type="text" 
                      name="name"
                      required
                      placeholder="Type Name Here"
                      className="w-full text-sm px-3 py-2 rounded-lg bg-muted/40 border border-border focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground block mb-1">
                      Your Email
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      required
                      placeholder="example@gmail.com"
                      className="w-full text-sm px-3 py-2 rounded-lg bg-muted/40 border border-border focus:outline-none focus:border-primary text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground block mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="How can we help you?"
                      className="w-full text-sm px-3 py-2 rounded-lg bg-muted/40 border border-border focus:outline-none focus:border-primary text-foreground resize-none"
                    />
                  </div>

                  {/* General Error Message Handling */}
                  {formError && (
                    <p className="text-xs text-destructive mt-1 font-medium bg-destructive/10 p-2 rounded-md animate-in fade-in">
                      {formError}
                    </p>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}