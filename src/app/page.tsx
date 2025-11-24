import { PulseDashboard } from "@/components/dashboard/PulseDashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Placeholder */}
      <header className="h-16 border-b border-border flex items-center px-6 bg-card">
        <h1 className="text-xl font-bold text-white">AXIOM <span className="text-muted-foreground text-sm font-normal">Pro</span></h1>
        <nav className="ml-8 flex gap-6 text-sm text-muted-foreground">
            <span className="text-white font-medium">Pulse</span>
            <span>Discover</span>
            <span>Trackers</span>
        </nav>
      </header>
      
      <PulseDashboard />
    </main>
  );
}
