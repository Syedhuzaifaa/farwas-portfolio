"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Farwa  Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "John delivered an exceptional website that perfectly captured our brand. His attention to detail and creative vision exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Solutions",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "Working with John was a pleasure. He created stunning social media graphics that significantly boosted our engagement rates.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCorp",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "John's full-stack development skills are impressive. He built our web application from scratch and delivered it on time and within budget.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Startup Founder",
      company: "GrowthLab",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The logo and brand identity John created for us perfectly represents our company values. Highly recommended for any design work.",
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Event Coordinator",
      company: "EventPro",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "John designed amazing posters for our events. His creative approach and quick turnaround made our collaboration seamless.",
    },
    {
      id: 6,
      name: "Alex Kumar",
      role: "Business Owner",
      company: "Local Restaurant",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The presentation design John created helped us secure important investors. His work is professional and impactful.",
    },
  ]

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
