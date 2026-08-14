"use client"

import { motion } from "framer-motion"
import { Languages, Stethoscope, LayoutGrid, Sparkles } from "lucide-react"

const features = [
  {
    icon: Languages,
    title: "Culturally Anchored Symbols",
    description: "Built strictly for Amharic contexts. Visual flashcards feature bespoke illustrations reflecting local Ethiopian food, traditions, holidays, and family structures.",
    color: "bg-primary/10",
    iconColor: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Stethoscope,
    title: "Interactive Body Mapping",
    description: "Eliminate communication guesswork when a child is unwell. Users point and tap directly onto responsive physical profile views to pinpoint aches, injuries, or feelings.",
    color: "bg-teal/10",
    iconColor: "text-teal",
    borderColor: "border-teal/20",
  },
  {
    icon: LayoutGrid,
    title: "Advanced Sentence Staging",
    description: "Move past isolated words. A continuous multi-item top builder and static side rails let children combine verbs, subjects, and phrases into complete thoughts seamlessly.",
    color: "bg-accent/10",
    iconColor: "text-accent",
    borderColor: "border-accent/20",
  },
  {
    icon: Sparkles,
    title: "Predictive Muscle Memory Layout",
    description: "Engineered around motor-planning principles. High-contrast bounding outlines and uniform button grid sizing help complex communication choices become effortless over time.",
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
    <section id="features" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tailored for Amharic. Built for Connection.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every layout, localized symbol, and interaction is designed to bridge the gap between thought and expression.
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