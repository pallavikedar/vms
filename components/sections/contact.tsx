"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            Contact Us
          </motion.span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#004AAD] mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Ready to transform your facility management? Contact us today for a consultation.
          </p>
        </motion.div>

        <div className=" gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#004AAD] to-[#0066E6] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      India Office
                    </div>
                    <div className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                      St. 02, H.No. 302, Smriti Nagar
                      <br />
                      Junwani, Bhilai, Durg (CG) 490020
                    </div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      Phone
                    </div>
                    <div className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    
                      <br />
                      +91 7771914952, 7974786200
                    </div>
                  </div>
                </motion.div>

               
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
         
        </div>
      </div>
    </section>
  )
}
