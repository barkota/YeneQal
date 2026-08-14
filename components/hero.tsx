"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden paper-texture">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/30 blur-2xl" />
      <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-teal/20 blur-xl" />
      
      {/* Small decorative circles */}
      <div className="absolute top-40 right-1/3 w-4 h-4 rounded-full bg-secondary" />
      <div className="absolute bottom-40 left-1/3 w-6 h-6 rounded-full bg-accent" />
      <div className="absolute top-1/2 left-20 w-3 h-3 rounded-full bg-teal" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/logo.svg"
              alt="የኔ ቃል Logo"
              width={250}
              height={250}
              className="drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Purpose Label / Sub-headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs md:text-sm font-bold uppercase tracking-widest rounded-full"
          >
            The First Culturally Native Amharic AAC Platform
          </motion.div>

          {/* Elevated Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty font-medium leading-relaxed"
          >
            Empowering non-verbal and speech-delayed children to build sentences, express needs, and map their world using familiar, localized visuals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Try Interactive Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-card/50 hover:scale-105 transition-all duration-200"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none line-height-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto block"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  )
}