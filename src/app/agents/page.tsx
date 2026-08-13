'use client';

import Link from "next/link"
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, CreditCard, Building, MapPin, Compass, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { ImageReveal } from "@/components/ImageReveal"
import { cn } from "@/lib/utils"
import { HeroSlideshow } from "@/components/HeroSlideshow"

const services = [
  {
    title: "REAL ESTATE SALES & RENTALS",
    subtitle: "Land, Plots, Houses, Cars & Rentals",
    description: "Whether you are looking for residential plots, agricultural land, prime commercial properties, vehicles, or rental houses, Juliex Property Consultants Ltd connects you to verified choices across Wakiso and Kampala.",
    icon: Building,
    image: "/images/img1.webp",
    bgColor: "bg-juliex-green-dark",
    textColor: "text-juliex-cream",
    btnClass: "bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90"
  },
  {
    title: "DEVELOPMENT & CONSTRUCTION",
    subtitle: "House Construction, Renovations & Architectural Planning",
    description: "From initial architectural blueprints to quality structural construction and home remodeling, our skilled engineers and craftsmen turn your dream building into reality.",
    icon: Compass,
    image: "/images/img2.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-juliex-cream",
    btnClass: "border-2 border-white text-juliex-cream hover:bg-white hover:text-juliex-green-dark"
  },
  {
    title: "TECHNICAL & LAND SERVICES",
    subtitle: "Land Surveying & Official Documentation",
    description: "Avoid land conflicts and ensure complete legal security. We handle professional land surveying, boundary opening, land title processing, transfers, and legal documentation.",
    icon: FileText,
    image: "/images/img3.webp",
    bgColor: "bg-juliex-green-dark",
    textColor: "text-juliex-cream",
    btnClass: "bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90"
  },
  {
    title: "PROPERTY MANAGEMENT",
    subtitle: "For Local & Foreign / Diaspora Investors",
    description: "We provide comprehensive end-to-end property management services including tenant vetting, rent collection, routine maintenance, and regular progress reporting for diaspora investors.",
    icon: ShieldCheck,
    image: "/images/img4.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-juliex-cream",
    btnClass: "border-2 border-white text-juliex-cream hover:bg-white hover:text-juliex-green-dark"
  },
  {
    title: "FREE SITE INSPECTION TRANSPORT",
    subtitle: "Complimentary Site Visits",
    description: "We pick you up and take you directly to inspect our available land plots and housing developments in Wakiso District and surrounding areas — completely free of charge.",
    icon: Truck,
    image: "/images/img5.jpg",
    bgColor: "bg-[#003322]",
    textColor: "text-juliex-cream",
    btnClass: "bg-juliex-gold text-[#003322] hover:bg-juliex-gold/90"
  },
  {
    title: "FLEXIBLE PAYMENT PLANS",
    subtitle: "Cash & Installment Packages",
    description: "We make owning real estate accessible to everyone. Choose between outright cash purchase discounts or convenient installment payment schedules structured around your cash flow.",
    icon: CreditCard,
    image: "/images/img6.jpg",
    bgColor: "bg-[#3E3E4E]",
    textColor: "text-juliex-cream",
    btnClass: "border-2 border-juliex-gold text-juliex-gold hover:bg-juliex-gold hover:text-[#3E3E4E]"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] w-full overflow-hidden flex items-center justify-center bg-juliex-green-dark py-16 lg:py-20 group">
        <HeroSlideshow brightness="brightness-[0.4]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center max-w-4xl">
            <KineticHeadline 
              lines={["OUR CORE", "SERVICES"]} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-headline text-juliex-gold"
              staggerDelay={0.2}
            />
            <div className="w-20 sm:w-24 h-1.5 sm:h-2 bg-juliex-gold my-4 sm:my-6 rounded-full" />
            <p className="text-base sm:text-xl text-juliex-cream/90 max-w-2xl font-body px-2">
              Juliex Property Consultants Ltd • Real Estate, Construction, Land Surveying & Management
            </p>
          </div>
        </div>
      </section>

      {/* 2. Z-Pattern Content Rows */}
      {services.map((service, i) => (
        <section key={i} className="relative w-full">
          <div className={cn(
            "flex flex-col min-h-[400px] sm:min-h-[500px]",
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          )}>
            {/* Image Block */}
            <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-full">
              <ImageReveal 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-all duration-1000"
                maskColor={service.bgColor === "bg-juliex-green-dark" ? "bg-juliex-green-dark" : "bg-[#3E3E4E]"}
              />
            </div>

            {/* Text Block */}
            <div className={cn(
              "w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-20",
              service.bgColor,
              service.textColor
            )}>
              <div className="max-w-md space-y-6">
                <span className="text-juliex-gold font-bold text-xs uppercase tracking-widest block bg-white/10 px-3 py-1 rounded-md border border-white/20 inline-block">{service.subtitle}</span>
                <KineticHeadline 
                  lines={[service.title]} 
                  className="text-3xl md:text-4xl font-bold font-headline text-juliex-cream"
                />
                <InkFlowText delay={0.6} className="text-base md:text-lg font-body leading-relaxed text-juliex-cream/90">
                  {service.description}
                </InkFlowText>
                <div className="pt-2">
                  <MagneticButton>
                    <Link href="/contact">
                      <Button className={cn("h-14 px-8 rounded-full font-black text-base group shadow-lg", service.btnClass)}>
                        INQUIRE NOW <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Footer CTA Section */}
      <section className="py-24 bg-[#003322] text-juliex-cream text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["SCHEDULE A SITE INSPECTION", "TODAY WITH FREE TRANSPORT"]} 
            className="text-3xl md:text-6xl font-black uppercase font-headline mb-12 text-juliex-cream"
          />
          <MagneticButton>
            <Link href="/contact">
              <Button className="bg-juliex-gold text-[#003322] hover:bg-juliex-gold/90 font-black h-18 px-12 rounded-full text-xl group transition-all duration-500 shadow-2xl">
                BOOK SITE VISIT NOW <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
