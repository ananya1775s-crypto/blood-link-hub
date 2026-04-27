import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const RequestForm = () => {
  const [selected, setSelected] = useState<string>("O-");
  const [hospital, setHospital] = useState("City Blood Bank, Mysore");
  const [units, setUnits] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) {
      toast.error("Please select a blood group");
      return;
    }
    toast.success(`Request dispatched`, {
      description: `${units} unit(s) of ${selected} • Notifying eligible donors now`,
    });
  };

  return (
    <section id="request" className="container py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Emergency Request
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Send a blood
            <br />
            <span className="text-primary">request in seconds.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Our agent automatically filters eligible donors (90+ days since last donation)
            and dispatches personalized requests via email.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-warning/20 bg-warning/5 p-4">
            <AlertCircle className="h-5 w-5 shrink-0 text-warning" />
            <div className="text-sm">
              <div className="font-semibold text-foreground">FCFS selection</div>
              <div className="text-muted-foreground">
                First donors to confirm get selected. Travel costs are reimbursed.
              </div>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-border/60 bg-gradient-card p-8 shadow-elevated">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <Label className="mb-3 block text-sm font-semibold">Blood Group Required</Label>
              <div className="grid grid-cols-4 gap-2">
                {BLOOD_GROUPS.map((bg) => (
                  <button
                    key={bg}
                    type="button"
                    onClick={() => setSelected(bg)}
                    className={`relative h-14 rounded-xl border-2 font-display text-lg font-bold transition-spring ${
                      selected === bg
                        ? "border-primary bg-gradient-primary text-primary-foreground shadow-glow scale-105"
                        : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="units" className="mb-2 block text-sm font-semibold">
                  Units Required
                </Label>
                <Input
                  id="units"
                  type="number"
                  min="1"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Label htmlFor="urgency" className="mb-2 block text-sm font-semibold">
                  Urgency Level
                </Label>
                <select
                  id="urgency"
                  className="flex h-12 w-full rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue="critical"
                >
                  <option value="critical">🔴 Critical (now)</option>
                  <option value="urgent">🟡 Urgent (within 4h)</option>
                  <option value="planned">🟢 Planned (24h)</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="hospital" className="mb-2 block text-sm font-semibold">
                Hospital / Location
              </Label>
              <Input
                id="hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className="h-12"
              />
            </div>

            <div>
              <Label htmlFor="contact" className="mb-2 block text-sm font-semibold">
                Contact Number
              </Label>
              <Input id="contact" placeholder="+91 XXXXX XXXXX" className="h-12" />
            </div>

            <div>
              <Label htmlFor="notes" className="mb-2 block text-sm font-semibold">
                Additional Notes
              </Label>
              <Textarea
                id="notes"
                rows={3}
                placeholder="Patient details, ward number, attending physician..."
                className="resize-none"
              />
            </div>

            <div className="flex items-center justify-between border-t border-border pt-6">
              <div className="text-sm text-muted-foreground">
                Will notify <span className="font-semibold text-foreground">~32 eligible donors</span>
              </div>
              <Button type="submit" variant="primary" size="lg" className="group">
                <Send className="mr-1 h-4 w-4 transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Dispatch Request
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};
