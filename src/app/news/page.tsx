'use client';

import React from "react";
import { ArrowRight, Clock, Calendar, Building, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { BlurFocusText } from "@/components/BlurFocusText";
import { ImageReveal } from "@/components/ImageReveal";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const articles = [
  {
    number: "01",
    title: "Understanding Land Title Registration in Wakiso District",
    description: "A comprehensive guide on Mailo, Freehold, and Leasehold land titles in Wakiso, including boundary opening and survey documentation.",
    date: "OCT 2024",
    category: "LEGAL & LAND",
    image: "/images/img1.webp"
  },
  {
    number: "02",
    title: "Why Nansana Real Estate is Rapidly Appreciating in Value",
    description: "Analyzing infrastructural developments, access roads, and housing demand growth in Nansana and surrounding Wakiso areas.",
    date: "SEP 2024",
    category: "MARKET ANALYSIS",
    image: "/images/img2.jpg"
  },
  {
    number: "03",
    title: "House Construction Budgeting & Architectural Planning Guide",
    description: "Key steps to planning house construction in Uganda from foundation to finishing, avoiding costly material waste and delays.",
    date: "AUG 2024",
    category: "DEVELOPMENT",
    image: "/images/img3.webp"
  },
  {
    number: "04",
    title: "Safe Real Estate Investment for Ugandans in Diaspora",
    description: "How foreign-based investors can safely buy land, build homes, and manage rental properties through Juliex Property Consultants Ltd.",
    date: "JUL 2024",
    category: "DIASPORA INVESTING",
    image: "/images/img4.jpg"
  }
];

export default function MarketNewsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1A1A1A] pb-24">
      {/* 1. Featured Article Hero */}
      <section className="relative w-full min-h-[60vh] lg:min-h-[75vh] flex flex-col lg:flex-row border-b border-white/10 group">
        <div className="absolute inset-0 z-0">
          <HeroSlideshow brightness="brightness-[0.3]" showControls={false} />
        </div>
        
        {/* Left: Empty spacer for parallax background to show through on desktop */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center p-6 sm:p-10 md:p-16 z-10 hidden lg:flex">
        </div>

        {/* Right: Content Block */}
        <div className="w-full lg:w-1/2 bg-juliex-green-dark/95 backdrop-blur-md flex flex-col justify-center p-6 sm:p-10 md:p-16 text-juliex-cream z-10 border-l border-white/10">
          <div className="space-y-3 mb-4 sm:mb-6">
            <span className="text-juliex-gold font-headline font-bold text-xs tracking-[0.3em] sm:tracking-[0.4em] block uppercase bg-white/10 px-3 py-1 rounded-md border border-white/20 inline-block">
              FEATURED UPDATE
            </span>
            <div className="flex items-center space-x-2 sm:space-x-3 text-juliex-gold">
              <Building className="h-4 w-4 sm:h-5 sm:w-5 text-juliex-gold" />
              <span className="text-xs sm:text-sm font-bold tracking-wider">JULIEX PROPERTY CONSULTANTS LTD</span>
            </div>
          </div>
          
          <KineticHeadline 
            lines={["UGANDA REAL ESTATE", "MARKET INSIGHTS"]} 
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase font-headline leading-[0.9] mb-6 sm:mb-8 text-juliex-cream"
          />

          <p className="text-juliex-cream/85 font-body text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
            Stay informed on land title verification, market prices in Wakiso & Kampala, architectural trends, and property management updates from manager Ssebyoto Julius.
          </p>

          <div className="flex items-center space-x-6">
            <MagneticButton strength={20}>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90 font-black h-12 sm:h-14 px-6 sm:px-8 rounded-full text-sm sm:text-base group shadow-xl">
                  CONTACT OUR EXPERTS <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. Article List */}
      <section className="py-20 bg-juliex-green-dark">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-14">
            <KineticHeadline 
              lines={["LATEST PROPERTY", "ARTICLES & GUIDES"]} 
              className="text-juliex-cream text-3xl md:text-5xl font-black font-headline mb-4"
            />
            <div className="h-1.5 w-24 bg-juliex-gold rounded-full" />
          </div>

          <div className="space-y-0">
            {articles.map((art, i) => (
              <div 
                key={i} 
                className="group flex flex-col md:flex-row items-center py-10 border-b border-white/10 hover:bg-white/[0.04] transition-colors px-6 -mx-6 rounded-xl"
              >
                {/* Thumbnail */}
                <div className="w-24 h-24 shrink-0 mb-6 md:mb-0 md:mr-10">
                  <ImageReveal 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-all duration-700 rounded-lg border border-juliex-gold/50"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-1">
                    <span className="text-juliex-gold font-bold text-xs tracking-widest uppercase">{art.category}</span>
                    <span className="hidden md:block text-juliex-cream/30">•</span>
                    <span className="text-juliex-cream/60 text-xs font-bold uppercase tracking-widest">{art.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-juliex-cream font-headline group-hover:text-juliex-gold transition-colors">
                    {art.title}
                  </h3>
                  <InkFlowText className="text-juliex-cream/70 font-body text-sm max-w-2xl">
                    {art.description}
                  </InkFlowText>
                </div>

                {/* Button */}
                <div className="mt-6 md:mt-0 md:ml-10 shrink-0">
                  <MagneticButton>
                    <Link href="/contact">
                      <Button variant="outline" className="border-2 border-juliex-gold text-juliex-gold hover:bg-juliex-gold hover:text-juliex-green-dark font-bold text-xs rounded-full px-6 group transition-colors">
                        READ MORE <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
