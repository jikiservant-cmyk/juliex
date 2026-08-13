"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShieldCheck, MapPin, Award, Users } from "lucide-react";
import { PropertySearch } from "@/components/PropertySearch";

interface Slide {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  bgImage: string;
  badge?: string;
  stats?: { label: string; value: string };
}

const slides: Slide[] = [
  {
    id: 1,
    eyebrow: "JULIEX PROPERTY CONSULTANTS LTD",
    title: "YOUR TRUSTED PARTNER IN UGANDAN REAL ESTATE",
    description: "We offer comprehensive solutions covering land & housing sales, house construction, architectural planning, land surveying, and property management for local and foreign investors.",
    primaryCta: { text: "EXPLORE PROPERTIES →", href: "/events" },
    secondaryCta: { text: "HOW WE WORK", href: "/about" },
    bgImage: "/images/img1.webp",
    badge: "REGISTERED CONSULTANTS",
    stats: { label: "EXPERIENCE", value: "10+ YEARS" }
  },
  {
    id: 2,
    eyebrow: "VERIFIED MAILO & FREEHOLD TITLES",
    title: "SECURE LAND INVESTMENTS IN WAKISO & MUKONO",
    description: "Every estate plot we sell undergoes thorough title verification, land board searches, and certified boundary surveys so you invest with 100% confidence.",
    primaryCta: { text: "VIEW MAILO PLOTS →", href: "/events" },
    secondaryCta: { text: "LEGAL SERVICES", href: "/news" },
    bgImage: "/images/img2.jpg",
    badge: "RTA CERTIFICATES OF TITLE",
    stats: { label: "TITLE GUARANTEE", value: "100% VERIFIED" }
  },
  {
    id: 3,
    eyebrow: "FLEXIBLE PAYMENT PLANS",
    title: "OWN YOUR PLOT WITH EASY INSTALLMENT TERMS",
    description: "Pay an affordable initial down payment and clear your balance in comfortable monthly installments. Friendly terms tailored for working Ugandans and diaspora investors.",
    primaryCta: { text: "CHECK HOT DEALS →", href: "/events" },
    secondaryCta: { text: "FREE SITE INSPECTION", href: "/contact" },
    bgImage: "/images/img4.jpg",
    badge: "ZERO INTEREST TERMS",
    stats: { label: "DOWN PAYMENT", value: "FROM 20%" }
  },
  {
    id: 4,
    eyebrow: "DIASPORA & FOREIGN INVESTORS",
    title: "TRANSPARENT REAL ESTATE & HOUSE CONSTRUCTION",
    description: "Building or acquiring land from abroad? Get direct video drone tours, milestone inspection reports, and dedicated account managers at Nansana Jenina Stage.",
    primaryCta: { text: "WATCH DRONE TOURS →", href: "#drone-tours" },
    secondaryCta: { text: "TALK ON WHATSAPP", href: "https://wa.me/256752461111" },
    bgImage: "/images/img5.jpg",
    badge: "DIASPORA DESK",
    stats: { label: "HAPPY CLIENTS", value: "1,500+" }
  }
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative min-h-[720px] pt-[90px] pb-[140px] flex items-center overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Background Track */}
      <div 
        className="absolute inset-0 flex transition-transform duration-700 ease-out w-full h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full shrink-0 relative bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(16, 41, 29, 0.88) 0%, rgba(16, 41, 29, 0.6) 50%, rgba(16, 41, 29, 0.25) 100%),
                url("${slide.bgImage}")
              `
            }}
          />
        ))}
      </div>

      {/* Main Content & Sliding Banner Overlay */}
      <div className="relative z-10 w-[min(1240px,calc(100%-40px))] mx-auto pt-[30px] md:pt-0">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full shrink-0">
                {/* High Contrast Solid Dark Banner Block with Gold Left Accent Bar */}
                <div className="bg-juliex-green-dark/95 text-white p-6 sm:p-8 md:p-10 border-l-4 border-juliex-gold inline-block max-w-[740px] shadow-2xl rounded-r-[6px] backdrop-blur-sm">
                  
                  {/* Eyebrow and Optional Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">
                      {slide.eyebrow}
                    </span>
                    {slide.badge && (
                      <span className="bg-juliex-gold/20 text-juliex-gold border border-juliex-gold/40 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[2px]">
                        {slide.badge}
                      </span>
                    )}
                  </div>

                  {/* Slide Title */}
                  <h1 className="font-sans text-[clamp(24px,3.8vw,44px)] font-bold tracking-widest uppercase leading-[1.15] text-white">
                    {slide.title}
                  </h1>

                  {/* Slide Description */}
                  <p className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/85 font-normal max-w-[660px]">
                    {slide.description}
                  </p>

                  {/* Buttons and Quick Stats */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-7 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        href={slide.primaryCta.href} 
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-juliex-gold text-juliex-green-dark rounded-[4px] text-[12px] font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white active:scale-95"
                      >
                        {slide.primaryCta.text}
                      </Link>
                      
                      <Link 
                        href={slide.secondaryCta.href} 
                        className="inline-flex items-center justify-center px-6 py-3.5 bg-white/10 border border-white/30 rounded-[4px] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/20 text-white active:scale-95"
                      >
                        {slide.secondaryCta.text}
                      </Link>
                    </div>

                    {slide.stats && (
                      <div className="hidden md:block text-right">
                        <div className="text-[18px] font-extrabold tracking-widest text-juliex-gold">
                          {slide.stats.value}
                        </div>
                        <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">
                          {slide.stats.label}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls: Arrows & Indicators */}
      <div className="absolute z-20 right-[20px] md:right-[40px] top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-juliex-gold hover:text-juliex-green-dark border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer active:scale-90"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-juliex-gold hover:text-juliex-green-dark border border-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer active:scale-90"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide Indicators / Dots & Counter at Bottom Left */}
      <div className="absolute z-20 left-[20px] md:left-[60px] bottom-[110px] flex items-center gap-4">
        <div className="text-[12px] font-bold tracking-widest text-juliex-gold uppercase bg-juliex-green-dark/80 px-3 py-1 rounded-[3px] border border-juliex-gold/30">
          0{current + 1} / 0{slides.length}
        </div>
        
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                current === idx ? "w-8 bg-juliex-gold" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="absolute z-20 left-1/2 bottom-[20px] -translate-x-1/2 w-[min(1090px,calc(100%-32px))]">
        <PropertySearch />
      </div>
    </section>
  );
}
