"use client";

import { Token } from "@/types/token";
import { Card } from "@/components/ui/card";
import { cn, formatCompactNumber } from "@/lib/utils";
import { Copy, Globe, Search, User, Zap, Trophy, Crown, BarChart2, Users, ChefHat, Crosshair, Ghost, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TokenCardProps {
  token: Token;
}

export function TokenCard({ token }: TokenCardProps) {

  return (
    <Card className="bg-card hover:bg-card-hover border-border transition-colors duration-200 p-3 flex gap-3 group relative overflow-hidden">
      {/* Left Side: Image & Address */}
      <div className="flex flex-col gap-1 shrink-0">
          <div className="relative w-16 h-16 rounded-md overflow-hidden bg-muted border border-border group-hover:border-axiom-blue/50 transition-colors">
             <Image 
                src={`https://api.dicebear.com/9.x/shapes/svg?seed=${token.symbol}`} 
                alt={token.symbol}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized // To avoid domain config for now
                priority
             />
             {/* Chain Icon Overlay */}
             <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#0A0A0A] rounded-tl-md flex items-center justify-center z-10">
                 <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
             </div>
          </div>
          <span className="text-[10px] text-muted-foreground text-center font-mono">
              {token.id.slice(0, 4)}...{token.id.slice(-4)}
          </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
            {/* Header Row */}
            <div className="flex justify-between items-start">
                <div className="flex items-baseline gap-1.5 truncate">
                    <span className="font-bold text-white text-sm truncate">{token.symbol}</span>
                    <span className="text-muted-foreground text-xs truncate">{token.name}</span>
                    <Copy className="w-3 h-3 text-muted-foreground hover:text-white cursor-pointer" />
                </div>
                <div className="flex flex-col items-end leading-none">
                    <div className="flex items-center gap-1">
                        <span className="text-[10px] text-muted-foreground font-medium">MC</span>
                        <span className="text-sm font-bold text-axiom-gold">${formatCompactNumber(token.marketCap)}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px] text-muted-foreground font-medium">V</span>
                        <span className="text-xs text-white font-bold">${formatCompactNumber(token.volume)}</span>
                    </div>
                </div>
            </div>

            {/* Icons Row */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <span className="text-axiom-green text-xs font-bold">{token.age}</span>
                    <User className="w-3.5 h-3.5 text-axiom-blue hover:text-white cursor-pointer" />
                    <Globe className="w-3.5 h-3.5 text-muted-foreground hover:text-white cursor-pointer" />
                    <Search className="w-3.5 h-3.5 text-muted-foreground hover:text-white cursor-pointer" />
                    
                    <div className="flex items-center gap-0.5 text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-[11px] text-white font-medium">{token.holders}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-muted-foreground">
                        <BarChart2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] text-white font-medium">{token.transactions.total}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-muted-foreground">
                        <Trophy className="w-3.5 h-3.5" />
                        <span className="text-[11px] text-white font-medium">{Math.floor(token.marketCap / 10000)}</span>
                    </div>
                    <div className="flex items-center gap-0.5 text-muted-foreground">
                        <Crown className="w-3.5 h-3.5" />
                        <span className="text-[11px] text-white font-medium">0/1</span>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                     <span className="text-[10px] text-muted-foreground font-medium">F</span>
                     <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                     <span className="text-xs text-white font-bold">{token.floor?.toFixed(3) || "-"}</span>
                     <span className="text-[10px] text-muted-foreground ml-1">TX</span>
                     <span className="text-xs text-white font-bold">{token.transactions.total}</span>
                     <div className="w-6 h-1 bg-axiom-green rounded-full ml-1" />
                </div>
            </div>

            {/* Pills & Action Row */}
            <div className="flex justify-between items-center mt-1.5">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mask-linear-fade">
                    {/* Holders Change */}
                    <div className={cn(
                        "flex items-center gap-1 border rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0",
                        (token.analysis?.holdersChange ?? 0) >= 0 
                            ? "bg-axiom-green/10 border-axiom-green/20 text-axiom-green" 
                            : "bg-axiom-red/10 border-axiom-red/20 text-axiom-red"
                    )}>
                        <User className="w-3 h-3" />
                        <span>{token.analysis?.holdersChange ?? 0}%</span>
                    </div>

                    {/* Dev Activity */}
                    <div className={cn(
                        "flex items-center gap-1 border rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0",
                        token.analysis?.devActivity.action === "bought"
                            ? "bg-axiom-green/10 border-axiom-green/20 text-axiom-green"
                            : "bg-axiom-red/10 border-axiom-red/20 text-axiom-red"
                    )}>
                        <ChefHat className="w-3 h-3" />
                        <span>{token.analysis?.devActivity.percentage ?? 0}%</span>
                        <span className="text-muted-foreground ml-0.5">{token.analysis?.devActivity.timeAgo ?? "0s"}</span>
                    </div>

                    {/* Snipers - Lower is better/green? Or just random? Let's assume < 50 is green for now, or just random based on value to show variety */}
                    <div className={cn(
                        "flex items-center gap-1 border rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0",
                        (token.analysis?.snipers ?? 0) < 50
                            ? "bg-axiom-green/10 border-axiom-green/20 text-axiom-green"
                            : "bg-axiom-red/10 border-axiom-red/20 text-axiom-red"
                    )}>
                        <Crosshair className="w-3 h-3" />
                        <span>{token.analysis?.snipers ?? 0}%</span>
                    </div>

                    {/* Audit Score - Higher is better/green */}
                    <div className={cn(
                        "flex items-center gap-1 border rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0",
                        (token.analysis?.auditScore ?? 0) > 70
                            ? "bg-axiom-green/10 border-axiom-green/20 text-axiom-green"
                            : "bg-axiom-red/10 border-axiom-red/20 text-axiom-red"
                    )}>
                        <Ghost className="w-3 h-3" />
                        <span>{token.analysis?.auditScore ?? 0}%</span>
                    </div>

                    {/* Smart Money - Higher is better/green */}
                    <div className={cn(
                        "flex items-center gap-1 border rounded px-1.5 py-0.5 text-[10px] font-medium shrink-0",
                        (token.analysis?.smartMoney ?? 0) > 50
                            ? "bg-axiom-green/10 border-axiom-green/20 text-axiom-green"
                            : "bg-axiom-red/10 border-axiom-red/20 text-axiom-red"
                    )}>
                        <Box className="w-3 h-3" />
                        <span>{token.analysis?.smartMoney ?? 0}%</span>
                    </div>
                </div>

                <Button className="h-6 bg-axiom-blue hover:bg-axiom-blue/90 text-white text-[11px] font-bold rounded-full px-3 ml-2 shrink-0">
                    <Zap className="w-3 h-3 mr-1 fill-current" />
                    <span>0 SOL</span>
                </Button>
            </div>
      </div>
    </Card>
  );
}
