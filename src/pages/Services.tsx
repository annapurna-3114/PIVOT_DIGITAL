import React from 'react';
import { ThreeBackground } from '@/components/ThreeBackground';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <div className="flex-1 flex flex-col void-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[max(800px,100vh)] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-60 z-0">
          <ThreeBackground variant="services" />
        </div>
        
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-5xl text-center md:text-left">
            <h1 className="font-display text-[12vw] md:text-[8rem] text-on-surface mb-stack-sm leading-none font-bold tracking-tighter holographic-text animate-float uppercase" data-text="SERVICES">
              SERVICES
            </h1>
            <p className="font-sans text-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mt-8">
              Building innovative websites, applications, cloud solutions, and digital experiences for businesses worldwide. PIVOT bridges the gap between vision and reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-gutter">
              <button className="bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-lg font-mono text-label-md uppercase font-bold bloom-button">
                Let's Talk
              </button>
              <Link to="/work" className="glass-card px-10 py-4 rounded-lg font-mono text-label-md uppercase font-bold text-on-surface text-center flex items-center justify-center">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-headline-xl text-on-surface mb-4">Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            {
              title: "Web Dev",
              desc: "Scalable, high-performance web ecosystems built for the modern internet era.",
              color: "text-primary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1x0Kom4n4Um6dpd_zbxs_GEdH0a5COjOp4Uj1BK22sUwMwMXE4vTd7wGwOEiYsHZUHmliBPzgoGW-XKpFr4ieXfE3xFUVbYzcaHNihGldinu7IJAS-6mpX4Mqkd1Wp8xprY_OiZTwt3IJriECa3sgU9r9pjCEhLj9SX_DDeOicAViEvQ1NUi4Zvw2QwE6a8GWANjJ0FW1RKrbuRf0WgPMCdn1UwLUwxsvjC8SK8kF4slh2nigSBUzywL8Anf7JkKhohv0ohmaso"
            },
            {
              title: "Web Apps",
              desc: "Complex functional applications delivered through a seamless browser experience.",
              color: "text-secondary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmXCKqPT6IMikWDs5-oARbK4NckgBQbbuy-jKmcl69un7U_2uariKjPU_D_9iMnNnEcTq2ylBMdJ_t9YgztnxMh916MVIXMqO2PmIQTcj7nr59Edsk0kZQmhCea2Xm0H1XveDzttGs0MHcISfqCUORspJJ_B5WaXREQPj1b8l0GLNW4xXSLtNutmJhUpSKa0oM2p933zmf7DuBtMqWr4Gnthix7r-lO9jbOxhhTyighodyzM6I-C2z2S4gjAmR-o7kZHCZv0zEvUE"
            },
            {
              title: "Mobile Apps",
              desc: "Native and cross-platform mobile solutions designed for engagement and speed.",
              color: "text-tertiary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJr4G3F2ZOjzB-4OEdgu9E2cRx6pWFfDKYwo_-sNkUpFcfxfxl9EsCTnZHgQeOrbgF_AiDp2NEfH8rCnnBJRoAFvi5Bnt6aiJnM4s2Jwg_W50u8H9VYMf6SjkfbUoABN3PskRZu3huclTGuAJmeu9eUPkRk-UGzCwSCbHdsZ83HWtT3Wgii8fLl6qjpB_henKLQsBgC3h29MakbEDVcZMhDSqxCLdSgA14XKynyUZS3a_IYKUpWkATfk_DXs8vqjhI7pko32JET5A"
            },
            {
              title: "Cloud Apps",
              desc: "Distributed applications optimized for global availability and high elasticity.",
              color: "text-primary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmoQdvU8_opm5khmUzySkoGFGsZJ7RbFt8Y0ibJxwzHID4PdZb9rvc46-ZA2QmpAF0A8e-a9ouFOnZ1HyI1tkZjw14cNe-_j-8s3W6Ir3wHpbAAZijWheYdING0CIKfhVwgGpGSLbr4F2e4qs8SApOYIzev1iynYKVxtvZmlBY2xfzKy_9ChRg6_QnH47tP6Hu6K93_i81PI4FL85NxwxqNNcuISTFfgqnvZQjMs8u70lTqGqYt7KO7e9PCJcMikE60FseBmCplR0"
            },
            {
              title: "Modernization",
              desc: "Re-engineering legacy systems with modern architectures and current technologies.",
              color: "text-secondary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL-g2yBOwY-is7sJeAF5Z3_8LoGfis-ydUNNrFCmUW-y7R9d0poNtLOpY2lfoX7RuPFN9SN0HmgJrN8S8bdtbFiKOvHOePB4BkXHMMh9C5UyRowsQhCgM-Ei7-Ld_uuex-4_59hF8rPLX2PhkABBWOtf1NjCooJaJUB0B2OJzWJTKHrM2lR9ZAxSCZ9GWR2U6IOZ3KBKlXE-QPWHep-6d2QKTisDayWNvvhi_--2KA5UmLZC-C1-a0ek44KfuvRrwhaD4HIYGyQXc"
            },
            {
              title: "Migration",
              desc: "Secure and seamless transition of infrastructure and data to next-gen platforms.",
              color: "text-tertiary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKeY-9fPLvH5hVhIv-xDu-4g6YN4laaEW05_x9kdlriWvDBs1CRHBb39wdC-sToaPxfFX9sEIp9uZK98rZaynkWSKg5pWtNHz8s974EVr6VMpxHA3B-sNH76RK2XmqCdAi5OdontK1cAKHKdYmrIlxLvqjjnBFInxPY_NsjT88dhl3MskdKyY2dXFvSjRrbZOP-pkH5--uaA2AgGeQiMtxW1m2VIm9SNw1L5zld3zZp3AHXf_r4FxuPFzd5eMHRL6eDts4m0_HD9s"
            },
            {
              title: "Support",
              desc: "Comprehensive maintenance and dedicated support for mission-critical systems.",
              color: "text-primary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa_XjPqXDSdbw0zZlK3vrgPWZsmkCHArTIi2Vk2_jFUrLMlUbKrVvfZ9CpFW82yG9h3FMGVCicNgkVNZNGHlC4s24OfJChKv39RBYLHx1bAqCR77jsMmJdB-Kw6fzVBGRMgaA1nhhvUuUiJTxplP8gKAXonzDWBfyDfA0Bo6WVd1z01QGafCrTHDrwIH4-dYBV8IugQEFetTwNriPRS15i2QbqljCZ7OsYyPfBHN729MlAxgtgEi-b2YmG9SHT36rxQXHJGc8yGmw"
            },
            {
              title: "Custom Software",
              desc: "Bespoke software solutions tailored precisely to your unique business logic.",
              color: "text-secondary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJZWFFrfsnZUTvLfcFEnIzsp2jgPs277My5YCopSNMo47INieYeASiiUlXmxgSD6EF1xQAtCm6hZhh0GXiGHvhAcYYlSoVznXlKVLYbkao3sjEJwINM4PfDN2P1Sli36PHvfI2WjjXAgvikRreOBXzcsOA4QrdnnchuwZjyKEsV7RQvqvAmcDeePIhtOL2S0or_V30gaPE2fs_h_FhO6fyxOjm_-KH9p3CYIG3Meyb9vQ7kOZtpWX9cS5w9fkQAHCULSjPJ7YMy40"
            },
            {
              title: "Cloud Services",
              desc: "Comprehensive cloud strategy, orchestration, and infrastructure management.",
              color: "text-tertiary",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDGPPAaC3DiAsxKHm-a44ZyqdUCYPecMOZLBe4Zb1FjoSuGVHPSQr9MZ4XKAPbaho7hHUfOPnpwFxG8SMBAtE3FnESQ1XuqVy7MtWmHbocUsFbDzWgoX4gM3K8IJs7EXbJ5Ngcn8ERtZFNL_y8dxpmacqMmoJxfjjzxsQwZmzl4mS4yehvQbKct5OOZhsv9bMl1GD-3oDnpbcQLHgIZLMLnnJC-NWhiq5tPX-Dpj9OOrFOsdekdR7zSqNdrGlpzrNYzVq1xgCTQ-g"
            }
          ].map((service, i) => (
            <div key={i} className="glass-card p-stack-md rounded-xl group relative overflow-hidden">
              <div className="mb-6 h-40 overflow-hidden rounded-lg bg-surface-container relative">
                <div 
                  className="bg-cover bg-center w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url('${service.img}')` }}
                />
              </div>
              <h3 className={`font-display text-headline-lg font-bold mb-2 ${service.color}`}>{service.title}</h3>
              <p className="font-sans text-on-surface-variant">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
