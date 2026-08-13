'use client';

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, ArrowRight, ShieldCheck, MapPin, Truck, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { KineticHeadline } from "@/components/KineticHeadline"
import { InkFlowText } from "@/components/InkFlowText"
import { MagneticButton } from "@/components/MagneticButton"
import { BlurFocusText } from "@/components/BlurFocusText"
import { Separator } from "@/components/ui/separator"
import { ImageReveal } from "@/components/ImageReveal"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { HeroSlideshow } from "@/components/HeroSlideshow"

const team = [
  {
    name: "Ssebyoto Julius",
    role: "Managing Director & Founder",
    bio: "Head of Operations & Strategic Direction for Juliex Property Consultants Ltd.",
    image: "/images/img6.jpg"
  },
  {
    name: "Real Estate Division",
    role: "Sales & Rentals Team",
    bio: "Specializing in prime land, residential houses, cars, and commercial rentals.",
    image: "/images/img7.jpg"
  },
  {
    name: "Technical & Survey Team",
    role: "Land Surveying & Documentation",
    bio: "Ensuring 100% legal compliance, title processing, and architectural planning.",
    image: "/images/img8.jpg"
  }
]

export default function AboutPage() {
  const historyImg = PlaceHolderImages.find(img => img.id === 'about-history')?.imageUrl || "/images/img9.jpg";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section (Responsive Parallax) */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden flex items-center justify-center bg-juliex-green-dark py-16 lg:py-20 group">
        <HeroSlideshow brightness="brightness-[0.4]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center text-center">
          <div className="flex flex-col items-center max-w-4xl">
            <KineticHeadline 
              lines={["ABOUT", "JULIEX PROPERTY"]} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-serif text-juliex-gold"
              staggerDelay={0.2}
            />
            <div className="w-20 sm:w-24 h-1.5 sm:h-2 bg-juliex-gold my-4 sm:my-6 rounded-full" />
            <p className="text-base sm:text-xl text-juliex-cream/90 max-w-xl font-body px-2">Registered Real Estate Company in Uganda • Nansana Jenina Stage</p>
          </div>
        </div>
      </section>

      {/* 2. Mission Section (High Contrast Dark Slate & Gold) */}
      <section className="py-28 bg-juliex-green-dark text-juliex-cream border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <BlurFocusText>
              <h2 className="text-juliex-gold text-3xl md:text-5xl font-black uppercase font-serif tracking-tight">
                Company Mission & Values
              </h2>
            </BlurFocusText>
            
            <div className="space-y-8">
              <InkFlowText delay={0.8} className="text-xl md:text-2xl font-body leading-relaxed text-juliex-cream/95">
                Juliex Property Consultants Ltd exists to make land acquisition and property development straightforward, legal, and stress-free for both local Ugandans and foreign/diaspora investors.
              </InkFlowText>
              
              <InkFlowText delay={1.2} className="text-lg text-juliex-cream/80 font-body leading-relaxed max-w-2xl mx-auto">
                Managed by Ssebyoto Julius and based at Nansana Jenina Stage in Wakiso District, our firm is built on absolute transparency, legal diligence, free transport for site visits, and friendly installment plans.
              </InkFlowText>
            </div>
            
            <div className="pt-8">
              <div className="h-1.5 w-24 bg-juliex-gold mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Story Section (White/Charcoal/Gold) */}
      <section className="py-24 bg-white text-juliex-green-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <KineticHeadline 
                lines={["THE JULIEX", "DIFFERENCE"]} 
                className="text-4xl md:text-6xl font-black uppercase font-headline tracking-tighter text-juliex-green-dark"
              />
              <Separator className="bg-juliex-gold w-32 h-[3px]" />
              <InkFlowText className="text-muted-foreground text-lg leading-relaxed font-body">
                We believe everyone deserves genuine land with authentic documentation. Whether you are looking for a plot to build a home, commercial acreage, house construction, architectural design, land surveying, or full property management, our team delivers with speed and legal verification.
              </InkFlowText>
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-base font-bold text-juliex-green-dark">
                  <CheckCircle2 className="h-5 w-5 text-juliex-gold" />
                  <span>Free Transport for All Site Inspections</span>
                </div>
                <div className="flex items-center space-x-3 text-base font-bold text-juliex-green-dark">
                  <CheckCircle2 className="h-5 w-5 text-juliex-gold" />
                  <span>Cash & Flexible Installment Options</span>
                </div>
                <div className="flex items-center space-x-3 text-base font-bold text-juliex-green-dark">
                  <CheckCircle2 className="h-5 w-5 text-juliex-gold" />
                  <span>Comprehensive Land Documentation & Surveying</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-juliex-gold">
              <ImageReveal 
                src={historyImg} 
                alt="Juliex Property Consultants" 
                width={800}
                height={600}
                className="w-full h-full object-cover transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section (Grid) */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <KineticHeadline 
              lines={["OUR MANAGEMENT & DIVISIONS"]} 
              className="text-4xl font-black uppercase font-headline text-juliex-green-dark mb-4"
            />
            <InkFlowText className="text-muted-foreground max-w-xl mx-auto">
              Under the leadership of Ssebyoto Julius, our specialized teams cover every aspect of property ownership in Uganda.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col space-y-6 fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg border-b-4 border-juliex-gold">
                  <ImageReveal 
                    src={member.image} 
                    alt={member.name} 
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-headline text-juliex-green-dark uppercase">{member.name}</h3>
                  <p className="text-juliex-gold font-bold uppercase tracking-widest text-xs bg-juliex-green-dark px-3 py-1 rounded-full w-fit">{member.role}</p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.bio}</p>
                </div>
                <div className="pt-4">
                  <MagneticButton>
                    <Link href="/contact">
                      <Button variant="outline" className="border-[#2D2B44] text-juliex-green-dark font-bold hover:bg-juliex-gold hover:text-juliex-green-dark hover:border-juliex-gold rounded-full px-6 group transition-colors">
                        Inquire Now <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 bg-juliex-green-dark text-juliex-cream text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <KineticHeadline 
            lines={["READY TO BOOK A FREE", "SITE INSPECTION?"]} 
            className="text-4xl md:text-6xl font-black uppercase font-headline mb-8 text-juliex-cream"
          />
          <MagneticButton>
            <Link href="/contact">
              <Button className="bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90 font-black h-16 px-10 rounded-full text-xl group shadow-2xl">
                CONTACT SSEBYOTO JULIUS <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  )
}
