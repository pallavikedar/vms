"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Wrench, Zap, Settings, Shield, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description:
      "Professional cleaning solutions that maintain pristine corporate environments with eco-friendly practices.",
    features: ["Deep Cleaning", "Daily Maintenance", "Sanitization", "Waste Management"],
  },
  {
    icon: Wrench,
    title: "Repairing Services",
    description: "Expert repair and maintenance services to keep your facilities running smoothly and efficiently.",
    features: ["Quick Response", "Preventive Care", "Quality Parts", "Skilled Technicians"],
  },
  {
    icon: Zap,
    title: "Electric Work",
    description: "Comprehensive electrical services ensuring safety, efficiency, and compliance with all regulations.",
    features: ["Installation", "Troubleshooting", "Upgrades", "Emergency Support"],
  },
  {
    icon: Settings,
    title: "Service & Maintenance",
    description: "Proactive maintenance programs designed to extend equipment life and minimize downtime.",
    features: ["Scheduled Maintenance", "Equipment Care", "Performance Monitoring", "24/7 Support"],
  },
  {
    icon: Shield,
    title: "Fire Safety",
    description: "Complete fire safety solutions including prevention, detection, and emergency response systems.",
    features: ["Fire Alarms", "Extinguishers", "Safety Training", "Compliance Audits"],
  },
  {
    icon: CheckCircle,
    title: "Security Surveillance",
    description: "Advanced security systems providing round-the-clock monitoring and protection for your facilities.",
    features: ["CCTV Systems", "Access Control", "Monitoring", "Incident Response"],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#FFD43B]/20 via-white to-[#FFD43B]/10 relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle, #FFD43B 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-[#004AAD] font-semibold text-sm uppercase tracking-wider mb-4 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Services
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Comprehensive Facility Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            We provide our customers with the most complete and comprehensive services in the facility management
            industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#FFD43B] group">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#FFD43B] to-[#FFC107] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-[#004AAD]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-[#004AAD] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#FFD43B] rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
