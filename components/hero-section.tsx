  "use client"

  import { Button } from "@/components/ui/button"
  import { ArrowDown, Download, Sparkles, Star, Heart } from "lucide-react"
  import Image from "next/image"
  import Link from "next/link"
  import { motion } from "framer-motion"
  import { useEffect, useState } from "react"
  import { AnimatePresence } from "framer-motion"

  
  export function HeroSection() {
    const [particles, setParticles] = useState<JSX.Element[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        // Get exact mouse position relative to viewport
        const rect = document.documentElement.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }

      const handleMouseEnter = () => setIsHovering(true)
      const handleMouseLeave = () => setIsHovering(false)

      // Add event listener to the document
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseenter", handleMouseEnter)
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }, [])
useEffect(() => {
  const newParticles = [...Array(8)].map((_, i) => {
    const left = `${Math.random() * 100}%`;
    const width = `${Math.random() * 3 + 1}px`;
    const height = `${Math.random() * 3 + 1}px`;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 8;

    return (
      <motion.div
        key={i}
        className="particle bg-pink-200/5 absolute"
        style={{ left, width, height }}
        animate={{
          y: [window.innerHeight, -100],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          delay,
          ease: "linear",
        }}
      />
    );
  });

  setParticles(newParticles);
}, []);

    return (
      <section
        id="home"
        className="pt-12 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Shapes - Much more subtle */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-rose-300/30 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
          />

          {/* Much more subtle geometric shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-200/5 to-purple-200/5"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-rose-200/8 to-pink-200/8 rounded-lg"
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Much more subtle particle effect */}
          <div className="particles absolute inset-0">{particles}</div>

        </div>

      {/* Creative Mouse Follow Effects */}
      {/* Constellation Effect - Main cursor */}
      <div
        className="fixed pointer-events-none z-20 w-6 h-6"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      >
        <div className="relative w-full h-full">
          {/* Center star */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
            animate={{
              scale: isHovering ? [1, 1.3, 1] : 1,
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 0.8, repeat: Number.POSITIVE_INFINITY },
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
          />

          {/* Orbiting elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-300 to-rose-300 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: [0 + i * 60, 360 + i * 60],
                scale: isHovering ? [0.5, 1, 0.5] : 0.5,
              }}
              transition={{
                rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
              }}
              initial={{
                x: 25 * Math.cos((i * 60 * Math.PI) / 180) - 4,
                y: 25 * Math.sin((i * 60 * Math.PI) / 180) - 4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Trailing Sparkles */}
      <div
        className="fixed pointer-events-none z-10 w-3 h-3"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y + 20,
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-40"
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div
        className="fixed pointer-events-none z-10 w-2 h-2"
        style={{
          left: mousePosition.x + 15,
          top: mousePosition.y + 25,
          transition: "left 0.2s ease-out, top 0.2s ease-out",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-50"
          animate={{
            scale: [0, 1.2, 0],
            rotate: [0, -180],
          }}
          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Geometric Trail */}
      <div
        className="fixed pointer-events-none z-10 w-4 h-4"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y + 35,
          transition: "left 0.18s ease-out, top 0.18s ease-out",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-teal-300 to-green-300 opacity-30"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Ripple Effect on Hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed pointer-events-none z-5 w-24 h-24"
            style={{
              left: mousePosition.x - 48,
              top: mousePosition.y - 48,
            }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{
              scale: 3,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full border-2 border-pink-300/30 rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8 relative"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <Image
                src="/farwa.webp?height=200&width=200"
                alt="Creative Designer"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-pink-300 shadow-2xl glow-effect-strong relative z-10"
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full p-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -360],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Heart className="h-5 w-5 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <motion.span
              className="text-shimmer"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Farwa
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium gradient-text-alt"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Creative Designer & Visual Storyteller
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            I create stunning visual designs that capture hearts and tell compelling stories through logos, posters,
            social media content, and beautiful presentations ✨
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all glow-effect"
                asChild
              >
                <Link href="#portfolio">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                  </motion.div>
                  View My Work
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-white/80 backdrop-blur-sm hover-lift"
                asChild
              >
                <Link href="#contact">Let's Collaborate</Link>
              </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="ghost"
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 bg-white/50 backdrop-blur-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div> */}
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute top-1/2 left-10 hidden lg:block">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Star className="h-8 w-8 text-pink-400 opacity-60" />
            </motion.div>
          </div>
          <div className="absolute top-1/3 right-10 hidden lg:block">
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -15, 0],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              <Heart className="h-6 w-6 text-purple-400 opacity-60" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-pink-600 mb-2">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-pink-500" />
        </motion.div>
      </motion.div> */}
    </section>
  )
}
