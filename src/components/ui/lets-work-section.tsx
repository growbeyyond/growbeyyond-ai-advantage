"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Calendar } from "lucide-react"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  const handleBookCall = () => {
    window.open("https://calendly.com/growbeyyond", "_blank")
  }

  return (
    <section className="relative w-full min-h-[600px] bg-background overflow-hidden py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Elegant heading */}
          <div className="mb-12">
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Perfect
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Let's talk
            </h2>
          </div>

          {/* Book a call button */}
          <button
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative flex items-center gap-4 transition-all duration-500 cursor-pointer"
            style={{
              transform: showSuccess
                ? isButtonHovered
                  ? "translateY(0) scale(1.02)"
                  : "translateY(0) scale(1)"
                : "translateY(15px) scale(1)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "150ms",
            }}
          >
            {/* Left line */}
            <div className="w-12 h-px bg-border group-hover:w-20 transition-all duration-300" />

            {/* Button content */}
            <div className="flex items-center gap-3 px-6 py-3 border border-border rounded-full group-hover:border-primary transition-colors duration-300">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                Book a call
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>

            {/* Right line */}
            <div className="w-12 h-px bg-border group-hover:w-20 transition-all duration-300" />
          </button>

          {/* Subtle subtext */}
          <p className="text-sm text-muted-foreground mt-4 opacity-70">
            15 min intro call
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-sm text-muted-foreground">
            Available for projects
          </span>
        </div>

        <div
          className="relative mt-16 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => handleClick(e as unknown as React.MouseEvent)}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden">
              <div className="flex flex-col items-center">
                <span
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground transition-all duration-700"
                  style={{
                    transform: isClicked ? "translateY(-100%)" : "translateY(0)",
                    opacity: isClicked ? 0 : 1,
                  }}
                >
                  Let's work
                </span>
              </div>
              <div className="flex flex-col items-center -mt-2">
                <span
                  className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-700"
                  style={{
                    transform: isClicked ? "translateY(-100%)" : "translateY(0)",
                    opacity: isClicked ? 0 : 1,
                    transitionDelay: "50ms",
                  }}
                >
                  together
                </span>
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: isHovered && !isClicked ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <ArrowUpRight
                className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: isClicked ? "translateY(-20px)" : "translateY(0)",
                  opacity: isClicked ? 0 : undefined,
                }}
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div
            className="absolute -left-10 top-1/2 w-20 h-px bg-gradient-to-r from-transparent to-border transition-all duration-500"
            style={{
              width: isHovered ? "100px" : "80px",
              opacity: isHovered ? 1 : 0.5,
            }}
          />
          <div
            className="absolute -right-10 top-1/2 w-20 h-px bg-gradient-to-l from-transparent to-border transition-all duration-500"
            style={{
              width: isHovered ? "100px" : "80px",
              opacity: isHovered ? 1 : 0.5,
            }}
          />
        </div>

        <div className="flex flex-col items-center mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-xl mb-4">
            Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
          </p>
          <span className="text-primary font-medium hover:underline cursor-pointer">
            contact@growbeyyond.com
          </span>
        </div>
      </div>
    </section>
  )
}
