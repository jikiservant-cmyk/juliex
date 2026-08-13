import Link from "next/link"
import { MapPin, Truck, ShieldCheck, Play } from "lucide-react"
import { PropertySearch } from "@/components/PropertySearch"
import { HotDealsCarousel } from "@/components/HotDealsCarousel"
import { HeroSlider } from "@/components/HeroSlider"

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-juliex-cream overflow-x-hidden font-sans">
      
      {/* 1. HERO SLIDER SECTION */}
      <HeroSlider />

      {/* 2. TRUST/FEATURES SECTION */}
      <section className="bg-white border-b border-juliex-border">
        <div className="w-[min(1100px,calc(100%-40px))] mx-auto grid grid-cols-1 md:grid-cols-3">
          
          <div className="flex items-center gap-[15px] p-[20px] md:p-[28px] border-b md:border-b-0 md:border-l border-juliex-border first:border-l-0">
            <div className="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-full bg-juliex-green-light text-white text-[18px]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[12px] font-medium tracking-widest text-juliex-green uppercase">VERIFIED MAILO TITLES</div>
              <div className="mt-[4px] text-[11px] leading-[1.5] text-juliex-muted">Authentic Ugandan Certificates of Title (RTA).</div>
            </div>
          </div>

          <div className="flex items-center gap-[15px] p-[20px] md:p-[28px] border-b md:border-b-0 md:border-l border-juliex-border">
            <div className="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-full bg-juliex-green-light text-white text-[18px]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[12px] font-medium tracking-widest text-juliex-green uppercase">FREE SITE INSPECTIONS</div>
              <div className="mt-[4px] text-[11px] leading-[1.5] text-juliex-muted">Complimentary transport to Wakiso & Mukono estates.</div>
            </div>
          </div>

          <div className="flex items-center gap-[15px] p-[20px] md:p-[28px] border-b md:border-b-0 md:border-l border-juliex-border">
            <div className="w-[46px] h-[46px] shrink-0 flex items-center justify-center rounded-full bg-juliex-green-light text-white text-[18px]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[12px] font-medium tracking-widest text-juliex-green uppercase">FLEXIBLE INSTALLMENTS</div>
              <div className="mt-[4px] text-[11px] leading-[1.5] text-juliex-muted">Pay deposit and clear balance in friendly terms.</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOT DEALS / FEATURED ESTATES (HORIZONTAL SCROLL) */}
      <section className="bg-juliex-cream border-t border-juliex-border pt-[60px] md:pt-[85px] pb-[40px] md:pb-[60px]">
        <div className="w-[min(1240px,calc(100%-40px))] mx-auto">
          <HotDealsCarousel />
        </div>
      </section>

      {/* 4. DRONE VIDEO TOURS */}
      <section className="bg-white border-t border-juliex-border py-[60px] md:py-[85px]">
        <div className="w-[min(1240px,calc(100%-40px))] mx-auto">
          <div className="max-w-[620px] mb-[35px]">
            <div className="mb-[8px] text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">VIRTUAL SITE INSPECTIONS</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-juliex-green uppercase mb-[12px]">
              OUR ESTATES IN VIDEOS
            </h2>
            <p className="text-[14px] leading-relaxed text-juliex-muted">
              Can't make it to the site? Explore high-angle drone tours of our estates showing topography, neighborhood developments, and road access directly from your screen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="relative h-[300px] md:h-[380px] rounded-[8px] overflow-hidden border border-[#d2cebf] group cursor-pointer">
              <img src="/images/img7.jpg" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[66px] h-[66px] bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-[20px] left-[20px] right-[20px] bg-black/75 p-4 border-l-4 border-juliex-gold">
                <div className="text-[10px] text-juliex-gold font-bold uppercase tracking-widest mb-[2px]">WAKISO DISTRICT</div>
                <h3 className="text-white text-[17px] font-medium tracking-wider uppercase">KIWENDA ESTATE FULL DRONE TOUR</h3>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="relative flex-1 rounded-[8px] overflow-hidden border border-[#d2cebf] group cursor-pointer min-h-[180px]">
                <img src="/images/img8.jpg" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-[15px] left-[15px] bg-black/75 p-3 border-l-4 border-white">
                  <h3 className="text-white text-[14px] font-medium tracking-wider uppercase">MATUGGA HILL DRONE VIEW</h3>
                </div>
              </div>
              <div className="relative flex-1 rounded-[8px] overflow-hidden border border-[#d2cebf] group cursor-pointer min-h-[180px]">
                <img src="/images/img9.jpg" alt="Video Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[48px] h-[48px] bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-[15px] left-[15px] bg-black/75 p-3 border-l-4 border-white">
                  <h3 className="text-white text-[14px] font-medium tracking-wider uppercase">NANSANA TOWN ACCESSIBILITY</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section className="bg-juliex-cream-dark border-t border-b border-juliex-border py-[60px] md:py-[85px]">
        <div className="w-[min(1240px,calc(100%-40px))] mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] items-center gap-[50px]">
          <div>
            <div className="mb-[8px] text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">
              COMPANY OVERVIEW
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-juliex-green uppercase leading-snug">
              BUILDING VALUE & TRUST IN UGANDA
            </h2>
            <p className="mt-[18px] text-[14px] leading-relaxed text-juliex-muted">
              Operating from Nansana Jenina Stage in Wakiso District, we make property ownership seamless. With free transport for site inspections and friendly cash or installment payment terms, we empower you to invest safely in land, residential homes, and commercial developments.
            </p>
            
            <div className="mt-[22px] flex flex-col gap-[10px]">
              {["VERIFIED MAILO TITLES", "FREE SITE INSPECTIONS", "EXPERT LEGAL GUIDANCE", "FLEXIBLE PAYMENT PLANS"].map((item, i) => (
                <div key={i} className="flex items-center gap-[9px] text-[12px] font-semibold tracking-wider text-juliex-text uppercase">
                  <span className="w-[18px] h-[18px] flex items-center justify-center rounded-full bg-juliex-green text-white text-[10px]">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center gap-[8px] mt-[26px] px-[20px] py-[12px] bg-juliex-green text-white rounded-[4px] text-[11px] font-bold tracking-widest uppercase hover:bg-juliex-green-light transition-colors">
              LEARN MORE ABOUT US →
            </Link>
          </div>

          <div className="relative mt-[20px] md:mt-0">
            <img 
              src="/images/img10.jpg" 
              alt="Our Vision"
              className="w-full h-[360px] md:h-[480px] object-cover rounded-[8px] border border-[#d2cebf]"
            />
            <div className="absolute left-[20px] bottom-[-20px] p-[16px_20px] bg-juliex-green-dark text-white border-l-4 border-juliex-gold shadow-xl">
              <div className="font-bold text-[28px] tracking-widest">10+ YEARS</div>
              <div className="mt-[2px] text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">REGISTERED REAL ESTATE EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="w-[min(1240px,calc(100%-40px))] mx-auto py-[60px] md:py-[85px]">
        <div className="max-w-[650px] mx-auto text-center mb-[45px]">
          <div className="mb-[8px] text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">OUR CORE SERVICES</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-widest text-juliex-green uppercase">
            PROPERTY SERVICES & MANAGEMENT
          </h2>
          <p className="max-w-[500px] mx-auto mt-[12px] text-[13px] leading-relaxed text-juliex-muted">
            House construction, surveying, architectural planning, land documentation, and property management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-[8px] border border-[#d2cebf] overflow-hidden bg-white">
          
          <div className="p-[28px_24px] bg-white hover:bg-[#fcfbf8] transition-colors duration-300 border-b sm:border-b-0 sm:border-r border-[#d2cebf] group">
            <div className="w-[44px] h-[44px] flex items-center justify-center mb-[20px] border border-juliex-green/20 rounded-full text-juliex-green transition-colors duration-300 group-hover:bg-juliex-green group-hover:text-white">
              ✓
            </div>
            <h3 className="font-sans text-[16px] font-bold tracking-wider text-juliex-green uppercase">LAND SALES</h3>
            <p className="mt-[10px] text-[12px] leading-relaxed text-juliex-muted">Browse prime land plots, residential houses, and commercial property listings across Uganda.</p>
            <Link href="/events" className="inline-flex items-center gap-[6px] mt-[18px] text-[10px] font-bold tracking-widest uppercase text-juliex-green">LEARN MORE →</Link>
          </div>

          <div className="p-[28px_24px] bg-white hover:bg-[#fcfbf8] transition-colors duration-300 border-b sm:border-b-0 md:border-r border-[#d2cebf] group">
            <div className="w-[44px] h-[44px] flex items-center justify-center mb-[20px] border border-juliex-green/20 rounded-full text-juliex-green transition-colors duration-300 group-hover:bg-juliex-green group-hover:text-white">
              ⌖
            </div>
            <h3 className="font-sans text-[16px] font-bold tracking-wider text-juliex-green uppercase">CONSTRUCTION</h3>
            <p className="mt-[10px] text-[12px] leading-relaxed text-juliex-muted">Professional house construction and architectural planning for local and foreign investors.</p>
            <Link href="/agents" className="inline-flex items-center gap-[6px] mt-[18px] text-[10px] font-bold tracking-widest uppercase text-juliex-green">LEARN MORE →</Link>
          </div>

          <div className="p-[28px_24px] bg-white hover:bg-[#fcfbf8] transition-colors duration-300 border-b sm:border-b-0 sm:border-r md:border-t-0 sm:border-t border-[#d2cebf] group">
            <div className="w-[44px] h-[44px] flex items-center justify-center mb-[20px] border border-juliex-green/20 rounded-full text-juliex-green transition-colors duration-300 group-hover:bg-juliex-green group-hover:text-white">
              ⚖
            </div>
            <h3 className="font-sans text-[16px] font-bold tracking-wider text-juliex-green uppercase">LEGAL GUIDANCE</h3>
            <p className="mt-[10px] text-[12px] leading-relaxed text-juliex-muted">We help you navigate important documentation, land titling, and legal steps involved in a land purchase.</p>
            <Link href="/news" className="inline-flex items-center gap-[6px] mt-[18px] text-[10px] font-bold tracking-widest uppercase text-juliex-green">LEARN MORE →</Link>
          </div>

          <div className="p-[28px_24px] bg-white hover:bg-[#fcfbf8] transition-colors duration-300 border-t sm:border-t md:border-t-0 border-[#d2cebf] group">
            <div className="w-[44px] h-[44px] flex items-center justify-center mb-[20px] border border-juliex-green/20 rounded-full text-juliex-green transition-colors duration-300 group-hover:bg-juliex-green group-hover:text-white">
              ◇
            </div>
            <h3 className="font-sans text-[16px] font-bold tracking-wider text-juliex-green uppercase">SITE VISITS</h3>
            <p className="mt-[10px] text-[12px] leading-relaxed text-juliex-muted">Visit properties with our team and understand the location, access roads and surroundings firsthand.</p>
            <Link href="/contact" className="inline-flex items-center gap-[6px] mt-[18px] text-[10px] font-bold tracking-widest uppercase text-juliex-green">LEARN MORE →</Link>
          </div>

        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="w-[min(1240px,calc(100%-40px))] mx-auto py-[60px] md:py-[85px]">
        <div className="p-[50px_20px] md:p-[65px_30px] bg-[#ded8c8] rounded-[8px] text-center relative overflow-hidden border border-[#c3bca8]">
          <div className="mb-[8px] text-juliex-gold text-[11px] font-bold tracking-[0.25em] uppercase">YOUR NEXT CHAPTER STARTS HERE</div>
          <h2 className="max-w-[700px] mx-auto text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest text-juliex-green uppercase">
            READY TO GET STARTED?
          </h2>
          <p className="max-w-[500px] mx-auto mt-[14px] text-[13px] leading-relaxed text-[#595e54]">
            Tell us what you have in mind and our team will help you find properties worth considering in Wakiso and Kampala.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-[10px] mt-[24px]">
            <a href="tel:+256752461111" className="inline-flex items-center justify-center gap-[8px] px-[22px] py-[12px] rounded-[4px] text-[11px] font-bold tracking-widest uppercase bg-juliex-green text-white hover:bg-juliex-green-light transition-colors">
              <span>☎</span> TALK TO US
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-[8px] px-[22px] py-[12px] rounded-[4px] text-[11px] font-bold tracking-widest uppercase bg-white/70 border border-juliex-green/20 text-juliex-green hover:bg-white transition-colors">
              <span>✉</span> SEND AN ENQUIRY
            </a>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SECTION */}
      <section className="bg-juliex-green-dark">
        <div className="w-[min(1240px,calc(100%-40px))] mx-auto py-[35px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[25px]">
          <div>
            <div className="text-[18px] font-medium tracking-widest text-white uppercase">STAY UPDATED WITH LAND LISTINGS</div>
            <div className="mt-[4px] text-[11px] text-white/60">Receive new property opportunities and land releases in Uganda directly in your inbox.</div>
          </div>
          
          <form className="flex w-full md:w-[min(480px,100%)]">
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="min-w-0 flex-1 px-[15px] py-[12px] bg-white/10 border border-white/20 rounded-l-[4px] outline-none text-white text-[13px] placeholder:text-white/40"
            />
            <button className="px-[20px] border-none rounded-r-[4px] bg-juliex-gold text-juliex-green-dark text-[11px] font-bold tracking-widest uppercase cursor-pointer hover:bg-white transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
      
    </div>
  )
}
