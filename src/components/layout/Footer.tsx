"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Wifi, Monitor, LayoutTemplate, Wallet, Twitter, TrendingUp, Settings, Disc, MessageSquare, ChevronDown } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-8 border-t border-border bg-background flex items-center justify-between px-2 text-[11px] select-none fixed bottom-0 w-full z-50">
      {/* Left: Presets & Quick Links */}
      <div className="flex items-center h-full">
        <Button variant="ghost" className="h-full rounded-none px-3 text-axiom-blue bg-axiom-blue/10 hover:bg-axiom-blue/20 font-medium gap-2">
            <LayoutTemplate className="w-3 h-3" />
            PRESET 1
        </Button>
        
        <div className="flex items-center px-2 border-r border-border h-full gap-2 text-muted-foreground">
             <Monitor className="w-3 h-3" />
             <span>1</span>
             <div className="w-2 h-2 rounded-full bg-axiom-blue" />
        </div>

        <div className="flex items-center gap-4 px-4 h-full text-muted-foreground">
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <Settings className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <Wallet className="w-3 h-3" />
                <span>Wallet</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <Twitter className="w-3 h-3" />
                <span>Twitter</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <Disc className="w-3 h-3" />
                <span>Discover</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <TrendingUp className="w-3 h-3" />
                <span>Pulse</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                <TrendingUp className="w-3 h-3" />
                <span>PnL</span>
            </div>
        </div>
      </div>

      {/* Center: Tickers (Mock) */}
      <div className="hidden lg:flex items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <span className="text-orange-500 font-medium">$88.6K</span>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-axiom-blue">$2957</span>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-axiom-green">$138.06</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-4">
              <span>$56.7K</span>
              <span className="flex items-center gap-1"><span className="text-muted-foreground/50">B</span> 0.0₂28</span>
              <span className="flex items-center gap-1"><span className="text-muted-foreground/50">O</span> 0.0₂72</span>
          </div>
      </div>

      {/* Right: Status */}
      <div className="flex items-center h-full gap-px">
        <div className="flex items-center gap-2 px-3 h-full bg-axiom-green/10 text-axiom-green">
            <div className="w-1.5 h-1.5 rounded-full bg-axiom-green animate-pulse" />
            <span>Connection is stable</span>
        </div>
        
        <div className="flex items-center gap-2 px-3 h-full border-l border-border text-muted-foreground hover:text-white cursor-pointer">
            <span>GLOBAL</span>
            <ChevronDown className="w-3 h-3" />
        </div>

        <div className="flex items-center px-2 h-full border-l border-border gap-3 text-muted-foreground">
            <LayoutTemplate className="w-3 h-3 hover:text-white cursor-pointer" />
            <Disc className="w-3 h-3 hover:text-white cursor-pointer" />
            <MessageSquare className="w-3 h-3 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
