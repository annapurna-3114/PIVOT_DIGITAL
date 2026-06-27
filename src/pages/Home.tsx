import React from 'react';
import { ThreeBackground } from '@/components/ThreeBackground';
import { MonitorSmartphone, Search, LayoutTemplate, Zap, ShoppingCart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex-1 flex flex-col void-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[max(800px,100vh)] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-80 z-0">
          <ThreeBackground variant="home" />
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-[8vw] md:text-[5rem] text-white mb-stack-sm leading-tight font-bold text-glow">
              Shaping a future with the creativity of diverse teams and technology
            </h1>
            <div className="mt-12 flex justify-center">
              <Link to="/contact" className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-full font-mono text-label-md uppercase font-bold bloom-button transition-all shadow-[0_0_20px_rgba(174,198,255,0.3)]">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What a Website Does / Capabilities Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-20">
          <span className="font-mono text-label-sm font-bold text-primary tracking-[0.2em] uppercase block mb-4">Digital Ecosystems</span>
          <h2 className="font-display font-bold text-headline-xl text-on-surface mb-4">What A Website Can Do For You</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            {
              title: "Responsive Reach",
              desc: "Engage users seamlessly across all devices, from ultra-wide desktops to mobile screens.",
              icon: MonitorSmartphone,
              color: "text-primary",
              bgHover: "group-hover:bg-primary/20"
            },
            {
              title: "SEO Optimization",
              desc: "Rank higher in search results and drive organic, high-intent traffic to your business.",
              icon: Search,
              color: "text-secondary",
              bgHover: "group-hover:bg-secondary/20"
            },
            {
              title: "Custom UX/UI",
              desc: "Deliver memorable, frictionless experiences tailored to your brand's unique identity.",
              icon: LayoutTemplate,
              color: "text-tertiary",
              bgHover: "group-hover:bg-tertiary/20"
            },
            {
              title: "High Performance",
              desc: "Convert more visitors with lightning-fast load times and optimized asset delivery.",
              icon: Zap,
              color: "text-primary",
              bgHover: "group-hover:bg-primary/20"
            },
            {
              title: "E-Commerce",
              desc: "Monetize your products globally with secure, scalable online store infrastructures.",
              icon: ShoppingCart,
              color: "text-secondary",
              bgHover: "group-hover:bg-secondary/20"
            },
            {
              title: "Secure Infrastructure",
              desc: "Protect user data and maintain trust with enterprise-grade security protocols.",
              icon: Lock,
              color: "text-tertiary",
              bgHover: "group-hover:bg-tertiary/20"
            }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="glass-card p-stack-md rounded-xl group hover:-translate-y-2 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 ${feature.bgHover} transition-all duration-300`}>
                  <Icon className={`${feature.color} w-8 h-8`} />
                </div>
                <h3 className={`font-display text-headline-lg font-bold mb-3 text-on-surface`}>{feature.title}</h3>
                <p className="font-sans text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto text-center w-full">
        <div className="glass-card py-20 px-8 rounded-[2rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <h2 className="font-display font-bold text-headline-xl text-on-surface relative z-10">Ready to build your digital presence?</h2>
          <p className="font-sans text-body-lg text-on-surface-variant mt-4 mb-10 max-w-xl mx-auto relative z-10">
            Let's shape the future together with technology that scales.
          </p>
          <div className="flex justify-center relative z-10">
            <Link to="/contact" className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-full font-mono font-bold text-label-md bloom-button transition-all uppercase tracking-widest inline-flex items-center justify-center">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
