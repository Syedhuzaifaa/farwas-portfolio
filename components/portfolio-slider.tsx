"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Eye, Sparkles, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioSliderProps {
  items: PortfolioItem[]
  title: string
  description: string
}

export function PortfolioSlider({ items, title, description }: PortfolioSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
    setCurrentModalImageIndex(0) // Reset to first image when opening modal
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextModalImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentModalImageIndex((prevIndex) => (prevIndex + 1) % selectedItem.images!.length)
    }
  }

  const prevModalImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentModalImageIndex(
        (prevIndex) => (prevIndex - 1 + selectedItem.images!.length) % selectedItem.images!.length,
      )
    }
  }

  if (items.length === 0) return null

  return (
    <div className="mb-16 relative">
      {/* Background Animation */}
      <motion.div
        className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="h-6 w-6 text-pink-500 mr-2" />
          </motion.div>
          <motion.h3
            className="text-2xl md:text-3xl font-bold gradient-text"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {title}
          </motion.h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              className="w-full"
            >
              <Card className="overflow-hidden border-0 shadow-2xl glow-effect-strong hover-lift">
                <div className="relative">
                  <motion.div
                    className="relative overflow-hidden shadow-xl" // always shows shadow
                  >
                    <Image
                      src={items[currentIndex].image || "/placeholder.svg"}
                      alt={items[currentIndex].title}
                      width={800}
                      height={500}
                      className="w-full h-64 md:h-80 object-contain"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100"
                    />

                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge className="mb-2 bg-pink-500/90 text-white border-0 shadow-lg">
                        {items[currentIndex].category}
                      </Badge>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{items[currentIndex].title}</h4>
                      <p className="text-white/90 text-sm md:text-base">{items[currentIndex].description}</p>
                    </motion.div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {items[currentIndex].technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-100">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg"
                          onClick={() => openModal(items[currentIndex])} // Fixed: Open modal on click
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                      {items[currentIndex].liveUrl && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="outline" asChild className="hover-lift bg-transparent">
                            <Link href={items[currentIndex].liveUrl!} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 hover:bg-white shadow-lg rounded-full glow-effect"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6 text-pink-600" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/90 hover:bg-white shadow-lg rounded-full glow-effect"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6 text-pink-600" />
                </Button>
              </motion.div>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {items.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-6 gap-2 overflow-x-auto p-4"
          >
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                  ? "border-pink-500 scale-110 shadow-lg glow-effect"
                  : "border-gray-200 hover:border-pink-300"
                  }`}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Animated Dots Indicator */}
        {items.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-4 gap-2"
          >
            {items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-pink-500 scale-125 shadow-lg" : "bg-gray-300 hover:bg-pink-300"
                  }`}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Modal for detailed view (reused from PortfolioGallery) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full z-10"
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Image
                  src={selectedItem.images?.[currentModalImageIndex] || selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={500}
                  className="w-full h-64 md:h-80 object-contain rounded-t-2xl"
                />
                <Badge className="absolute top-4 left-4 bg-pink-500/90 text-white border-0">
                  {selectedItem.category}
                </Badge>

                {selectedItem.images && selectedItem.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
                      onClick={prevModalImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
                      onClick={nextModalImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {currentModalImageIndex + 1} / {selectedItem.images.length}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedItem.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-pink-200 text-pink-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selectedItem.liveUrl && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    >
                      <Link href={selectedItem.liveUrl} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Link>
                    </Button>
                  )}
                  {selectedItem.githubUrl && (
                    <Button variant="outline" asChild>
                      <Link href={selectedItem.githubUrl} target="_blank">
                        View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
