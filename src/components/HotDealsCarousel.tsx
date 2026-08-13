"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  distance: string;
  size: string;
  features: string;
  price: string;
  priceType: string;
  paymentTerm: string;
  badges: { text: string; bg: string }[];
  imageUrl: string;
}

const hotDealsData: Property[] = [
  {
    id: "1",
    title: "KIWENDA PRIME ESTATE",
    location: "Kiwenda, Wakiso",
    distance: "1.2KM OFF GAYAZA TARMAC ROAD",
    size: "50x100 ft (12.5 Decimals)",
    features: "Power & Piped Water on site",
    price: "UGX 22 MILLION",
    priceType: "PRICE FROM",
    paymentTerm: "INSTALLMENTS",
    badges: [
      { text: "HOT DEAL", bg: "bg-juliex-gold text-white" },
      { text: "READY TITLE", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img1.webp"
  },
  {
    id: "2",
    title: "MATUGGA HILL VIEW",
    location: "Matugga, Wakiso",
    distance: "2KM FROM MATUGGA TOWN",
    size: "100x100 ft (25 Decimals)",
    features: "Direct access to main feeder road",
    price: "UGX 35 MILLION",
    priceType: "PRICE FROM",
    paymentTerm: "INSTALLMENTS",
    badges: [
      { text: "READY TITLE", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img2.jpg"
  },
  {
    id: "3",
    title: "NANSANA COMMERCIAL PLOT",
    location: "Nansana, Wakiso",
    distance: "NANSANA JENINA STAGE",
    size: "50x100 ft (Commercial Plot)",
    features: "Ideal for rentals / apartments",
    price: "UGX 85 MILLION",
    priceType: "FIXED PRICE",
    paymentTerm: "CASH / BANK",
    badges: [
      { text: "COMMERCIAL", bg: "bg-juliex-gold text-white" },
      { text: "READY TITLE", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img4.jpg"
  },
  {
    id: "4",
    title: "BWEBAJJA RESIDENTIAL LAND",
    location: "Bwebajja, Entebbe Road",
    distance: "800M OFF ENTEBBE EXPRESSWAY",
    size: "50x100 ft (12.5 Decimals)",
    features: "Developing neighborhood with lake view",
    price: "UGX 45 MILLION",
    priceType: "PRICE FROM",
    paymentTerm: "INSTALLMENTS",
    badges: [
      { text: "PRIME LOCATION", bg: "bg-juliex-gold text-white" },
      { text: "MAILO TITLE", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img5.jpg"
  },
  {
    id: "5",
    title: "GAYAZA ESTATE PLOTS",
    location: "Gayaza, Wakiso",
    distance: "3KM FROM GAYAZA TRADING CENTRE",
    size: "100x100 ft (25 Decimals)",
    features: "Gated estate boundary & grading done",
    price: "UGX 30 MILLION",
    priceType: "PRICE FROM",
    paymentTerm: "INSTALLMENTS",
    badges: [
      { text: "HOT DEAL", bg: "bg-juliex-gold text-white" },
      { text: "READY TITLE", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img6.jpg"
  },
  {
    id: "6",
    title: "MUKONO DUNDU FARM LAND",
    location: "Dundu, Mukono",
    distance: "5KM FROM MUKONO TOWN",
    size: "2 Acres (Agricultural / Mixed)",
    features: "Fertile land suitable for farming or country home",
    price: "UGX 95 MILLION",
    priceType: "TOTAL PRICE",
    paymentTerm: "FLEXIBLE TERMS",
    badges: [
      { text: "FARMLAND", bg: "bg-juliex-green text-white" },
      { text: "FREEHOLD", bg: "bg-juliex-green-dark text-white" }
    ],
    imageUrl: "/images/img7.jpg"
  }
];

export function HotDealsCarousel() {
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
    <div className="w-full">
      {/* Header with Title and Scroll Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[20px] mb-[30px]">
        <div>
          <div className="mb-[8px] text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">
            INVEST TODAY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-juliex-green uppercase">
            HOT DEALS & NEW ESTATES
          </h2>
        </div>

        <div className="flex items-center gap-[12px]">
          {/* Scroll Buttons */}
          <div className="flex items-center gap-[8px]">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-[42px] h-[42px] rounded-[4px] border border-[#d2cebf] bg-white flex items-center justify-center text-juliex-green hover:bg-juliex-green hover:text-white hover:border-juliex-green transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-[42px] h-[42px] rounded-[4px] border border-[#d2cebf] bg-white flex items-center justify-center text-juliex-green hover:bg-juliex-green hover:text-white hover:border-juliex-green transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <Link
            href="/events"
            className="hidden sm:inline-flex items-center gap-[6px] text-[12px] font-bold tracking-wider text-juliex-green hover:text-juliex-green-light uppercase transition-colors ml-2"
          >
            VIEW ALL →
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-[22px] overflow-x-auto scrollbar-none scroll-smooth pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {hotDealsData.map((property) => (
          <div
            key={property.id}
            className="w-[300px] sm:w-[350px] shrink-0 snap-start bg-white rounded-[8px] overflow-hidden border border-[#d2cebf] shadow-none hover:border-juliex-green transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="relative h-[210px] overflow-hidden bg-black/5">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-[12px] left-[12px] flex flex-col gap-[6px]">
                  {property.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`${badge.bg} text-[9px] font-bold tracking-widest uppercase px-[8px] py-[3px] rounded-[2px] shadow-sm`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-[20px]">
                <div className="text-[10px] text-juliex-muted font-bold uppercase tracking-[0.12em] mb-[6px] flex items-center gap-[5px] truncate">
                  <MapPin className="w-3.5 h-3.5 text-juliex-gold shrink-0" /> {property.distance}
                </div>
                <h3 className="font-sans text-[17px] font-bold tracking-wider text-juliex-green uppercase mb-[12px] leading-snug">
                  {property.title}
                </h3>

                <div className="flex flex-col gap-[8px] mb-[18px] text-[12px] text-[#555a53]">
                  <div className="flex items-center gap-[8px]">
                    <span className="w-[18px] h-[18px] rounded-full bg-black/5 flex items-center justify-center text-[10px] shrink-0">
                      📐
                    </span>
                    <span className="truncate">{property.size}</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <span className="w-[18px] h-[18px] rounded-full bg-black/5 flex items-center justify-center text-[10px] shrink-0">
                      ⚡
                    </span>
                    <span className="truncate">{property.features}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[20px] pt-0">
              <div className="pt-[16px] border-t border-juliex-border flex items-end justify-between">
                <div>
                  <div className="text-[9px] text-juliex-muted uppercase tracking-widest mb-[2px]">
                    {property.priceType}
                  </div>
                  <div className="font-bold text-[16px] text-juliex-green tracking-wider">
                    {property.price}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-bold text-juliex-gold uppercase tracking-widest bg-juliex-gold/10 px-[8px] py-[3px] rounded-[2px]">
                    {property.paymentTerm}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Link */}
      <div className="mt-4 text-center sm:hidden">
        <Link
          href="/events"
          className="inline-flex items-center gap-[6px] text-[12px] font-bold tracking-wider text-juliex-green hover:text-juliex-green-light uppercase transition-colors"
        >
          VIEW ALL LISTINGS →
        </Link>
      </div>
    </div>
  );
}
