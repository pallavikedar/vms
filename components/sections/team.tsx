"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Users } from "lucide-react"

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            className="text-[#FFD43B] font-semibold text-sm uppercase tracking-wider mb-4 block"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Team
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-8"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Dedicated Professionals
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-[#004AAD] to-[#0066E6] rounded-3xl p-12 text-white"
          >
            <motion.div
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-12 h-12 text-white" />
            </motion.div>

            <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)" }}>
              "Today, as we look back, we are filled with immense gratitude towards our corporate clients and our
              dedicated team who have been the backbone of our journey."
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                { number: "50+", label: "Team Members" },
                { number: "100+", label: "Projects Completed" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div
                    className="text-white/80 text-sm uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 mt-12 italic"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Join us as we continue to nurture corporate spaces with the warmth and dedication that our rich traditions
            have taught us. Let's make every corner of your business shine with pride and care.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
