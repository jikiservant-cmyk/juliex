'use client';

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const defaultSlides = [
  {
    url: "/images/img1.webp",
  },
  {
    url: "/images/img2.jpg",
  },
  {
    url: "/images/img3.webp",
  },
  {
    url: "/images/img4.jpg",
  },
  {
    url: "/images/img5.jpg",
  },
  {
    url: "/images/img6.jpg",
  }
];

export function HeroSlideshow({ slides = defaultSlides, brightness = "brightness-[0.45]", showControls = true }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <>
      {slides.map((slide, index) => (
        <div 
          key={slide.url}
          className={`absolute inset-0 w-full h-full bg-center bg-cover -z-10 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide 
              ? `opacity-100 scale-105 ${brightness}` 
              : 'opacity-0 scale-100 brightness-[0.2]'
          }`}
          style={{
            backgroundImage: `url("${slide.url}")`,
          }}
        />
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[#2D2B44]/70 -z-10" />
      
      {showControls && (
        <>
          {/* Slideshow Manual Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#FFB800] hover:text-[#2D2B44] text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-[#FFB800] hover:text-[#2D2B44] text-white p-2 sm:p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          
          {/* Slideshow indicator dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-8 bg-[#FFB800]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
