"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Palette, Code, Smartphone, PenTool, Globe, Layers, FileText, Share2 } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Custom logo design that captures your brand identity and makes a lasting impression.",
      features: ["Brand Identity", "Vector Graphics", "Multiple Variations", "Brand Guidelines"],
      category: "Design",
    },
    {
      icon: FileText,
      title: "Poster Design",
      description: "Eye-catching posters for events, marketing campaigns, and promotional materials.",
      features: ["Print Ready", "Digital Formats", "Creative Concepts", "Fast Turnaround"],
      category: "Design",
    },
    {
      icon: Share2,
      title: "Social Media Content",
      description: "Engaging social media posts and graphics that boost your online presence.",
      features: ["LinkedIn Posts", "Instagram Graphics", "Facebook Covers", "Story Templates"],
      category: "Design",
    },
    {
      icon: PenTool,
      title: "Presentation Design",
      description: "Professional PowerPoint presentations that communicate your message effectively.",
      features: ["Custom Templates", "Data Visualization", "Interactive Elements", "Brand Consistency"],
      category: "Design",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies and best practices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "CMS Integration"],
      category: "Development",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      category: "Design",
    },
    {
      icon: Code,
      title: "Custom Web Apps",
      description: "Full-stack web applications tailored to your specific business needs.",
      features: ["Database Design", "API Development", "Authentication", "Cloud Deployment"],
      category: "Development",
    },
    {
      icon: Layers,
      title: "Frontend Development",
      description: "Modern frontend solutions using React, Next.js, and other cutting-edge technologies.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "State Management"],
      category: "Development",
    },
  ]

  const designServices = services.filter((service) => service.category === "Design")
  const developmentServices = services.filter((service) => service.category === "Development")

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From creative design to full-stack development, I offer comprehensive solutions to bring your digital vision
            to life
          </p>
        </motion.div>

        {/* Design Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Palette className="inline-block mr-2 h-6 w-6" />
            Design Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <Code className="inline-block mr-2 h-6 w-6" />
            Web Development Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs mr-2 mb-2">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
