import { Card } from "@/components/ui/card";
import { Check, X, Clock, MapPin, Phone } from "lucide-react";

type Status = "confirmed" | "pending" | "declined" | "selected";

interface Donor {
  name: string;
  bloodGroup: string;
  distance: string;
  lastDonation: string;
  status: Status;
  responseTime?: string;
  address?: string;
}

const donors: Donor[] = [
  { name: "Rahul Sharma", bloodGroup: "O−", distance: "1.2 km", lastDonation: "124 days", status: "selected", responseTime: "2m 14s", address: "Kuvempunagar, Mysore" },
  { name: "Priya Menon", bloodGroup: "O−", distance: "2.4 km", lastDonation: "98 days", status: "selected", responseTime: "3m 02s", address: "Vijayanagar, Mysore" },
  { name: "Arjun Nair", bloodGroup: "O−", distance: "3.1 km", lastDonation: "156 days", status: "confirmed", responseTime: "4m 41s", address: "Jayalakshmipuram" },
  { name: "Sneha Reddy", bloodGroup: "O−", distance: "4.8 km", lastDonation: "201 days", status: "confirmed", responseTime: "6m 12s", address: "Saraswathipuram" },
  { name: "Karthik Iyer", bloodGroup: "O−", distance: "5.2 km", lastDonation: "112 days", status: "pending" },
  { name: "Anjali Rao", bloodGroup: "O−", distance: "6.7 km", lastDonation: "143 days", status: "declined", responseTime: "8m 30s" },
];

const statusConfig: Record<Status, { label: string; bg: string; text: string; icon: typeof Check }> = {
  selected: { label: "Selected", bg: "bg-primary text-primary-foreground", text: "text-primary", icon: Check },
  confirmed: { label: "Confirmed", bg: "bg-success/10 text-success border border-success/20", text: "text-success", icon: Check },
  pending: { label: "Awaiting", bg: "bg-warning/10 text-warning border border-warning/20", text: "text-warning", icon: Clock },
  declined: { label: "Declined", bg: "bg-muted text-muted-foreground border border-border", text: "text-muted-foreground", icon: X },
};

export const DonorTable = () => {
  return (
    <section id="donors" className="container py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Active Request • REQ-1729
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Donor responses
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Real-time replies sorted by First-Come-First-Served. Top 2 donors are auto-selected.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
            2 / 2 selected
          </div>
        </div>
      </div>

      <Card className="overflow-hidden border-border/60 bg-card shadow-elevated">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Donor</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Blood</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Last Donation</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Response</th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((d, i) => {
                const cfg = statusConfig[d.status];
                const Icon = cfg.icon;
                return (
                  <tr
                    key={d.name}
                    className="group border-b border-border/60 transition-smooth last:border-0 hover:bg-muted/30 animate-fade-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-medical text-sm font-semibold text-white">
                          {d.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{d.name}</div>
                          {d.address && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" /> {d.address}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex h-9 w-12 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                        {d.bloodGroup}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{d.distance}</td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">{d.lastDonation}</td>
                    <td className="px-6 py-5 text-sm">
                      {d.responseTime ? (
                        <span className={`font-mono font-medium ${cfg.text}`}>{d.responseTime}</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${cfg.bg}`}>
                        <Icon className="h-3 w-3" />
                        {cfg.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-border bg-muted/20 px-6 py-4">
          <div className="text-sm text-muted-foreground">
            Showing 6 of 32 notified donors
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <Phone className="h-3.5 w-3.5" />
            Contact selected donors
          </button>
        </div>
      </Card>
    </section>
  );
};
