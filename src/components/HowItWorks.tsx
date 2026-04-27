import { MessageSquare, Filter, Send, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Request received",
    desc: "Hospital submits emergency need with blood group and location.",
  },
  {
    icon: Filter,
    number: "02",
    title: "Smart matching",
    desc: "AI filters donors by blood type and 90+ day eligibility window.",
  },
  {
    icon: Send,
    number: "03",
    title: "Auto-dispatch",
    desc: "Personalized emails sent in batches, parsing replies in real time.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "FCFS selection",
    desc: "First confirmed donors selected. Others thanked instantly.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary-soft/30 py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            How it works
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Intelligent. Automated.
            <br />
            <span className="text-secondary">Always on.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From request to confirmation in under 5 minutes — powered by an AI agent
            that handles the entire coordination loop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.number}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-full rounded-2xl border border-border/60 bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-secondary/40 hover:shadow-medical">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-medical text-white shadow-medical">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-3xl font-bold text-secondary/20">
                    {s.number}
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-3 bg-gradient-to-r from-border to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
