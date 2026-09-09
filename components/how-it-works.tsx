"use client"

import { motion } from "framer-motion"
import { TouchpadIcon, Grid3X3, Speaker } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: TouchpadIcon,
    title: "Choose a Category",
    description: "Browse through organized categories like food, feelings, activities, and more.",
    color: "bg-secondary",
  },
  {
    step: 2,
    icon: Grid3X3,
    title: "Select Pictures",
    description: "Tap on colorful picture cards to build sentences and express thoughts.",
    color: "bg-accent",
  },
  {
    step: 3,
    icon: Speaker,
    title: "Speak & Share",
    description: "Press play to hear the message spoken aloud, helping children communicate.",
    color: "bg-teal",
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-background paper-texture relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Communication made simple in just three easy steps
          </p>
        </motion.div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Vertical Steps Timeline Layout */}
          <div className="lg:col-span-5 flex flex-col gap-8 relative">
            {/* Vertical connector line for desktop layouts */}
            <div className="hidden sm:block absolute left-12 top-6 bottom-6 w-0.5 bg-border/60 z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 z-10 group"
              >
                {/* Step circle container */}
                <div className={`shrink-0 w-24 h-24 rounded-full ${step.color} flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                  
                  {/* Step absolute badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-black shadow-md">
                    {step.step}
                  </div>
                </div>

                {/* Step Content Text */}
                <div className="flex flex-col justify-center pt-2">
                  <h3 className="text-xl font-bold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Live Video Embed Container Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card p-3">
              
              {/* Aspect Ratio Embed Frame Shell */}
              <div className="relative w-full aspect-[16/9] bg-muted rounded-2xl overflow-hidden border border-border/40">
                
                {/* Clean, fixed YouTube iframe integration component */}
                <iframe 
                   className="absolute inset-0 w-full h-full border-0 object-cover"
                  src="https://www.youtube.com/embed/cHDR60fbYO0?si=yR84NA8PXpuVLLeY" 
                  title="የኔ ቃል Video Tutorial Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}