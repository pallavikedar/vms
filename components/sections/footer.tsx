"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#004AAD] to-[#0066E6] text-white overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              <span className="text-white">VMS</span>
              <span className="text-[#FFD43B] text-sm block">GROUP</span>
            </div>
            <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              Empowering Growth, Engineering Excellence in Facility Management Services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-[#FFD43B] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80" style={{ fontFamily: "var(--font-inter)" }}>
              <li>Cleaning</li>
              <li>Repairing</li>
              <li>Electric Work</li>
              <li>Maintenance</li>
              <li>Fire Safety</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FFD43B] hover:text-[#004AAD] transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
            © 2023 VMS Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
