"use client"

import { motion } from "framer-motion"
import { Languages, Stethoscope, LayoutGrid, Sparkles } from "lucide-react"

const features = [
  {
    icon: Languages,
    title: "Pictures from home",
    description: "The pictures show the food, holidays, and family life Ethiopian children already know \u2014 injera, coffee, grandparents, Meskel \u2014 so a child recognises them straight away.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Stethoscope,
    title: "Show where it hurts",
    description: "When a child is unwell, they tap the spot on a picture of the body. No more guessing which part hurts or how they feel.",
    color: "bg-teal/10",
    iconColor: "text-teal",
    borderColor: "border-teal/20",
  },
  {
    icon: LayoutGrid,
    title: "Build full sentences",
    description: "Children combine words and phrases to say complete thoughts \u2014 not just single words.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-accent/20",
  },
  {
    icon: Sparkles,
    title: "Every word stays put",
    description: "Buttons are the same size and never move, so children learn where each word lives and find it faster the more they use it.",
    color: "bg-secondary/20",
    iconColor: "text-secondary-foreground",
    borderColor: "border-secondary/30",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tailored for Amharic. Built for Connection.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every picture and every button was made for Amharic-speaking children, so what a child means is what comes out.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group p-6 rounded-3xl ${feature.color} border ${feature.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}