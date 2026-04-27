import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display text-lg font-bold">Swathya Setu</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Bridging the gap between patients in need and willing donors —
              one life-saving connection at a time.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Dashboard</a></li>
              <li><a href="#" className="hover:text-foreground">Donor Network</a></li>
              <li><a href="#" className="hover:text-foreground">Hospitals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">24/7 Helpline</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Swathya Setu. Saving lives, together.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-primary text-primary" /> for humanity
          </span>
        </div>
      </div>
    </footer>
  );
};
