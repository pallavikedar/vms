"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import {
  ArrowRight,
  Wrench,
  Zap,
  Settings,
  Shield,
  Video,
  Droplets,
} from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });
  const [isClient, setIsClient] = useState(false);

  const services = [
    { name: "Cleaning", icon: Droplets },
    { name: "Repairing", icon: Wrench },
    { name: "Electric Work", icon: Zap },
    { name: "Maintenance", icon: Settings },
    { name: "Fire Safety", icon: Shield },
    { name: "Security", icon: Shield },
    { name: "CCTV", icon: Video },
  ];

  // ✅ Update window size and mark as client
  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  // ✅ Hook-safe transforms (always called)
  const x1 = useTransform(mouseX, [0, windowSize.width], [-20, 20]);
  const y1 = useTransform(mouseY, [0, windowSize.height], [-20, 20]);
  const x2 = useTransform(mouseX, [0, windowSize.width], [20, -20]);
  const y2 = useTransform(mouseY, [0, windowSize.height], [20, -20]);

  // ✅ Auto-rotate service highlight
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#004AAD] via-[#0066E6] to-[#004AAD]"
    >
      {/* ✅ Render motion only after client mounts */}
      {isClient && (
        <>
          <motion.div
            style={{ x: x1, y: y1 }}
            className="absolute top-20 left-20 w-64 h-64 bg-[#FFD43B] rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            style={{ x: x2, y: y2 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFC107] rounded-full opacity-20 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </>
      )}
      {/* Floating shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-3 h-3 border-2 border-white/40 rounded-full" />
          ) : i % 3 === 1 ? (
            <div className="w-4 h-4 border-2 border-[#FFD43B]/40 rotate-45" />
          ) : (
            <div className="w-3 h-3 bg-white/30 rounded-sm" />
          )}
        </motion.div>
      ))}

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 relative z-10 mt-30">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="bg-gradient-to-r from-[#FFD43B] via-[#FFC107] to-[#FFD43B] bg-clip-text text-transparent">
              Corporate Spaces
            </span>
          </motion.h1>

          {/* Services carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = activeServiceIndex === index
                return (
                  <motion.div
                    key={service.name}
                    className="relative group"
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      y: isActive ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="relative px-3 py-4 rounded-2xl backdrop-blur-md border-2 transition-all duration-500 overflow-hidden"
                      style={{
                        borderColor: isActive ? "#FFD43B" : "rgba(255, 255, 255, 0.2)",
                        backgroundColor: isActive
                          ? "rgba(255, 212, 59, 0.15)"
                          : "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeServiceGlow"
                          className="absolute inset-0 bg-gradient-to-br from-[#FFD43B]/30 to-[#FFC107]/30 rounded-2xl"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      <motion.div
                        className="relative z-10 flex flex-col items-center gap-2"
                        animate={{
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            backgroundColor: isActive
                              ? "#FFD43B"
                              : "rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <Icon
                            className="w-5 h-5 transition-colors duration-300"
                            style={{
                              color: isActive
                                ? "#004AAD"
                                : "rgba(255, 255, 255, 0.9)",
                            }}
                          />
                        </div>
                        <span
                          className="text-xs md:text-sm font-medium transition-colors duration-300 text-center"
                          style={{
                            color: isActive ? "#FFD43B" : "rgba(255, 255, 255, 0.9)",
                            fontFamily: "var(--font-inter)",
                          }}
                        >
                          {service.name}
                        </span>
                      </motion.div>

                      {isActive && (
                        <motion.div
                          className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FFD43B] rounded-full shadow-lg shadow-[#FFD43B]/50"
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Professional facility management services that transform corporate
            spaces with care, commitment, and excellence. Experience the perfect
            blend of reliability and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#FFD43B] text-[#004AAD] hover:bg-[#FFC107] text-lg px-10 py-7 group shadow-xl shadow-[#FFD43B]/20 font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-lg px-10 py-7 font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-20"
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-[#FFD43B] mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-white/70"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp & Call Icons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/7771914952" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all"
        >
          <FaWhatsapp  className="w-7 h-7" />
        </motion.a>

        {/* Call */}
        <motion.a
          href="tel:+917974786200" // Replace with your phone number
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFD43B] text-[#004AAD] shadow-lg shadow-[#FFD43B]/30 hover:bg-[#FFC107] transition-all"
        >
          <IoCall  className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
