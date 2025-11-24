"use client";

import { Button } from "@/components/ui/button";
import { Search, Star, Bell, Wallet, User, ChevronDown } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Left: Logo & Nav */}
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
             <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">AXIOM <span className="text-muted-foreground text-sm font-normal">Pro</span></span>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#" className="hover:text-white transition-colors">Discover</Link>
          <Link href="#" className="text-axiom-blue hover:text-axiom-blue transition-colors">Pulse</Link>
          <Link href="#" className="hover:text-white transition-colors">Trackers</Link>
          <Link href="#" className="hover:text-white transition-colors">Perpetuals</Link>
          <Link href="#" className="hover:text-white transition-colors">Yield</Link>
          <Link href="#" className="hover:text-white transition-colors">Vision</Link>
          <Link href="#" className="hover:text-white transition-colors">Portfolio</Link>
        </nav>
      </div>

      {/* Right: Search & Actions */}
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search by token or CA..." 
            className="w-full h-9 bg-card border border-border rounded-full pl-9 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-axiom-blue transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground border border-border px-1.5 rounded">/</div>
        </div>

        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:flex gap-2 rounded-full border-border bg-card hover:bg-card-hover text-white h-9">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                SOL
                <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
            
            <Button className="bg-axiom-blue hover:bg-axiom-blue/90 text-white rounded-full h-9 px-6 font-medium">
                Deposit
            </Button>

            <div className="flex items-center gap-1 ml-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Star className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <Wallet className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                    <User className="w-5 h-5" />
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
