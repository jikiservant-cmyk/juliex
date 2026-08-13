import Link from 'next/link';
import { JuliexLogo } from './JuliexLogo';

export function Footer() {
  return (
    <footer className="bg-juliex-cream border-t border-juliex-border">
      <div className="w-[min(1240px,calc(100%-40px))] mx-auto py-[62px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[50px] md:gap-[50px]">
        
        <div>
          <Link href="/">
            <JuliexLogo showText={true} />
          </Link>
          <p className="max-w-[230px] mt-[20px] text-[12px] leading-[1.8] text-[#70746c]">
            Helping you find land with confidence, clarity and peace of mind in Uganda.
          </p>
          <div className="flex gap-[8px] mt-[22px]">
            {['f', '◎', '◉'].map((icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-[31px] h-[31px] flex items-center justify-center border border-juliex-green/15 rounded-full text-[#536057] text-[12px] transition-colors hover:bg-juliex-green hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[20px] text-[10px] font-bold tracking-[0.16em] uppercase text-[#303730]">
            Quick Links
          </div>
          <div className="flex flex-col gap-[11px]">
            <Link href="/" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Home</Link>
            <Link href="/about" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">About Us</Link>
            <Link href="/events" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Properties</Link>
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Services</Link>
            <Link href="/contact" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Contact</Link>
          </div>
        </div>

        <div>
          <div className="mb-[20px] text-[10px] font-bold tracking-[0.16em] uppercase text-[#303730]">
            Services
          </div>
          <div className="flex flex-col gap-[11px]">
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Land Sales</Link>
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Land Verification</Link>
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Legal Guidance</Link>
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Site Visits</Link>
            <Link href="/agents" className="flex items-center gap-[9px] text-[11px] text-[#6c7068] transition-colors hover:text-juliex-green">Property Advisory</Link>
          </div>
        </div>

        <div>
          <div className="mb-[20px] text-[10px] font-bold tracking-[0.16em] uppercase text-[#303730]">
            Contact
          </div>
          <div className="flex flex-col gap-[11px]">
            <div className="flex items-center gap-[9px] text-[11px] text-[#6c7068]">
              <span>☎</span> +256 752 461111
            </div>
            <div className="flex items-center gap-[9px] text-[11px] text-[#6c7068]">
              <span>✉</span> info@juliexrealty.com
            </div>
            <div className="flex items-center gap-[9px] text-[11px] text-[#6c7068]">
              <span>⌖</span> Kampala, Uganda
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-juliex-border">
        <div className="w-[min(1240px,calc(100%-40px))] mx-auto py-[22px] flex flex-col md:flex-row justify-between text-[9px] text-[#85877f] gap-[15px]">
          <div>
            © {new Date().getFullYear()} Juliex Property Consultants Ltd. All rights reserved.
          </div>
          <div className="flex gap-[20px]">
            <Link href="#" className="hover:text-juliex-green">Privacy</Link>
            <Link href="#" className="hover:text-juliex-green">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
