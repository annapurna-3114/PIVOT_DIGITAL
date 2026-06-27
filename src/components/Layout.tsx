import React, { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { Activity, Globe, Share2, Code, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // scroll to top on route change
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-white/10 shadow-[0_0_20px_0_rgba(174,198,255,0.1)]",
          scrolled ? "bg-background/95 py-3 backdrop-blur-3xl" : "bg-background/80 py-4 backdrop-blur-3xl"
        )}
      >
        <nav className="flex flex-col md:flex-row md:justify-between md:items-center px-4 md:px-margin-desktop py-2 md:py-0 max-w-container-max mx-auto gap-4 md:gap-0">
          <div className="flex justify-between items-center w-full md:w-auto">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://pivotsoftwareconsultants.com/Pivotsoft_logo_final.png" alt="PIVOT Logo" className="h-8 w-auto object-contain flex-shrink-0" />
            </Link>
            <div className="md:hidden">
              <Link to="/contact" className="bg-primary hover:bg-primary-container text-on-primary font-mono font-bold text-label-sm px-4 py-1.5 rounded-full transition-all duration-300 bloom-button uppercase flex items-center justify-center">
                Let's Talk
              </Link>
            </div>
          </div>
          
          {/* Navigation Links - Scrollable Buttons on Mobile */}
          <div className="flex items-center gap-2 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <NavLink 
              to="/services" 
              className={({ isActive }) => cn(
                "whitespace-nowrap px-4 py-1.5 rounded-full font-mono text-label-sm transition-colors border md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-label-md",
                isActive 
                  ? "bg-primary text-on-primary border-primary md:text-primary md:font-bold md:border-b-2 md:border-primary md:rounded-none md:pb-1 md:bg-transparent" 
                  : "bg-surface-container-low border-white/10 text-on-surface-variant hover:text-on-surface md:bg-transparent md:hover:bg-transparent"
              )}
            >
              Services
            </NavLink>
            <NavLink 
              to="/work" 
              className={({ isActive }) => cn(
                "whitespace-nowrap px-4 py-1.5 rounded-full font-mono text-label-sm transition-colors border md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-label-md",
                isActive 
                  ? "bg-primary text-on-primary border-primary md:text-primary md:font-bold md:border-b-2 md:border-primary md:rounded-none md:pb-1 md:bg-transparent" 
                  : "bg-surface-container-low border-white/10 text-on-surface-variant hover:text-on-surface md:bg-transparent md:hover:bg-transparent"
              )}
            >
              Our Work
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => cn(
                "whitespace-nowrap px-4 py-1.5 rounded-full font-mono text-label-sm transition-colors border md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-label-md",
                isActive 
                  ? "bg-primary text-on-primary border-primary md:text-primary md:font-bold md:border-b-2 md:border-primary md:rounded-none md:pb-1 md:bg-transparent" 
                  : "bg-surface-container-low border-white/10 text-on-surface-variant hover:text-on-surface md:bg-transparent md:hover:bg-transparent"
              )}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => cn(
                "whitespace-nowrap px-4 py-1.5 rounded-full font-mono text-label-sm transition-colors border md:border-transparent md:bg-transparent md:px-0 md:py-0 md:text-label-md",
                isActive 
                  ? "bg-primary text-on-primary border-primary md:text-primary md:font-bold md:border-b-2 md:border-primary md:rounded-none md:pb-1 md:bg-transparent" 
                  : "bg-surface-container-low border-white/10 text-on-surface-variant hover:text-on-surface md:bg-transparent md:hover:bg-transparent"
              )}
            >
              Contact Us
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-primary hover:bg-primary-container text-on-primary font-mono font-bold text-label-md px-6 py-2 rounded-full transition-all duration-300 bloom-button uppercase flex items-center justify-center">
              Let's Talk
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex flex-col pt-24">
        <Outlet />
      </main>

      <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-white/5 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="https://pivotsoftwareconsultants.com/Pivotsoft_logo_final.png" alt="PIVOT Logo" className="h-8 w-auto object-contain flex-shrink-0" />
            </Link>
            <p className="font-sans text-body-md text-on-surface-variant mb-6">
              We don't just build websites we create digital experiences that inspire engage and grow business
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-label-sm font-bold text-primary uppercase">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Services</Link></li>
              <li><Link to="/work" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Our Work</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-label-sm font-bold text-primary uppercase">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-label-sm font-bold text-primary uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="font-sans text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-body-md text-on-surface-variant opacity-60 text-sm">
            © 2026 PIVOT Software and Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Globe className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors w-5 h-5" />
            <Share2 className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors w-5 h-5" />
            <Code className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors w-5 h-5" />
          </div>
        </div>
      </footer>
    </div>
  );
}
