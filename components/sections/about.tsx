"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Target, Award } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Care & Commitment",
    description: "Every corporate space deserves to be cared for as a home, and every client treated as family.",
  },
  {
    icon: Users,
    title: "Trust & Togetherness",
    description: "Built on enduring friendship and shared dreams, we bring people together through excellence.",
  },
  {
    icon: Target,
    title: "Reliability & Efficiency",
    description: "Transforming facility maintenance with dependable service and operational excellence.",
  },
  {
    icon: Award,
    title: "Quality & Excellence",
    description: "Specialized quality service infused with rich heritage and modern innovation.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD43B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004AAD]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
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
            About VMS Group
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            A Journey of Trust and Togetherness
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Two years ago, a shared dream and a spirit of enduring friendship brought three young friends together to
            embark on a unique venture—VMS GROUP. Our aim was to transform the landscape of facility maintenance
            services with a special focus on the corporate sector, infused with the rich Indian heritage of care and
            commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#004AAD] to-[#0066E6] rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-[#004AAD] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto italic" style={{ fontFamily: "var(--font-inter)" }}>
            "Today, as we look back, we are filled with immense gratitude towards our corporate clients and our
            dedicated team who have been the backbone of our journey. It is your trust and support that have turned our
            humble beginnings into a thriving promise of specialized quality and excellence."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
