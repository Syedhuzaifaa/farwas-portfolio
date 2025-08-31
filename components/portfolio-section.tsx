"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"
import { PortfolioSlider } from "./portfolio-slider"
import { PortfolioGallery } from "./portfolio-gallery"

export function PortfolioSection() {
  const logoProjects = portfolioData.filter((project) => project.category === "logos")
  const figmaProjects = portfolioData.filter((project) => project.category === "figma")
  const figmasProjects = portfolioData.filter((project) => project.category === "figmas")
  const posterProjects = portfolioData.filter((project) => project.category === "posters")
  const socialMediaProjects = portfolioData.filter((project) => project.category === "social-media")
  const presentationProjects = portfolioData.filter((project) => project.category === "presentations")
  const websiteProjects = portfolioData.filter((project) => project.category === "websites")

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-rose-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Creative Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my diverse collection of creative work spanning design and digital experiences
          </p>
        </motion.div>

        {/* Logo Design Slider */}
        <PortfolioSlider
          items={figmaProjects}
          title="📊 Figma UI/UX"
          description="Designing clean, user-friendly interfaces in Figma for web and mobile applications."
        />
         <PortfolioSlider
          items={figmasProjects}
          title="📊 Figma Posters Design"
          description="Designing clean, user-friendly interfaces in Figma for Social Media Marketing"
        />
        <PortfolioGallery
          items={logoProjects}
          title="✨ Logo Design"
          description="Brand identities that make lasting impressions"
        />
        <PortfolioSlider
          items={presentationProjects}
          title="📊 Presentation Design"
          description="Professional presentations that communicate effectively"
        />

        <PortfolioGallery
          items={posterProjects}
          title="🎨 Poster Design"
          description="Eye-catching posters for events and campaigns"
        />

        {/* Poster Design Gallery */}




        {/* Social Media Content Slider */}
        {/* <PortfolioSlider
          items={socialMediaProjects}
          title="📱 Social Media Content"
          description="Engaging content that boosts online presence"
        /> */}

        {/* Presentation Design Gallery */}

        {/* Website Projects Slider */}
        {websiteProjects.length > 0 && (
          <PortfolioSlider
            items={websiteProjects}
            title="💻 Web Development"
            description="Modern websites with beautiful design and functionality"
          />
        )}
      </div>
    </section>
  )
}
