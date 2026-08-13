'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/MagneticButton";
import { KineticHeadline } from "@/components/KineticHeadline";
import { InkFlowText } from "@/components/InkFlowText";
import { ImageReveal } from "@/components/ImageReveal";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PropertyScrollRow, PropertyItem } from "@/components/PropertyScrollRow";

// Scroll Row 1: Hot Deals & Prime Estates
const hotDealsList: PropertyItem[] = [
  {
    id: "h1",
    badge: "50x100 PLOT",
    title: "Kiwenda Prime Estate Plot",
    location: "1.2Km off Gayaza Tarmac Road, Wakiso",
    price: "UGX 22,000,000",
    titleType: "READY TITLE",
    features: "Power & Piped Water on site",
    image: "/images/img1.webp"
  },
  {
    id: "h2",
    badge: "100x100 PLOT",
    title: "Matugga Hill View Plot",
    location: "2Km from Matugga Town, Wakiso",
    price: "UGX 35,000,000",
    titleType: "MAILO TITLE",
    features: "Direct access feeder road",
    image: "/images/img2.jpg"
  },
  {
    id: "h3",
    badge: "50x100 PLOT",
    title: "Prime Land - Nansana Jenina",
    location: "Nansana, Wakiso District",
    price: "UGX 28,000,000",
    titleType: "READY TITLE",
    features: "Developing neighborhood",
    image: "/images/img3.webp"
  },
  {
    id: "h4",
    badge: "50x100 PLOT",
    title: "Bwebajja Entebbe Road Plot",
    location: "800M off Entebbe Expressway",
    price: "UGX 45,000,000",
    titleType: "MAILO TITLE",
    features: "Lake view & electric power",
    image: "/images/img4.jpg"
  },
  {
    id: "h5",
    badge: "100x100 PLOT",
    title: "Gayaza Trading Centre Plot",
    location: "3Km from Gayaza Town",
    price: "UGX 30,000,000",
    titleType: "READY TITLE",
    features: "Gated estate boundary",
    image: "/images/img5.jpg"
  }
];

// Scroll Row 2: Residential & Mailo Titles
const residentialList: PropertyItem[] = [
  {
    id: "r1",
    badge: "100x100 MAILO",
    title: "Wakiso Matugga Mailo Land",
    location: "Matugga, Wakiso District",
    price: "UGX 45,000,000",
    titleType: "MAILO TITLE",
    features: "Certified boundary survey done",
    image: "/images/img6.jpg"
  },
  {
    id: "r2",
    badge: "50x100 PLOT",
    title: "Bulenga Mityana Road Plot",
    location: "Bulenga, Mityana Road",
    price: "UGX 32,000,000",
    titleType: "READY TITLE",
    features: "Ready for immediate building",
    image: "/images/img7.jpg"
  },
  {
    id: "r3",
    badge: "50x100 PLOT",
    title: "Kira Town Residential Plot",
    location: "Kira Town, Wakiso",
    price: "UGX 55,000,000",
    titleType: "MAILO TITLE",
    features: "Paved access roads & security",
    image: "/images/img8.jpg"
  },
  {
    id: "r4",
    badge: "50x100 PLOT",
    title: "Sonde Namugongo Estate Plot",
    location: "Sonde, Namugongo Road",
    price: "UGX 38,000,000",
    titleType: "READY TITLE",
    features: "Fast developing neighborhood",
    image: "/images/img9.jpg"
  },
  {
    id: "r5",
    badge: "50x100 PLOT",
    title: "Kanyanya Gayaza Road Plot",
    location: "Kanyanya, Kampala/Wakiso",
    price: "UGX 65,000,000",
    titleType: "MAILO TITLE",
    features: "Close proximity to Kampala CBD",
    image: "/images/img10.jpg"
  }
];

// Scroll Row 3: Commercial, Houses & Acreage
const commercialList: PropertyItem[] = [
  {
    id: "c1",
    badge: "50x100 PLOT",
    title: "Nansana Commercial Plot",
    location: "Nansana Jenina Stage, Wakiso",
    price: "UGX 85,000,000",
    titleType: "COMMERCIAL",
    features: "Ideal for rentals / apartments",
    image: "/images/img11.jpg"
  },
  {
    id: "c2",
    badge: "4 BDR HOUSE",
    title: "Modern Finished Villa - Kira",
    location: "Kira Town, Wakiso",
    price: "UGX 380,000,000",
    titleType: "FINISHED HOUSE",
    features: "Self-contained with compound",
    image: "/images/img1.webp"
  },
  {
    id: "c3",
    badge: "2 ACRES",
    title: "Mukono Dundu Farm Land",
    location: "Dundu, Mukono District",
    price: "UGX 95,000,000",
    titleType: "FREEHOLD",
    features: "Fertile land for farming/country home",
    image: "/images/img2.jpg"
  },
  {
    id: "c4",
    badge: "3 BDR HOME",
    title: "Family Bungalow - Entebbe",
    location: "Entebbe, Uganda",
    price: "UGX 290,000,000",
    titleType: "READY TITLE",
    features: "Serene environment near airport",
    image: "/images/img3.webp"
  },
  {
    id: "c5",
    badge: "1 ACRE LAND",
    title: "Commercial Acreage - Gayaza",
    location: "Gayaza Main Road, Wakiso",
    price: "UGX 120,000,000",
    titleType: "MAILO TITLE",
    features: "Suitable for factory or school",
    image: "/images/img4.jpg"
  }
];

export default function PropertiesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-juliex-cream">
      {/* Parallax Background Wrapper */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ clipPath: 'inset(0)' }}>
        <HeroSlideshow brightness="brightness-[0.3]" showControls={false} />
      </div>

      {/* 1. Featured Property Hero */}
      <section className="relative z-10 w-full min-h-[70vh] flex flex-col lg:flex-row overflow-hidden border-b border-white/10">
        {/* Left: Featured Photo */}
        <div className="w-full lg:w-3/5 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden group">
          <ImageReveal 
            src="/images/img5.jpg" 
            alt="Featured Property" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
        </div>

        {/* Right: Solid Green Date/Title block */}
        <div className="w-full lg:w-2/5 bg-juliex-green-dark flex flex-col justify-center p-6 sm:p-10 md:p-16 text-juliex-cream border-l-0 lg:border-l-4 border-t-4 lg:border-t-0 border-juliex-gold">
          <div className="space-y-4 sm:space-y-6 slide-up">
            <span className="text-juliex-gold font-headline text-sm sm:text-lg font-black tracking-wider block border-b-2 border-juliex-gold/40 w-fit pb-1.5 sm:pb-2 uppercase">
              PRIME LAND PLOT
            </span>
            <KineticHeadline 
              lines={["FEATURED", "PROPERTY"]} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase font-headline leading-[0.9] text-juliex-cream"
            />
            <InkFlowText className="text-juliex-cream/85 text-base sm:text-lg font-body leading-relaxed max-w-md">
              Prime 50x100 ft residential & commercial land plots in Wakiso District with ready titles, access roads, and free transport for site inspection.
            </InkFlowText>
            
            <div className="pt-4 sm:pt-8">
              <MagneticButton>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90 font-black h-12 sm:h-16 px-6 sm:px-10 rounded-full text-base sm:text-xl group shadow-2xl">
                    BOOK A SITE VISIT <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Page Section Header (Dark Green Background) */}
      <section className="relative z-10 py-16 md:py-20 bg-juliex-green-dark border-b border-juliex-gold/20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="mb-2 text-juliex-gold text-xs font-bold tracking-[0.25em] uppercase">
            EXCLUSIVE LAND & HOUSING
          </div>
          <KineticHeadline 
            lines={["OUR FEATURED", "PROPERTIES & LAND"]} 
            className="text-juliex-cream text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-widest font-headline mb-6"
          />
          <div className="h-1.5 w-24 bg-juliex-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* 3. Horizontal Properties Scroll Rows - Lighter Cream Background Behind Cards */}
      <section className="relative z-10 py-16 md:py-24 bg-juliex-cream border-b border-juliex-border">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Scroll Row 1 */}
          <PropertyScrollRow 
            categorySubtitle="CATEGORY 01 — HOT DEALS"
            categoryTitle="HOT DEALS & PRIME ESTATES"
            properties={hotDealsList}
          />

          {/* Scroll Row 2 */}
          <PropertyScrollRow 
            categorySubtitle="CATEGORY 02 — RESIDENTIAL"
            categoryTitle="RESIDENTIAL & MAILO TITLES"
            properties={residentialList}
          />

          {/* Scroll Row 3 */}
          <PropertyScrollRow 
            categorySubtitle="CATEGORY 03 — COMMERCIAL & ACREAGE"
            categoryTitle="COMMERCIAL, HOUSES & FARMLAND"
            properties={commercialList}
          />

        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-24 bg-[#003322] text-juliex-cream text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["NEVER MISS A LAND DEAL"]} 
            className="text-4xl md:text-6xl font-black uppercase font-headline mb-8 text-juliex-cream"
          />
          <MagneticButton>
            <Link href="/contact">
              <Button className="bg-juliex-gold text-[#003322] hover:bg-juliex-gold/90 font-black h-18 px-12 rounded-full text-xl group shadow-2xl">
                BOOK FREE INSPECTION NOW <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
