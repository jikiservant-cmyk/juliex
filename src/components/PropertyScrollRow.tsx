"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageReveal } from "@/components/ImageReveal";

export interface PropertyItem {
  id: string;
  badge: string;
  title: string;
  location: string;
  price: string;
  titleType: string;
  image: string;
  features?: string;
}

interface PropertyScrollRowProps {
  categoryTitle: string;
  categorySubtitle: string;
  properties: PropertyItem[];
}

export function PropertyScrollRow({ categoryTitle, categorySubtitle, properties }: PropertyScrollRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full mb-16 last:mb-0">
      {/* Category Header with Scroll Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-juliex-border">
        <div>
          <div className="text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-1">
            {categorySubtitle}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-wider text-juliex-green uppercase">
            {categoryTitle}
          </h3>
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-bold tracking-widest text-juliex-muted uppercase mr-1 hidden sm:inline">
            {properties.length} PROPERTIES
          </span>
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-10 h-10 rounded-[4px] border border-[#d2cebf] bg-white flex items-center justify-center text-juliex-green hover:bg-juliex-green hover:text-white hover:border-juliex-green transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-10 h-10 rounded-[4px] border border-[#d2cebf] bg-white flex items-center justify-center text-juliex-green hover:bg-juliex-green hover:text-white hover:border-juliex-green transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {properties.map((item) => (
          <div
            key={item.id}
            className="w-[300px] sm:w-[360px] shrink-0 snap-start bg-juliex-green-dark text-juliex-cream rounded-2xl overflow-hidden shadow-xl border border-juliex-green-dark hover:border-juliex-gold transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                <ImageReveal
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-juliex-gold text-juliex-green-dark font-bold text-[10px] px-2.5 py-1 rounded-[2px] uppercase tracking-widest shadow-md">
                  {item.badge}
                </div>
                <div className="absolute top-3 right-3 bg-juliex-green-dark/90 backdrop-blur-md text-white font-bold text-[10px] px-2.5 py-1 rounded-[2px] uppercase tracking-widest border border-juliex-gold/30">
                  {item.titleType}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans tracking-wider uppercase leading-snug text-juliex-cream mb-3 line-clamp-2">
                  {item.title}
                </h4>
                
                <div className="space-y-2 text-juliex-cream/80 text-xs font-sans mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-2 text-juliex-gold shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="flex items-center font-bold text-juliex-gold text-sm">
                    <Clock className="h-3.5 w-3.5 mr-2 text-juliex-gold shrink-0" />
                    <span>{item.price}</span>
                  </div>
                  {item.features && (
                    <div className="flex items-center text-[11px] text-juliex-cream/70 pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 mr-2 text-juliex-gold/80 shrink-0" />
                      <span className="truncate">{item.features}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Inquire Button */}
            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-white/10">
                <Link href="/contact" className="w-full block">
                  <Button className="w-full h-11 bg-juliex-gold text-juliex-green-dark hover:bg-white font-bold uppercase tracking-wider rounded-[4px] text-xs transition-colors group/btn shadow-lg">
                    INQUIRE NOW <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
