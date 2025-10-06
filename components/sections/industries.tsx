"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Factory, ShoppingBag, GraduationCap, Hospital, Hotel } from "lucide-react"

const industries = [
  { icon: Building2, name: "Corporate Offices", color: "#004AAD" },
  { icon: Factory, name: "Manufacturing", color: "#0066E6" },
  { icon: ShoppingBag, name: "Retail & Commercial", color: "#FFD43B" },
  { icon: GraduationCap, name: "Educational Institutions", color: "#FFC107" },
  { icon: Hospital, name: "Healthcare Facilities", color: "#004AAD" },
  { icon: Hotel, name: "Hospitality", color: "#0066E6" },
]

const benefits = [
  { label: "Safety", color: "#004AAD" },
  { label: "Efficiency", color: "#0066E6" },
  { label: "Longevity", color: "#FFD43B" },
  { label: "Compliance", color: "#FFC107" },
  { label: "Business Continuity", color: "#004AAD" },
  { label: "Brand Image", color: "#0066E6" },
]

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="industries" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-[#FFD43B] font-semibold text-sm uppercase tracking-wider mb-4 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Industries We Serve
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Trusted Across Multiple Sectors
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${industry.color}20` }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <industry.icon className="w-10 h-10" style={{ color: industry.color }} />
                </motion.div>
                <h3
                  className="text-xl font-bold text-center text-[#004AAD]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-[#004AAD] to-[#0066E6] rounded-3xl p-12 text-white"
        >
          <h3
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            All These Benefits Are Incorporated
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-lg font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
                    {benefit.label}
                  </span>
                </div>
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FFD43B] rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
