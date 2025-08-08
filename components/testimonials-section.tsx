"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
  {
    id: 1,
    name: "Ayesha Malik",
    role: "Marketing Manager",
    company: "Visionary Brands",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Farwa created a stunning logo and complete brand identity for us. Her attention to detail and creative direction truly brought our vision to life.",
  },
  {
    id: 2,
    name: "Omar Siddiqui",
    role: "Startup Founder",
    company: "PitchPoint",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "The PowerPoint presentation Farwa designed was instrumental in helping us secure funding. It was sleek, professional, and perfectly aligned with our brand.",
  },
  {
    id: 3,
    name: "Sana Raza",
    role: "Event Organizer",
    company: "Creative Minds",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Farwa's poster designs made our event stand out. The visuals were vibrant, clear, and captured the essence of our theme beautifully.",
  },
  {
    id: 4,
    name: "Bilal Khan",
    role: "Product Manager",
    company: "NextGen Apps",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "We hired Farwa to design our mobile app UI, and the results were beyond impressive. Clean layouts, user-friendly interfaces, and a modern look throughout.",
  },
  {
    id: 5,
    name: "Mehwish Tariq",
    role: "Small Business Owner",
    company: "Blossom Boutique",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "Farwa developed our business website from scratch. It's responsive, elegant, and exactly what we needed to attract more customers online.",
  },
  {
    id: 6,
    name: "Ali Hamza",
    role: "Corporate Trainer",
    company: "SkillBridge",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    quote:
      "The presentation deck Farwa created was engaging and visually powerful. It kept our audience hooked throughout the session.",
  },
];


  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
