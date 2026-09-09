"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative overflow-hidden paper-texture pt-24 pb-14 md:pt-32 md:pb-24">
      {/* Soft background washes. Purely decorative, always behind content. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hidden sm:block absolute top-24 -left-10 w-40 h-40 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="hidden sm:block absolute top-1/2 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Small dots live in the container gutters only, so they can never sit on top of copy. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <span className="float-slow absolute left-0 top-16 w-3 h-3 rounded-full bg-teal/70" />
          <span className="float-slow absolute right-0 top-1/3 w-3 h-3 rounded-full bg-secondary" />
          <span className="float-slow absolute left-1 bottom-24 w-2.5 h-2.5 rounded-full bg-accent/80" />
          <span className="float-slow absolute right-1 bottom-12 w-2 h-2 rounded-full bg-primary/70" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5"
          >
            {/* Wordmark: hidden on mobile, where the sticky header logo already carries the brand */}
            <Image
              src="/logo.svg"
              alt="የኔ ቃል"
              width={140}
              height={140}
              className="hidden md:block drop-shadow-lg"
              priority
            />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground text-balance leading-[1.1]">
              The first Amharic AAC platform
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Empowering non-verbal and speech-delayed children to build sentences, express needs, and share
              their world &mdash; using pictures and Amharic words they already know.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-1">
              <Button
                size="lg"
                className="bg-primary-strong hover:bg-primary-strong-hover active:bg-primary-strong-active text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                Try the demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 hover:bg-card/50 hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                See what's inside
              </Button>
            </div>
          </motion.div>

          {/* Product shot in a tablet frame. Fixed aspect ratio keeps layout shift at zero. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="rounded-[1.75rem] md:rounded-[2rem] border-[10px] md:border-[14px] border-foreground/90 bg-foreground/90 shadow-2xl">
                <div className="relative aspect-[1400/760] overflow-hidden rounded-[0.9rem] md:rounded-[1rem] bg-muted">
                  <Image
                    src="/screenshots/hero-menesha.webp"
                    alt="የኔ ቃል running on a tablet, showing the Amharic picture grid children tap to build a sentence"
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              {/* Front-facing camera dot */}
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-[5px] md:top-[6px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-background/40"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none line-height-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          aria-hidden="true"
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
