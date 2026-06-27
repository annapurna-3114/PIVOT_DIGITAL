import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <div className={cn("flex-1 flex flex-col relative overflow-hidden transition-all duration-700", submitted && "shadow-[inset_0_0_100px_rgba(89,222,155,0.05)]")}>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
          alt="Modern office workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10 w-full pt-16 pb-stack-lg flex-1">
        
        {/* 3D Typography Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-label-sm font-bold text-primary tracking-[0.4em] uppercase block mb-4">Inquire Now</span>
          <h1 className="holographic-text font-display font-bold text-[12vw] md:text-[8rem] tracking-tighter animate-float text-on-surface leading-none mb-6 uppercase" data-text="CONTACT US">
            CONTACT US
          </h1>
          <p className="font-display font-bold text-headline-lg text-on-surface-variant max-w-2xl mx-auto">
            Let's Work Together
          </p>
        </div>

        {/* Bento Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Information Pane */}
          <div className="lg:col-span-4 space-y-gutter">
            <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/20 to-white/5"></div>
              <Mail className="text-primary w-8 h-8 mb-4 block" />
              <h3 className="font-display font-bold text-headline-lg mb-2 text-on-surface">Email Us</h3>
              <p className="text-on-surface-variant font-sans text-body-md">hello@pivot.tech</p>
              <p className="text-on-surface-variant font-sans text-body-md">partnerships@pivot.tech</p>
            </div>
            
            <div className="glass-card p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/20 to-white/5"></div>
              <MapPin className="text-secondary w-8 h-8 mb-4 block" />
              <h3 className="font-display font-bold text-headline-lg mb-2 text-on-surface">Global Headquarters</h3>
              <p className="text-on-surface-variant font-sans text-body-md">Silicon Valley Innovation Lab</p>
              <p className="text-on-surface-variant font-sans text-body-md">440 Tech Dr, Palo Alto, CA</p>
            </div>
            
            <div className="h-64 rounded-xl overflow-hidden glass-card p-0 border border-white/10 group">
              <div 
                className="bg-cover bg-center w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3JZrvFdnPdoVPNQKZAzJ5mD1-ub4xkjDwR1CjWgx_a8T-Nh6__iuJ646zczPcj477j7qeNSAwoR_UnQmtszj7Cub02Yx3tdDwSDJoqwTYZWqtM2onwGCUOb4sdQ3_X7VgbKZ7ite7IYUcn2Mal1BkGgCL96LELteehmFgsZncgCssVbWTSQy6iqhMDOFfV4oyu0DnV19IwKQmHT2hJMIXj83PTVYgMc5_sPuFNlmjWW2itEzwqXIgVnmsxlk_dcVNgKY6GzZj0pg')" }}
              />
            </div>
          </div>

          {/* Form Pane */}
          <div className="lg:col-span-8">
            <div className="glass-card p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/20 to-white/5"></div>
              
              <form className={cn("space-y-6 transition-opacity duration-300", submitted && "opacity-0 pointer-events-none")} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Email Address</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all" 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Office Address</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all" 
                      placeholder="123 Business Way" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Project Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all" 
                    placeholder="Next-Gen 3D Simulation Platform" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono font-bold text-label-sm text-on-surface-variant ml-1 uppercase">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-on-surface placeholder:text-outline-variant input-focus-glow transition-all resize-y" 
                    placeholder="Tell us about your vision..." 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bloom-button w-full bg-primary text-on-primary font-mono font-bold text-label-md py-5 rounded-lg tracking-widest transition-all duration-300 uppercase"
                >
                  Submit
                </button>
              </form>

              {/* Success Message State */}
              {submitted && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-background/95 backdrop-blur-xl rounded-xl z-20 animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 animate-float">
                    <CheckCircle className="text-secondary w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-headline-lg text-on-surface mb-4">Inquiry Received</h3>
                  <p className="font-sans text-body-lg text-on-surface-variant max-w-md">
                    Thank you for contacting PIVOT. Our team will contact you soon.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="mt-8 text-primary font-mono font-bold text-label-md border-b border-primary pb-1 hover:text-on-surface hover:border-on-surface transition-all"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
