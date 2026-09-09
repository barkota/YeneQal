"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Volume2, Trash2, Home, Users, Utensils, Heart, Clock,
  Gamepad2, Book, Paintbrush, Music, Smile, Frown, CircleHelp
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Updated Vocabulary with local audio paths
const vocabularyItems: Record<string, Array<{
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>; // Made optional
  imageSrc?: string; // New field for PNGs/JPEGs
  amharic: string;
  audio: string;
}>> = {
  home: [
    { id: "des_alegn", label: "Des Alegn", imageSrc: "/icons/des_alegn.png", amharic: "ደስ አለኝ", audio: "/audio/des_alegn.mp3" },
    { id: "tegnahu", label: "Tegnahu", imageSrc: "/icons/tegnahu.png", amharic: "ተኛሁ", audio: "/audio/tegnahu.mp3" },
    { id: "light", label: "Setehu", imageSrc: "/icons/setehu.png", amharic: "ሰጠሁ", audio: "/audio/setehu.mp3" },
    { id: "help_home", label: "Askemetku", imageSrc: "/icons/askemetku.png", amharic: "አስቀመጥኩ", audio: "/audio/askemetku.mp3" },
  ],
  people: [
    { id: "ene", label: "Me", imageSrc: "/icons/ene.png", amharic: "እኔ", audio: "/audio/ene.mp3" },
    { id: "anchi", label: "You", imageSrc: "/icons/anchi.png", amharic: "አንቺ", audio: "/audio/anchi.mp3" },
    { id: "ante", label: "You", imageSrc: "/icons/ante.png", amharic: "አንተ", audio: "/audio/ante.mp3" },
    { id: "esu", label: "Him", imageSrc: "/icons/esu.png", amharic: "እሱ", audio: "/audio/esu.mp3" },
  ],
  food: [
    { id: "injera", label: "Injera", imageSrc: "/icons/injera.png", amharic: "እንጀራ", audio: "/audio/injera.mp3" },
    { id: "wiha", label: "Water", imageSrc: "/icons/wiha.png", amharic: "ውሃ", audio: "/audio/wiha.mp3" },
    { id: "wetet", label: "Milk", imageSrc: "/icons/wetet.png", amharic: "ወተት", audio: "/audio/wetet.mp3" },
    { id: "biscuit", label: "Cookies", imageSrc: "/icons/biscuit.png", amharic: "ብስኩት", audio: "/audio/biscuit.mp3" },
  ],
  feelings: [
    { id: "eyasebku", label: "I'm Thinking", imageSrc: "/icons/eyasebku.png", amharic: "እያሰብኩኝ ነው", audio: "/audio/eyasebku.mp3" },
    { id: "erbognal", label: "I'm Hungry", imageSrc: "/icons/erbognal.png", amharic: "እርቦኛል", audio: "/audio/erbognal.mp3" },
    { id: "temagn", label: "I'm Thirsty", imageSrc: "/icons/temagn.png", amharic: "ጠማኝ", audio: "/audio/temagn.mp3" },
    { id: "ferahugn", label: "I'm Scared", imageSrc: "/icons/ferahugn.png", amharic: "ፈራሁኝ", audio: "/audio/ferahugn.mp3" },
  ],
  activities: [
    { id: "metahu", label: "I'm Coming", imageSrc: "/icons/metahu.png", amharic: "መጣሁ", audio: "/audio/metahu.mp3" },
    { id: "rotku", label: "I ran", imageSrc: "/icons/rotku.png", amharic: "ሮጥኩ", audio: "/audio/rotku.mp3" },
    { id: "techawetku", label: "I played", imageSrc: "/icons/techawetku.png", amharic: "ተጫወትኩ", audio: "/audio/techawetku.mp3" },
    { id: "zemerku", label: "I sang", imageSrc: "/icons/zemerku.png", amharic: "ዘመርኩ", audio: "/audio/zemerku.mp3" },
  ],
  time: [
    { id: "ahun", label: "Now", imageSrc: "/icons/ahun.png", amharic: "አሁን", audio: "/audio/ahun.mp3" },
    { id: "nege", label: "Tomorrow", imageSrc: "/icons/nege.png", amharic: "ነገ", audio: "/audio/nege.mp3" },
    { id: "ken", label: "Day", imageSrc: "/icons/ken.png", amharic: "ቀን", audio: "/audio/ken.mp3" },
    { id: "amet", label: "Year", imageSrc: "/icons/amet.png", amharic: "አመት", audio: "/audio/amet.mp3" },
  ],
}

const categories = [
  { id: "home", label: "Home", icon: Home, color: "#3b82f6" },
  { id: "people", label: "People", icon: Users, color: "#FF8FC7" },
  { id: "food", label: "Food", icon: Utensils, color: "#67879D" },
  { id: "feelings", label: "Feelings", icon: Heart, color: "#54C048" },
  { id: "activities", label: "Activities", icon: Gamepad2, color: "#F4B1ED" },
  { id: "time", label: "Time", icon: Clock, color: "#85b903" },
]

const homeItemColors = [
  "bg-primary/90 hover:bg-primary",
  "bg-secondary hover:bg-secondary/90",
  "bg-accent hover:bg-accent/90",
  "bg-teal hover:bg-teal/90",
]

export function DemoPreview() {
  const [activeCategory, setActiveCategory] = useState("food")
  const [selectedItems, setSelectedItems] = useState<Array<{ id: string; label: string; amharic: string; audio: string }>>([])
  const [isSpeaking, setIsSpeaking] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Isolated reusable audio engine
  const playAudio = (path: string) => {
    return new Promise((resolve) => {
      // Cut off any currently running single-word audio stream
      if (audioRef.current) {
        audioRef.current.pause()
      }
      
      const audio = new Audio(path)
      audioRef.current = audio
      audio.onended = () => {
        audioRef.current = null
        resolve(true)
      }
      audio.onerror = () => {
        console.warn(`Audio not found at ${path}. Skipping...`)
        resolve(false)
      }
      audio.play().catch(() => resolve(false))
    })
  }

  // Modified to trigger audio instantly when a word tile is clicked
  const handleItemClick = async (item: any) => {
    if (selectedItems.length < 6) {
      setSelectedItems([...selectedItems, item])
    }
    // Fires up audio on tap if the main full-sentence reader isn't busy
    if (!isSpeaking) {
      await playAudio(item.audio)
    }
  }

  // Sequential continuous loop playback engine for reading full message strings
  const handleSpeak = async () => {
    if (selectedItems.length === 0 || isSpeaking) return

    setIsSpeaking(true)

    for (const item of selectedItems) {
      await playAudio(item.audio)
      await new Promise(r => setTimeout(r, 150))
    }

    setIsSpeaking(false)
  }

  const handleClear = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setSelectedItems([])
    setIsSpeaking(false)
  }

  const currentCategoryObj = categories.find(c => c.id === activeCategory)

  return (
    <section id="demo" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Try it yourself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tap a few pictures to build a message, then press ተናገር to hear it spoken aloud.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-3xl shadow-xl border border-border overflow-hidden">
            {/* Message Strip */}
            <div className="p-4 bg-muted border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0 min-h-[56px] bg-background rounded-2xl border border-border px-4 py-2 flex items-center gap-2 flex-wrap">
                  {selectedItems.length === 0 ? (
                    <span className="text-muted-foreground">Tap the pictures below to build a message…</span>
                  ) : (
                    selectedItems.map((item, index) => (
                      <span
                        key={`${item.id}-${index}`}
                        className="px-3 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        <span className="text-accent">{item.amharic}</span>
                        <span className="text-muted-foreground">({item.label})</span>
                      </span>
                    ))
                  )}
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Clear (አጥፋ) - deliberately secondary: outlined, never competes with Speak */}
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="flex-1 sm:flex-none h-11 rounded-xl flex items-center justify-center gap-2 px-3 md:px-4 font-semibold tracking-wide border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground active:bg-muted/80 transition-colors"
                  aria-disabled={selectedItems.length === 0}
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="text-sm md:text-base">አጥፋ</span>
                </Button>

                {/* Speak (ተናገር) - the primary control. Solid brand orange, white label at 4.6:1. */}
                <Button
                  onClick={handleSpeak}
                  className={`flex-1 sm:flex-none h-11 rounded-xl flex items-center justify-center gap-2 px-4 md:px-6 font-bold tracking-wide text-white shadow-md transition-colors focus-visible:ring-4 focus-visible:ring-primary/30 ${
                    isSpeaking
                      ? "bg-teal hover:bg-teal"
                      : "bg-primary-strong hover:bg-primary-strong-hover active:bg-primary-strong-active"
                  }`}
                  aria-disabled={selectedItems.length === 0}
                  aria-label="Speak the message"
                >
                  <Volume2 className={`w-5 h-5 ${isSpeaking ? "animate-pulse" : ""}`} />
                  <span className="text-sm md:text-base">ተናገር</span>
                </Button>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="p-4 border-b border-border overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => {
                  const isCurrentActive = activeCategory === category.id
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      style={isCurrentActive && category.id !== "home" ? { backgroundColor: category.color } : {}}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all duration-200 ${
                        isCurrentActive
                          ? category.id === "home" 
                            ? "bg-primary text-white shadow-md" 
                            : "text-white shadow-md"
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Vocabulary Grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vocabularyItems[activeCategory]?.map((item, index) => {
                  const isHome = activeCategory === "home"
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => handleItemClick(item)}
                      style={!isHome ? { backgroundColor: currentCategoryObj?.color } : {}}
                      className={`p-6 rounded-2xl flex flex-col items-center gap-3 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 text-shadow-sm ${
                        isHome ? homeItemColors[index % homeItemColors.length] : "hover:opacity-95"
                      }`}
                    >
                      {item.imageSrc ? (
                        <img 
                          src={item.imageSrc} 
                          alt={item.label} 
                          className="w-15 h-15 object-contain" 
                        />
                      ) : (item.icon && typeof item.icon !== 'string') ? (
                        <item.icon className="w-15 h-15" />
                      ) : null}
                      <div className="text-center">
                        <div className="text-lg font-bold">{item.amharic}</div>
                        <div className="text-sm opacity-80">{item.label}</div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}