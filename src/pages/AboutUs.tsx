import React from 'react';
import { BadgeCheck, Globe, Rocket, Eye, Lightbulb, Target, Shield, Users } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="flex-1 flex flex-col hero-gradient">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center min-h-[618px]">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono text-label-sm font-bold mb-6 uppercase tracking-widest">
              3D Pioneers
            </span>
            <h1 className="font-display font-bold text-[12vw] md:text-[8rem] leading-none mb-stack-md holographic-text animate-float uppercase tracking-tighter" data-text="ABOUT US">
              ABOUT US
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant max-w-xl mb-stack-lg leading-relaxed">
              Leading the global shift into high-fidelity 3D spatial computing. We architect the infrastructure of the next digital frontier.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl">
                <BadgeCheck className="text-secondary w-5 h-5" />
                <span className="font-mono text-label-md font-bold text-on-surface">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl">
                <Globe className="text-primary w-5 h-5" />
                <span className="font-mono text-label-md font-bold text-on-surface">Global Presence</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full animate-pulse z-0"></div>
            <div className="w-full h-full relative z-10 glass-card rounded-3xl overflow-hidden p-0 group">
              <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Specializations & Growth */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-stack-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-gutter">
          
          {/* Growth Visualization */}
          <div className="md:col-span-2 glass-card rounded-3xl p-stack-md overflow-hidden relative min-h-[400px]">
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="font-display font-bold text-headline-lg mb-2 text-on-surface">Technological Trajectory</h3>
              <p className="text-on-surface-variant font-sans text-body-md mb-stack-lg max-w-md">
                Our expansion is measured in processing power and spatial complexity, scaling from mobile-ready assets to city-scale digital twins.
              </p>
              
              <div className="mt-auto grid grid-cols-4 gap-4 items-end h-48">
                <div className="bg-primary/20 h-[30%] rounded-t-lg relative group">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-label-sm text-primary font-bold">2021</div>
                </div>
                <div className="bg-primary/40 h-[55%] rounded-t-lg relative group">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-label-sm text-primary font-bold">2022</div>
                </div>
                <div className="bg-secondary/40 h-[75%] rounded-t-lg relative group">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-mono text-label-sm text-secondary font-bold">2023</div>
                </div>
                <div className="bg-secondary h-[100%] rounded-t-lg relative group shadow-[0_0_30px_rgba(89,222,155,0.3)]">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-100 font-mono text-label-sm text-secondary font-bold">Current</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none bg-gradient-to-l from-primary/10 to-transparent"></div>
          </div>

          {/* Mission Card */}
          <div className="glass-card rounded-3xl p-stack-md flex flex-col justify-between border-primary/20">
            <Rocket className="text-primary w-10 h-10 mb-4" />
            <div>
              <h3 className="font-display font-bold text-headline-lg mb-4 text-on-surface">Mission</h3>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                To bridge the gap between physical constraints and digital possibilities through hyper-realistic 3D visualization and real-time spatial data integration.
              </p>
            </div>
          </div>

          {/* Specializations */}
          <div className="glass-card rounded-3xl p-stack-md flex flex-col">
            <h3 className="font-display font-bold text-headline-lg mb-6 text-on-surface">Specializations</h3>
            <ul className="space-y-4 flex-grow">
              {[
                { text: "Spatial Computing Architecture", color: "bg-primary" },
                { text: "Real-time Digital Twins", color: "bg-secondary" },
                { text: "Cloud-Native GPU Rendering", color: "bg-primary" },
                { text: "AR/VR Pipelines", color: "bg-secondary" },
              ].map((spec, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${spec.color}`}></span>
                  <span className="font-sans text-body-md text-on-surface-variant">{spec.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card with Web Development Pictures */}
          <div className="md:col-span-2 glass-card rounded-3xl p-stack-md flex flex-col items-center bg-gradient-to-br from-background to-surface-container">
            <div className="flex flex-col md:flex-row gap-stack-md w-full mb-8">
              <div className="flex-1">
                <Eye className="text-secondary w-10 h-10 mb-4" />
                <h3 className="font-display font-bold text-headline-lg mb-4 text-on-surface">Our Expertise</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-4">
                  We blend high-performance web development with cutting-edge 3D technologies. Our engineers craft robust architectures utilizing modern stacks like React, TypeScript, and Three.js.
                </p>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  From complex enterprise solutions to immersive spatial computing interfaces, we build software that is both visually stunning and technically flawless.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <div className="aspect-square glass-card rounded-2xl overflow-hidden relative p-0 group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Web Developer Workspace"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="aspect-square glass-card rounded-2xl overflow-hidden relative p-0 group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Code on Monitor"
                />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="aspect-square glass-card rounded-2xl overflow-hidden relative p-0 group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="Modern Software Development"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-stack-lg py-stack-lg w-full">
        <div className="text-center mb-stack-lg">
          <h2 className="font-display font-bold text-headline-xl mb-4 text-on-surface">Core Values</h2>
          <p className="text-on-surface-variant font-sans text-body-lg max-w-2xl mx-auto">
            The principles that navigate our trajectory through the 3D frontier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
          {[
            { icon: Lightbulb, color: "text-primary", bgHover: "group-hover:bg-primary/20", title: "Innovation", desc: "Forging new paths where none exist." },
            { icon: BadgeCheck, color: "text-secondary", bgHover: "group-hover:bg-secondary/20", title: "Quality", desc: "Precision in every rendered pixel." },
            { icon: Shield, color: "text-primary", bgHover: "group-hover:bg-primary/20", title: "Integrity", desc: "Stability you can build your future on." },
            { icon: Users, color: "text-secondary", bgHover: "group-hover:bg-secondary/20", title: "Collaboration", desc: "Multiplying force through synergy." },
            { icon: Target, color: "text-primary", bgHover: "group-hover:bg-primary/20", title: "Success", desc: "Our growth is defined by yours." },
          ].map((value, i) => {
            const Icon = value.icon;
            return (
              <div key={i} className="text-center group p-6">
                <div className={`w-16 h-16 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 ${value.bgHover} transition-all`}>
                  <Icon className={`${value.color} w-8 h-8`} />
                </div>
                <h4 className="font-mono text-label-md font-bold uppercase mb-2 text-on-surface">{value.title}</h4>
                <p className="font-mono text-label-sm text-on-surface-variant">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-stack-lg w-full">
        <div className="glass-card rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-display font-bold text-headline-xl mb-6 text-on-surface">Ready to Pivot?</h2>
            <p className="text-on-surface-variant font-sans text-body-lg max-w-xl mx-auto mb-stack-md leading-relaxed">
              Join the industry leaders leveraging PIVOT to define the next generation of digital interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-container text-on-primary font-mono text-label-md px-10 py-4 rounded-full transition-all duration-300 bloom-primary uppercase font-bold tracking-widest">
                Partner With Us
              </button>
              <button className="glass-card hover:bg-white/10 text-on-surface font-mono text-label-md px-10 py-4 rounded-full transition-all duration-300 uppercase font-bold tracking-widest">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
