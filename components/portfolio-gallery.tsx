"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, Eye, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioGalleryProps {
  items: PortfolioItem[]
  title: string
  description: string
}

export function PortfolioGallery({ items, title, description }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0)

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
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-gray-900">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-white/90 text-pink-600 hover:bg-white"
                      onClick={() => openModal(item)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    {item.liveUrl && (
                      <Button size="sm" variant="secondary" asChild>
                        <Link href={item.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-pink-500/90 text-white border-0">{item.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h4>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-pink-200 text-pink-700">
                      {tech}
                    </Badge>
                  ))}
                  {item.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-pink-200 text-pink-700">
                      +{item.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for detailed view */}
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
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
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
