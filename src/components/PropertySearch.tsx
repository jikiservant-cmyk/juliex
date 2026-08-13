"use client";

import React, { useState } from "react";
import { Search, X, MapPin } from "lucide-react";

// Mock data for properties
const propertiesData = [
  {
    id: "1",
    title: "50 Decimals in Kira",
    location: "Kira, Wakiso",
    type: "Residential",
    priceValue: 150000000,
    priceString: "UGX 150,000,000",
    status: "Available",
    imageUrl: "/images/img1.webp",
    size: "50 Decimals"
  },
  {
    id: "2",
    title: "1 Acre in Matugga",
    location: "Matugga, Wakiso",
    type: "Agricultural",
    priceValue: 250000000,
    priceString: "UGX 250,000,000",
    status: "Available",
    imageUrl: "/images/img2.jpg",
    size: "1 Acre"
  },
  {
    id: "3",
    title: "25 Decimals in Bwebajja",
    location: "Bwebajja, Wakiso",
    type: "Residential",
    priceValue: 80000000,
    priceString: "UGX 80,000,000",
    status: "Sold Out",
    imageUrl: "/images/img3.webp",
    size: "25 Decimals"
  },
  {
    id: "4",
    title: "100 Decimals in Gayaza",
    location: "Gayaza, Wakiso",
    type: "Mixed Use",
    priceValue: 200000000,
    priceString: "UGX 200,000,000",
    status: "Available",
    imageUrl: "/images/img4.jpg",
    size: "100 Decimals"
  },
  {
    id: "5",
    title: "Commercial Plot in Nansana",
    location: "Nansana, Wakiso",
    type: "Commercial",
    priceValue: 400000000,
    priceString: "UGX 400,000,000",
    status: "Sold Out",
    imageUrl: "/images/img5.jpg",
    size: "50x100 ft"
  },
  {
    id: "6",
    title: "2 Acres in Dundu",
    location: "Dundu, Mukono",
    type: "Agricultural",
    priceValue: 95000000,
    priceString: "UGX 95,000,000",
    status: "Available",
    imageUrl: "/images/img6.jpg",
    size: "2 Acres"
  }
];

export function PropertySearch() {
  const [locationStr, setLocationStr] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [priceRange, setPriceRange] = useState("Any Price");

  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState(propertiesData);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSearch = () => {
    let filtered = propertiesData;

    // Filter by location
    if (locationStr.trim()) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(locationStr.toLowerCase().trim()) || 
        p.title.toLowerCase().includes(locationStr.toLowerCase().trim())
      );
    }

    // Filter by type
    if (propertyType !== "All Types") {
      filtered = filtered.filter(p => p.type === propertyType);
    }

    // Filter by price
    if (priceRange !== "Any Price") {
      filtered = filtered.filter(p => {
        if (priceRange === "Under UGX 100M") return p.priceValue < 100000000;
        if (priceRange === "UGX 100M - 250M") return p.priceValue >= 100000000 && p.priceValue <= 250000000;
        if (priceRange === "Above UGX 250M") return p.priceValue > 250000000;
        return true;
      });
    }

    setResults(filtered);
    setHasSearched(true);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Search Bar Container */}
      <div className="p-[12px] md:p-[18px] bg-white border border-black/5 rounded-[12px] shadow-[0_20px_60px_rgba(20,35,26,0.15)] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] gap-[12px]">
          
          <div className="relative px-[14px] py-[11px] bg-[#fafaf8] border border-[#dddcd6] rounded-[5px]">
            <label className="block mb-[4px] text-[#77786f] text-[9px] font-bold uppercase tracking-[0.1em]">Location</label>
            <input 
              type="text" 
              placeholder="e.g. Nansana, Wakiso..." 
              value={locationStr}
              onChange={(e) => setLocationStr(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-[#333a34] text-[13px]" 
            />
          </div>

          <div className="relative px-[14px] py-[11px] bg-[#fafaf8] border border-[#dddcd6] rounded-[5px]">
            <label className="block mb-[4px] text-[#77786f] text-[9px] font-bold uppercase tracking-[0.1em]">Property Type</label>
            <select 
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-[#333a34] text-[13px] appearance-none cursor-pointer"
            >
              <option>All Types</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Agricultural</option>
              <option>Mixed Use</option>
            </select>
          </div>

          <div className="relative px-[14px] py-[11px] bg-[#fafaf8] border border-[#dddcd6] rounded-[5px]">
            <label className="block mb-[4px] text-[#77786f] text-[9px] font-bold uppercase tracking-[0.1em]">Price Range</label>
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-[#333a34] text-[13px] appearance-none cursor-pointer"
            >
              <option>Any Price</option>
              <option>Under UGX 100M</option>
              <option>UGX 100M - 250M</option>
              <option>Above UGX 250M</option>
            </select>
          </div>

          <button 
            onClick={handleSearch}
            className="min-h-[46px] md:min-h-0 px-[27px] bg-juliex-green hover:bg-juliex-green-light text-white rounded-[5px] text-[13px] font-semibold transition-colors duration-250 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Results Dropdown Panel */}
      {isPanelOpen && (
        <div className="absolute top-full mt-[12px] left-0 right-0 bg-white rounded-[12px] shadow-[0_30px_80px_rgba(20,35,26,0.2)] border border-black/5 z-30 overflow-hidden max-h-[500px] flex flex-col">
          <div className="flex items-center justify-between px-[20px] py-[15px] border-b border-juliex-border bg-[#fafaf8]">
            <div className="text-[13px] font-bold text-juliex-green">
              {results.length} {results.length === 1 ? 'Property' : 'Properties'} Found
            </div>
            <button onClick={closePanel} className="p-1 hover:bg-black/5 rounded-full text-[#77786f] transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="overflow-y-auto p-[10px]">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                {results.map((prop) => (
                  <div key={prop.id} className="flex gap-[15px] p-[10px] rounded-[8px] border border-transparent hover:border-juliex-border hover:bg-[#fafaf8] transition-colors">
                    <div className="w-[90px] h-[75px] shrink-0 rounded-[5px] overflow-hidden relative bg-black/5">
                      <img src={prop.imageUrl} alt={prop.title} className="w-full h-full object-cover" />
                      {prop.status === "Sold Out" && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold tracking-widest uppercase bg-red-600/90 px-[6px] py-[2px] rounded-[3px] border border-red-500">Sold Out</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between py-[2px] min-w-0">
                      <div>
                        <div className="text-[14px] font-serif font-medium text-juliex-green truncate">{prop.title}</div>
                        <div className="text-[11px] text-[#77786f] flex items-center gap-1 mt-[2px] truncate">
                          <MapPin className="w-3 h-3" /> {prop.location}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-[8px]">
                        <div className="text-[12px] font-bold text-juliex-green">{prop.priceString}</div>
                        <div className="text-[10px] text-[#77786f] bg-black/5 px-[6px] py-[2px] rounded-[3px]">{prop.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-[40px] text-center flex flex-col items-center justify-center">
                <Search className="w-8 h-8 text-[#dddcd6] mb-[15px]" />
                <div className="text-[14px] font-bold text-juliex-green mb-[5px]">No properties found</div>
                <div className="text-[12px] text-[#77786f]">We couldn't find any properties matching your exact search criteria.</div>
                <div className="text-[12px] text-[#77786f] mt-[2px]">Try adjusting your filters or location.</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
