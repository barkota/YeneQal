"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  LayoutGrid, 
  CalendarDays, 
  Utensils, 
  Layers, 
  HeartIcon, 
  PencilIcon,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Smile,          
  MessageSquare,  
  CheckSquare,    
  Activity,       
  GraduationCap,  
  Palette,        
  Ruler,          
  Calendar,       
  Binary,         
  Bus,            
  MapPin,         
  Compass,        
  Sparkles        
} from "lucide-react"

const screenshotTabs = [
  {
    id: "main-grid",
    label: "Main Interface (መነሻ ገጽ)",
    icon: LayoutGrid,
    title: "Structured Staging Workspace",
    description: "The layout offers clear Amharic script targets, persistent conversational modifier side-rails (Yes/No, Please, Sorry), and a top sentence assembly strip to stage complex phrases seamlessly.",
    src: "/screenshots/menesha.png" 
  },
  {
    id: "contexts",
    label: "Family/People (ቤተሰብ/ሰዎች)",
    icon: CalendarDays,
    title: "Accessible Social Networks",
    description: "The layout is streamlined to give children an immediate, single-tap way to address family, educators, and peers on a highly visible grid. By pairing these familiar faces with instant emotional expressions transforms social communication into a natural, confident conversation with their entire community.",
    src: "/screenshots/beteseb.png"
  },
  {
    id: "food-grid",
    label: "Food/Drinks (ምግብ/መጠጥ)",
    icon: Utensils,
    title: "Culturally Grounded Nutrition Mapping",
    description: "The interface categorizes authentic Ethiopian staples such as Injera (እንጀራ), Shiro (ሽሮ), and Firfir (ፍርፍር). The right-hand modifier rails allow kids to instantly specify satisfaction levels like 'I am full' (ጠገብኩ) or indicate core needs like 'Water' (ውሃ).",
    src: "/screenshots/food.png" 
  },
  {
    id: "body-mapping",
    label: "Body/health (አካላት/ጤና)",
    icon: HeartIcon,
    title: "Direct Visual Symptom Check",
    description: "Children can tap directly on visual anatomical map profiles to instantly communicate localized physical pain or specific body needs.",
    images: [
      "/screenshots/akalat1.png",
      "/screenshots/akalat2.png",
      "/screenshots/akalat3.png"
    ]
  },
  {
    id: "family-social",
    label: "Items (እቃዎች)",
    icon: PencilIcon,
    title: "Daily Objects & Belongings",
    description: "The interface features a highly organized grid designed for quick identification of personal items, clothing, and school supplies. Children can easily express immediate states of ownership or choose specific everyday belongings, transforming routine requests into a seamless, confident interaction with those around them.",
    imageAlt: "የኔ ቃል Family, Relational Dynamics and Social Care Grid",
    src: "/screenshots/ekawoch.png"
  }
]

const otherModules = [
  { name: "Feelings", amharic: "ስሜቶች", icon: Smile },
  { name: "Greetings", amharic: "ሰላምታ", icon: MessageSquare },
  { name: "Everyday Tasks", amharic: "የየቀን ድርጊቶች", icon: CheckSquare },
  { name: "Tasks", amharic: "ድርጊቶች", icon: Activity },
  { name: "School", amharic: "ትምህርት ቤት", icon: GraduationCap },
  { name: "Colors / Shapes", amharic: "ቀለማት/ቅርጾች", icon: Palette },
  { name: "Measurements", amharic: "ልኬት", icon: Ruler },
  { name: "Calendar", amharic: "የቀን ሰሌዳ", icon: Calendar },
  { name: "Numbers", amharic: "ቁጥሮች", icon: Binary },
  { name: "Transport", amharic: "ምጓጓዣ", icon: Bus },
  { name: "Places", amharic: "ቦታዎች", icon: MapPin },
  { name: "Geography", amharic: "መልከአ ምድር", icon: Compass },
  { name: "Occasions", amharic: "ኩነቶች", icon: Sparkles }
]

export function Screenshots() {
  const [activeTab, setActiveTab] = useState("main-grid")
  const [carouselIndex, setCarouselIndex] = useState(0)
  
  const currentView = screenshotTabs.find((t) => t.id === activeTab)!
  const hasCarousel = !!currentView.images

  useEffect(() => {
    setCarouselIndex(0)
  }, [activeTab])

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentView.images) {
      setCarouselIndex((prev) => (prev + 1) % currentView.images!.length)
    }
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentView.images) {
      setCarouselIndex((prev) => (prev - 1 + currentView.images!.length) % currentView.images!.length)
    }
  }

  const activeImgSrc = currentView.images ? currentView.images[carouselIndex] : currentView.src

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-background border-y border-border relative">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Inside the Interface
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore the actual application layout grids engineered to support autonomous motor-planning and cognitive clarity.
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto p-1.5 bg-muted rounded-2xl md:rounded-full">
          {screenshotTabs.map((tab) => {
            const isSelected = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl md:rounded-full text-xs md:text-sm font-semibold transition-all duration-200 relative ${
                  isSelected ? "text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeWorkspaceTab"
                    className="absolute inset-0 bg-primary rounded-xl md:rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <tab.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Main Display Box Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card p-6 md:p-10 rounded-3xl border border-border shadow-sm mb-16">
          
          {/* Workspace Explanation Block */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {currentView.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {currentView.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screen Showcase Wrapper with Carousel support */}
          <div className="lg:col-span-7 bg-muted/30 rounded-2xl border border-border/60 overflow-hidden shadow-inner aspect-[16/9] relative flex items-center justify-center group">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentView.id}-${carouselIndex}`}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full relative"
              >
                <img
                  src={activeImgSrc}
                  alt={currentView.imageAlt || currentView.label}
                  className="w-full h-full object-cover object-top select-none group-hover:scale-[1.01] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      const fallback = document.createElement("div")
                      fallback.className = "absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col items-center justify-center p-6 text-center text-xs text-muted-foreground font-mono"
                      fallback.innerHTML = `<span>[Active Matrix Frame: Image source linked to <strong>${activeImgSrc}</strong>]</span>`
                      parent.appendChild(fallback)
                    }
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls HUD */}
            {hasCarousel && currentView.images && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-background/70 px-3 py-1.5 rounded-full border border-border/40 backdrop-blur-sm z-20">
                  {currentView.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        carouselIndex === i ? "bg-primary w-4" : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Complete Core Modules List Section */}
        <div className="border-t border-border/60 pt-12">
          <div className="max-w-2xl mb-8">
            <h4 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              Complete Core Modules
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beyond the primary areas previewed above, all of these are detailed modules included in the app to provide expansive, well-rounded communicative resources across diverse environments.
            </p>
          </div>

          {/* Compact Responsive Grid: 2 columns on mobile, smaller padding and text sizing */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {otherModules.map((module, idx) => {
              const ModuleIcon = module.icon
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl bg-card/60 border border-border/50 hover:bg-card hover:border-border transition-colors duration-200"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <ModuleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-semibold text-foreground tracking-tight truncate">
                      {module.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-muted-foreground/80 mt-0.5 truncate">
                      {module.amharic}
                    </span>
                  </div>
                </div>
              )
            })}

            {/* Custom Vocabulary Upload Box - Tweaked to span 2 columns on mobile for layout harmony */}
            <div className="col-span-2 sm:col-span-1 flex items-center justify-between p-2.5 sm:p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-200 group cursor-pointer">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-primary">Custom Vocabulary</span>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground">Add personal assets</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary transform group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}