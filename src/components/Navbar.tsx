import { Heart, Activity } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">Swathya Setu</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Blood Donor Network
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#dashboard" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            Dashboard
          </a>
          <a href="#request" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            New Request
          </a>
          <a href="#donors" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            Donors
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <Activity className="h-3 w-3 text-success" />
          <span className="text-xs font-semibold text-success">Live</span>
        </div>
      </div>
    </header>
  );
};
