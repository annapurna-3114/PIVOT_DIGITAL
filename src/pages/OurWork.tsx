import React from 'react';
import { Rocket, Diamond, Users, BadgeCheck, BrainCircuit, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThreeBackground } from '@/components/ThreeBackground';

export function OurWork() {
  return (
    <div className="flex-1 flex flex-col void-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[618px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="absolute inset-0 z-0">
          <ThreeBackground variant="work" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-display font-bold text-[12vw] md:text-[8rem] leading-none holographic-text animate-float uppercase tracking-tighter" data-text="OUR WORK">
            OUR WORK
          </h1>
          <p className="mt-stack-sm font-sans text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Architecting the future of spatial computing and 3D ecosystems through visionary design and technical mastery.
          </p>
          <div className="mt-stack-lg flex flex-wrap justify-center gap-gutter">
            <div className="px-6 py-3 glass-card rounded-xl border-white/10 flex items-center gap-3">
              <Rocket className="text-secondary w-6 h-6" />
              <span className="font-mono text-label-md font-bold uppercase">250+ Global Deployments</span>
            </div>
            <div className="px-6 py-3 glass-card rounded-xl border-white/10 flex items-center gap-3">
              <Diamond className="text-tertiary w-6 h-6" />
              <span className="font-mono text-label-md font-bold uppercase">Fortune 500 Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Projects Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Large Project 1 */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl h-[500px] perspective-1000 glass-card p-0">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9pPuN42VZwiZ8W_P6A20ti9M1voQeUE2mK57jfq2asRFZgsJO_zLtKNAUCavQENk_noV0XyE1PTWzbZNFBI8l5lcx8HiZFd-6saewcD3qqLnzPfSQ1Kk_W-J1m1U89zoObq9bI299tT-GHBhg5Vz4sQA8DTmOCxCKPXUrHFsjooW2cWZ07cAPRcbhnUBnhjyOlZsr8KL19CSh9FKWV58uEx-OdMC70hyM00AgqAhtJGQYqQfY2H_Enj7ykDarST66RmQXLS-P-aw')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-stack-md z-10">
              <span className="font-mono text-label-sm font-bold bg-primary/20 text-primary px-3 py-1 rounded-full backdrop-blur-md mb-2 inline-block uppercase tracking-wider">Real Estate Tech</span>
              <h3 className="font-display font-bold text-headline-lg text-on-surface">Omni-Spatial Planning</h3>
              <p className="font-sans text-body-md text-on-surface-variant mt-2 max-w-md">Revolutionizing urban development with real-time 3D collaborative simulations.</p>
            </div>
          </div>

          {/* Small Project 2 */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-[500px] perspective-1000 glass-card p-0">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsEbJs0JQiNugkk_tVKNGqLen-R2bpvMbqYJD__vd6CcjrEmd6CByp_M8Y3ACATbSVuDxh9RPzYr3EJlOabCOywZQb8gOS1Ia-4E76rv_qdH2m_C_Ec1Kaz2LaMwKIjkhCZlrf0MjeJa2T2CAxDTxoI4cITbICird63YR6hQ8WTTL9CYmesfrLFsZp7CfGrgWAznvo8my2M5ZGFVOWn_DoavuF-XHkn76Qf-4zJk8GuTdWFIrJDkAdlqLO7S9xPq1rUV5iIScjvSs')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-stack-md z-10">
              <span className="font-mono text-label-sm font-bold bg-secondary/20 text-secondary px-3 py-1 rounded-full backdrop-blur-md mb-2 inline-block uppercase tracking-wider">Logistics</span>
              <h3 className="font-display font-bold text-headline-lg text-on-surface">Flux Data</h3>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-surface-container-low/50 py-stack-lg relative overflow-hidden w-full">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-headline-xl text-on-surface">How We Work?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter perspective-1000">
            {/* Collaborative */}
            <div className="glass-card p-8 rounded-xl preserve-3d group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-headline-lg text-2xl mb-4 text-on-surface">Collaborative</h4>
              <p className="font-sans text-body-md text-on-surface-variant">We bridge the gap between human intuition and machine precision through deep-dive partnerships.</p>
              <div className="mt-6 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Excellence */}
            <div className="glass-card p-8 rounded-xl preserve-3d group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <BadgeCheck className="text-secondary w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-headline-lg text-2xl mb-4 text-on-surface">Excellence</h4>
              <p className="font-sans text-body-md text-on-surface-variant">Relentless pursuit of visual fidelity and system stability in every pixel we render.</p>
              <div className="mt-6 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Learning */}
            <div className="glass-card p-8 rounded-xl preserve-3d group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6">
                <BrainCircuit className="text-tertiary w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-headline-lg text-2xl mb-4 text-on-surface">Learning</h4>
              <p className="font-sans text-body-md text-on-surface-variant">Continuous R&D in emergent 3D engines to keep your business ahead of the technological curve.</p>
              <div className="mt-6 h-1 w-0 bg-tertiary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            {/* Leadership */}
            <div className="glass-card p-8 rounded-xl preserve-3d group hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg bg-[rgba(35,22,222,0.1)] flex items-center justify-center mb-6">
                <Star className="text-tertiary w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-headline-lg text-2xl mb-4 text-on-surface">Leadership</h4>
              <p className="font-sans text-body-md text-on-surface-variant">We don't just build tools; we define the standards for the next era of digital interaction.</p>
              <div className="mt-6 h-1 w-0 bg-[#8083ff] group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]"></div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto text-center w-full">
        <div className="glass-card py-20 px-8 rounded-[2rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <h2 className="font-display font-bold text-headline-xl text-on-surface relative z-10">Ready to pivot your perspective?</h2>
          <p className="font-sans text-body-lg text-on-surface-variant mt-4 mb-10 max-w-xl mx-auto relative z-10">
            Join the industry leaders who trust PIVOT to visualize their most complex ambitions.
          </p>
          <div className="flex flex-col md:flex-row gap-gutter justify-center relative z-10">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-mono font-bold text-label-md bloom-button transition-all uppercase tracking-widest">
              Schedule a Demo
            </button>
            <Link to="#" className="bg-transparent border border-white/20 text-on-surface px-10 py-4 rounded-full font-mono font-bold text-label-md hover:bg-white/5 transition-all uppercase tracking-widest backdrop-blur-md flex items-center justify-center">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
