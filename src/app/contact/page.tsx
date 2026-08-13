"use client"

import * as React from "react"
import { Mail, Phone, MapPin, Send, Truck, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { KineticHeadline } from "@/components/KineticHeadline"
import { MagneticButton } from "@/components/MagneticButton"
import { InkFlowText } from "@/components/InkFlowText"
import { HeroSlideshow } from "@/components/HeroSlideshow"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for contacting Juliex Property Consultants Ltd. Ssebyoto Julius or our team will get back to you shortly.",
      })
    }, 1200)
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[30vh] sm:min-h-[35vh] w-full overflow-hidden flex items-center justify-center bg-juliex-green-dark py-12 lg:py-16 group">
        <HeroSlideshow brightness="brightness-[0.3]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <KineticHeadline 
            lines={["CONTACT US"]} 
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] font-serif text-juliex-gold"
            staggerDelay={0.2}
          />
          <div className="w-16 sm:w-20 h-1.5 bg-juliex-gold mx-auto my-3 sm:my-4 rounded-full" />
          <p className="text-juliex-cream/90 text-sm sm:text-lg font-body px-2">Juliex Property Consultants Ltd • Nansana Jenina Stage, Wakiso</p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <KineticHeadline 
              lines={["REACH OUT TO OUR TEAM"]} 
              className="text-4xl md:text-5xl font-black text-juliex-green-dark uppercase font-headline"
            />
            <InkFlowText className="text-muted-foreground text-lg font-body max-w-2xl mx-auto leading-relaxed">
              Have questions about available land plots, house construction, surveying, or want to book a free site inspection? Contact Ssebyoto Julius today.
            </InkFlowText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="space-y-10">
              <div className="space-y-8">
                <span className="text-juliex-gold font-black tracking-[0.4em] text-xs uppercase block bg-juliex-green-dark px-3 py-1 rounded-full w-fit text-juliex-cream">Contact Information</span>
                
                <div className="flex items-start space-x-5 group">
                  <div className="bg-juliex-green-dark p-4 rounded-xl transition-transform group-hover:scale-110 duration-500 shadow-md">
                    <MapPin className="h-6 w-6 text-juliex-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-juliex-green-dark uppercase tracking-wide">Office Location</h3>
                    <p className="text-muted-foreground font-body text-sm">Nansana Jenina Stage, Wakiso District, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="bg-juliex-green-dark p-4 rounded-xl transition-transform group-hover:scale-110 duration-500 shadow-md">
                    <Phone className="h-6 w-6 text-juliex-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-juliex-green-dark uppercase tracking-wide">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground font-body text-sm">WhatsApp / Phone: +256 752 461111</p>
                    <p className="text-muted-foreground font-body text-sm">Office Line: +256 756 819959 / +256 788 461112</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="bg-juliex-green-dark p-4 rounded-xl transition-transform group-hover:scale-110 duration-500 shadow-md">
                    <Mail className="h-6 w-6 text-juliex-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-juliex-green-dark uppercase tracking-wide">Email</h3>
                    <p className="text-muted-foreground font-body text-sm break-all">juliexpropertyconsultantsltd@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Free Transport Highlight Box */}
              <div className="p-8 bg-juliex-green-dark text-juliex-cream space-y-4 rounded-2xl shadow-xl border-l-4 border-juliex-gold">
                <div className="bg-juliex-gold w-12 h-12 rounded-xl flex items-center justify-center text-juliex-green-dark">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black uppercase font-headline text-juliex-cream">Free Site Inspection Transport</h3>
                <p className="text-juliex-cream/80 font-body leading-relaxed text-sm">
                  We offer complimentary transport from our office at Nansana Jenina Stage to all property sites. Book your inspection day now!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full-name" className="text-xs font-black uppercase tracking-widest text-juliex-green-dark/70">Full Name</Label>
                    <Input id="full-name" placeholder="John Doe" required className="h-14 bg-[#F8F8F8] border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-[#FFB800]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-number" className="text-xs font-black uppercase tracking-widest text-juliex-green-dark/70">Phone / WhatsApp Number</Label>
                    <Input id="phone-number" placeholder="+256 7... or 07..." required className="h-14 bg-[#F8F8F8] border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-[#FFB800]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-juliex-green-dark/70">Email Address (Optional)</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-[#F8F8F8] border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-[#FFB800]" />
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-black uppercase tracking-widest text-juliex-green-dark/70">Service Required</Label>
                  <RadioGroup defaultValue="land" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 cursor-pointer bg-[#F8F8F8] p-4 rounded-xl border border-gray-200 hover:border-juliex-gold transition-colors">
                      <RadioGroupItem value="land" id="r1" className="border-2 border-juliex-gold text-juliex-gold" />
                      <Label htmlFor="r1" className="font-bold text-juliex-green-dark uppercase tracking-wide text-xs cursor-pointer">Land & Housing Purchase</Label>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer bg-[#F8F8F8] p-4 rounded-xl border border-gray-200 hover:border-juliex-gold transition-colors">
                      <RadioGroupItem value="inspection" id="r2" className="border-2 border-juliex-gold text-juliex-gold" />
                      <Label htmlFor="r2" className="font-bold text-juliex-green-dark uppercase tracking-wide text-xs cursor-pointer">Book Free Site Visit</Label>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer bg-[#F8F8F8] p-4 rounded-xl border border-gray-200 hover:border-juliex-gold transition-colors">
                      <RadioGroupItem value="construction" id="r3" className="border-2 border-juliex-gold text-juliex-gold" />
                      <Label htmlFor="r3" className="font-bold text-juliex-green-dark uppercase tracking-wide text-xs cursor-pointer">House Construction & Renovations</Label>
                    </div>
                    <div className="flex items-center space-x-3 cursor-pointer bg-[#F8F8F8] p-4 rounded-xl border border-gray-200 hover:border-juliex-gold transition-colors">
                      <RadioGroupItem value="survey" id="r4" className="border-2 border-juliex-gold text-juliex-gold" />
                      <Label htmlFor="r4" className="font-bold text-juliex-green-dark uppercase tracking-wide text-xs cursor-pointer">Land Surveying & Documentation</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-juliex-green-dark/70">Your Message / Preferred Location</Label>
                  <Textarea id="message" placeholder="Specify land area, budget, or preferred inspection date..." className="min-h-[160px] bg-[#F8F8F8] border border-gray-200 rounded-xl focus-visible:ring-2 focus-visible:ring-[#FFB800] p-6 text-base resize-none" required />
                </div>

                <div className="pt-2">
                  <MagneticButton strength={20} className="w-full">
                    <Button type="submit" className="w-full h-18 text-xl font-black bg-juliex-gold text-juliex-green-dark hover:bg-juliex-gold/90 rounded-xl shadow-xl group" disabled={isSubmitting}>
                      {isSubmitting ? "SENDING..." : (
                        <span className="flex items-center justify-center">
                          SEND INQUIRY TO SSEBYOTO JULIUS
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform text-juliex-green-dark" />
                        </span>
                      )}
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Footer Map Placeholder Section */}
      <section className="h-[40vh] w-full bg-juliex-cream relative group overflow-hidden border-t-2 border-juliex-gold">
        <div 
          className="absolute inset-0 grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000 bg-center bg-cover"
          style={{ backgroundImage: `url("/images/img1.webp")` }}
        />
        <div className="absolute inset-0 bg-juliex-green-dark/60 group-hover:bg-juliex-green-dark/30 transition-all duration-1000 flex items-center justify-center">
          <div className="bg-white p-8 shadow-2xl space-y-2 text-center max-w-md rounded-2xl border-2 border-juliex-gold">
            <h3 className="text-xl font-black uppercase font-headline text-juliex-green-dark">Visit Our Office</h3>
            <p className="text-muted-foreground text-sm font-body">Nansana Jenina Stage, Wakiso District, Uganda</p>
            <p className="text-xs font-bold text-juliex-gold uppercase tracking-widest pt-2 bg-juliex-green-dark px-4 py-1.5 rounded-full w-fit mx-auto">Open Mon - Sat: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}
