"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building, MapPin } from "lucide-react"

const clients = [
  { name: "Reliance Industries Limited", location: "Raipur, CG" },
  { name: "MSG Service", location: "Delhi" },
  { name: "Krishna Enterprises", location: "Indore, MP" },
  { name: "Pratap Technocrats Private Limited", location: "Raipur, CG" },
  { name: "QWIK Supply Chain Private Limited", location: "Raipur, CG" },
  { name: "Shri Ram Solutions", location: "Bhilai, CG" },
  { name: "Reliance Projects & Property Management Services Ltd", location: "Raipur, CG" },
  { name: "Reliance Projects & Property Management Services Ltd", location: "Mumbai" },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
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
            Our Portfolio
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our Valuable Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Trusted by leading corporations across India for exceptional facility management services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[#004AAD] to-[#0066E6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold text-[#004AAD] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {client.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#FFD43B]" />
                    <span style={{ fontFamily: "var(--font-inter)" }}>{client.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#004AAD]/10 to-[#FFD43B]/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#004AAD] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our Key Focus Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {["Comfort", "Health", "Safety"].map((focus, index) => (
                <motion.div
                  key={focus}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD43B] to-[#FFC107] rounded-full flex items-center justify-center text-2xl font-bold text-[#004AAD]">
                    {focus === "Comfort" && "🍃"}
                    {focus === "Health" && "➕"}
                    {focus === "Safety" && "⚠️"}
                  </div>
                  <span className="text-lg font-semibold text-[#004AAD]" style={{ fontFamily: "var(--font-inter)" }}>
                    {focus}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
