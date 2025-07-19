export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: "logos" | "posters" | "social-media" | "presentations" | "websites"
  image: string // Main thumbnail image
  images?: string[] // Array of additional images for detailed view
  technologies: string[]
  year: string
  liveUrl?: string
  githubUrl?: string
}

export const portfolioData: PortfolioItem[] = [
  // Logos
  {
    id: "1",
    title: "TechStart Logo",
    description: "Modern logo design for a technology startup, focusing on innovation and growth.",
    category: "logos",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=TechStart+Logo+Mockup+1",
      "/placeholder.svg?height=400&width=600&text=TechStart+Logo+Mockup+2",
      "/placeholder.svg?height=400&width=600&text=TechStart+Logo+Variations",
    ],
    technologies: ["Adobe Illustrator", "Figma"],
    year: "2024",
  },
  {
    id: "2",
    title: "Restaurant Brand Identity",
    description: "Complete brand identity package for a local restaurant, including logo, menu, and signage.",
    category: "logos",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Restaurant+Logo",
      "/placeholder.svg?height=400&width=600&text=Menu+Design",
      "/placeholder.svg?height=400&width=600&text=Signage+Mockup",
    ],
    technologies: ["Adobe Illustrator", "Photoshop"],
    year: "2024",
  },
  {
    id: "3",
    title: "Fitness App Logo",
    description: "Dynamic logo for a fitness tracking mobile application, conveying energy and progress.",
    category: "logos",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Fitness+App+Logo+Main",
      "/placeholder.svg?height=400&width=600&text=Fitness+App+Icon",
    ],
    technologies: ["Figma", "Adobe Illustrator"],
    year: "2023",
  },

  // Posters
  {
    id: "4",
    title: "Music Festival Poster",
    description: "Vibrant poster design for an annual music festival, capturing the energetic atmosphere.",
    category: "posters",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Music+Festival+Poster+Full",
      "/placeholder.svg?height=400&width=600&text=Music+Festival+Poster+Detail",
    ],
    technologies: ["Adobe Photoshop", "Illustrator"],
    year: "2024",
  },
  {
    id: "5",
    title: "Conference Event Poster",
    description: "Professional poster for a tech conference, designed for clarity and impact.",
    category: "posters",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Conference+Poster+A",
      "/placeholder.svg?height=400&width=600&text=Conference+Poster+B",
    ],
    technologies: ["Canva", "Photoshop"],
    year: "2024",
  },
  {
    id: "6",
    title: "Product Launch Poster",
    description: "Marketing poster for a new product launch, highlighting key features.",
    category: "posters",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Product+Launch+Poster+1",
      "/placeholder.svg?height=400&width=600&text=Product+Launch+Poster+2",
    ],
    technologies: ["Adobe Creative Suite"],
    year: "2023",
  },

  // Social Media
  {
    id: "7",
    title: "LinkedIn Post Series",
    description: "Engaging LinkedIn post templates for business content, designed for maximum reach.",
    category: "social-media",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=LinkedIn+Post+1",
      "/placeholder.svg?height=400&width=600&text=LinkedIn+Post+2",
      "/placeholder.svg?height=400&width=600&text=LinkedIn+Post+3",
    ],
    technologies: ["Canva", "Figma"],
    year: "2024",
  },
  {
    id: "8",
    title: "Instagram Story Templates",
    description: "Branded Instagram story templates for social media marketing, dynamic and interactive.",
    category: "social-media",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Instagram+Story+1",
      "/placeholder.svg?height=400&width=600&text=Instagram+Story+2",
    ],
    technologies: ["Canva", "Adobe Photoshop"],
    year: "2024",
  },
  {
    id: "9",
    title: "Facebook Ad Campaign",
    description: "Social media graphics for Facebook advertising campaign, optimized for conversions.",
    category: "social-media",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Facebook+Ad+1",
      "/placeholder.svg?height=400&width=600&text=Facebook+Ad+2",
    ],
    technologies: ["Canva", "Figma"],
    year: "2023",
  },

  // Presentations
  {
    id: "10",
    title: "Startup Pitch Deck",
    description: "Professional presentation for startup funding pitch, visually compelling and informative.",
    category: "presentations",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Pitch+Deck+Slide+1",
      "/placeholder.svg?height=400&width=600&text=Pitch+Deck+Slide+2",
      "/placeholder.svg?height=400&width=600&text=Pitch+Deck+Slide+3",
    ],
    technologies: ["PowerPoint", "Figma"],
    year: "2024",
  },
  {
    id: "11",
    title: "Sales Presentation",
    description: "Compelling sales presentation with data visualization, designed to close deals.",
    category: "presentations",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Sales+Presentation+1",
      "/placeholder.svg?height=400&width=600&text=Sales+Presentation+2",
    ],
    technologies: ["PowerPoint", "Adobe Creative Suite"],
    year: "2024",
  },
  {
    id: "12",
    title: "Training Workshop Slides",
    description: "Educational presentation for employee training workshop, clear and engaging.",
    category: "presentations",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Training+Slides+1",
      "/placeholder.svg?height=400&width=600&text=Training+Slides+2",
    ],
    technologies: ["PowerPoint", "Canva"],
    year: "2023",
  },

  // Websites
  {
    id: "13",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce website with payment integration, responsive and secure.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=E-commerce+Homepage",
      "/placeholder.svg?height=400&width=600&text=Product+Page",
      "/placeholder.svg?height=400&width=600&text=Checkout+Flow",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    year: "2024",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/farwa/ecommerce",
  },
  {
    id: "14",
    title: "Restaurant Website",
    description: "Responsive website for a local restaurant with online ordering, beautiful and functional.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Restaurant+Homepage",
      "/placeholder.svg?height=400&width=600&text=Menu+Page",
      "/placeholder.svg?height=400&width=600&text=Online+Ordering",
    ],
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    year: "2024",
    liveUrl: "https://example-restaurant.com",
  },
  {
    id: "15",
    title: "Portfolio Website",
    description: "Personal portfolio website for a photographer, showcasing stunning visuals.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Photographer+Portfolio+Home",
      "/placeholder.svg?height=400&width=600&text=Gallery+Page",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    year: "2023",
    liveUrl: "https://photographer-portfolio.com",
  },
  {
    id: "16",
    title: "SaaS Dashboard",
    description: "Modern dashboard for a SaaS application with analytics, intuitive and data-rich.",
    category: "websites",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
      "/placeholder.svg?height=400&width=600&text=Analytics+View",
    ],
    technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
    year: "2023",
    liveUrl: "https://saas-dashboard.com",
  },
]
