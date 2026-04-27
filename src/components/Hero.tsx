import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(215_45%_8%)]" />

      <div className="container relative z-10 grid gap-12 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-40">
        <div className="animate-fade-up space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-white/90">
              AI-Powered Emergency Response
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Every drop
            <br />
            <span className="bg-gradient-to-r from-primary-glow via-primary to-primary-glow bg-clip-text text-transparent">
              saves a life.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            Swathya Setu connects patients with verified blood donors in seconds.
            Intelligent matching, automated coordination, end-to-end care.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="hero" className="group">
              Request Blood Now
              <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="ghostLight">
              Become a Donor
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { icon: Users, value: "12,400+", label: "Active Donors" },
              { icon: Clock, value: "< 4 min", label: "Avg Response" },
              { icon: Shield, value: "98.7%", label: "Match Rate" },
            ].map((s) => (
              <div key={s.label}>
                <s.icon className="mb-2 h-4 w-4 text-primary-glow" />
                <div className="font-display text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating status card */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 bg-gradient-glow blur-3xl" />
          <div className="relative animate-fade-up rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Live Request</span>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary-glow">URGENT</span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-3xl font-bold shadow-glow">
                O−
              </div>
              <div>
                <div className="font-display text-xl font-bold">Apollo Hospital</div>
                <div className="text-sm text-white/60">Mysore • 2.4 km away</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {[
                { name: "Rahul Sharma", status: "Confirmed", color: "bg-success" },
                { name: "Priya Menon", status: "En route", color: "bg-warning" },
                { name: "Arjun Nair", status: "Notified", color: "bg-white/40" },
              ].map((d) => (
                <div key={d.name} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${d.color} animate-pulse-dot`} />
                    <span className="text-sm font-medium">{d.name}</span>
                  </div>
                  <span className="text-xs text-white/60">{d.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
