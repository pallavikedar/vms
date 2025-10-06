"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "VMS Group has transformed our facility management. Their attention to detail and commitment to excellence is unmatched.",
    author: "Corporate Client",
    company: "Reliance Industries Limited",
    role: "Facility Manager",
  },
  {
    quote:
      "Professional, reliable, and always responsive. VMS Group has been an invaluable partner for our operations.",
    author: "Operations Director",
    company: "MSG Service",
    role: "Director",
  },
  {
    quote: "The quality of service and dedication shown by VMS Group team is exceptional. Highly recommended!",
    author: "Business Owner",
    company: "Krishna Enterprises",
    role: "CEO",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#004AAD] to-[#0066E6] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD43B]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-12 relative"
          >
            <Quote className="w-16 h-16 text-[#FFD43B] mb-6" />

            <p
              className="text-2xl md:text-3xl text-white mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              "{testimonials[current].quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD43B] to-[#FFC107] rounded-full flex items-center justify-center text-2xl font-bold text-[#004AAD]">
                {testimonials[current].author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                  {testimonials[current].author}
                </div>
                <div className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? "bg-[#FFD43B] w-8" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
