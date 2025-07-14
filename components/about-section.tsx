"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Palette, Sparkles, Heart, Award, Star, Zap } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Figma",
    "Canva",
    "Adobe Creative Suite",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "UI/UX Design",
    "Logo Design",
    "Brand Identity",
    "Social Media Design",
    "Print Design",
    "Typography",
  ]

  const stats = [
    { icon: Palette, label: "Design Projects", value: "200+", color: "text-pink-500" },
    { icon: Heart, label: "Happy Clients", value: "50+", color: "text-purple-500" },
    { icon: Award, label: "Years Experience", value: "4+", color: "text-rose-500" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            I'm a passionate creative designer who believes in the power of visual storytelling. With a keen eye for
            detail and a love for beautiful aesthetics, I help brands and individuals express their unique identity
            through stunning design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <div className="flex items-center mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8 text-pink-500 mr-3" />
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text-alt">My Creative Journey</h3>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              My journey began with a simple love for colors and creativity. What started as doodling in notebooks has
              evolved into a professional career helping brands tell their stories through compelling visual design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6"
            >
              I specialize in creating cohesive brand identities, eye-catching social media content, and memorable
              marketing materials. Every project is an opportunity to blend creativity with strategy, ensuring that
              beautiful design also drives results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              When I'm not designing, you can find me exploring art galleries, experimenting with new color palettes, or
              sharing design tips on social media. I believe that great design has the power to inspire, connect, and
              transform. ✨
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <Card className="text-center border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover-lift glow-effect">
                  <CardContent className="p-6 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50 opacity-0 hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color} relative z-10`} />
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold mb-2 gradient-text relative z-10"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="h-6 w-6 text-pink-500 mr-2" />
            </motion.div>
            <h3 className="text-2xl font-bold text-center gradient-text-alt">Skills & Tools</h3>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Star className="h-6 w-6 text-purple-500 ml-2" />
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="text-sm py-2 px-4 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 border-pink-200 hover:from-pink-200 hover:to-purple-200 transition-all cursor-pointer hover-lift">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
