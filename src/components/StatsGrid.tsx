import { Card } from "@/components/ui/card";
import { Activity, Droplet, Users, Clock, TrendingUp, MapPin } from "lucide-react";

const stats = [
  {
    icon: Droplet,
    label: "Active Requests",
    value: "7",
    change: "+2 today",
    trend: "up",
    color: "primary",
  },
  {
    icon: Users,
    label: "Donors Notified",
    value: "184",
    change: "Last 24h",
    trend: "neutral",
    color: "secondary",
  },
  {
    icon: Activity,
    label: "Confirmed",
    value: "23",
    change: "+12% week",
    trend: "up",
    color: "success",
  },
  {
    icon: Clock,
    label: "Avg Response",
    value: "3.8m",
    change: "−18s",
    trend: "up",
    color: "secondary",
  },
];

export const StatsGrid = () => {
  return (
    <section id="dashboard" className="container py-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Live Dashboard
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Real-time coordination
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Monitor every active request, donor response, and confirmed match across your network.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
          <MapPin className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium">Mysore Region</span>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Card
            key={s.label}
            className="group relative overflow-hidden border-border/60 bg-gradient-card p-6 transition-smooth hover:-translate-y-1 hover:shadow-elevated animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl ${s.color === 'primary' ? 'bg-primary' : s.color === 'success' ? 'bg-success' : 'bg-secondary'}`} />
            <div className="relative">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                s.color === 'primary' ? 'bg-primary/10 text-primary' :
                s.color === 'success' ? 'bg-success/10 text-success' :
                'bg-secondary/10 text-secondary'
              }`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">{s.label}</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold tracking-tight">{s.value}</span>
                <span className="flex items-center gap-1 text-xs font-medium text-success">
                  {s.trend === "up" && <TrendingUp className="h-3 w-3" />}
                  {s.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
