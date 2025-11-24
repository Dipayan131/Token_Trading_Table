"use client";

import { Token } from "@/types/token";
import { TokenCard } from "./TokenCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Zap, SlidersHorizontal, ArrowDownUp } from "lucide-react";

interface TokenListProps {
  title: string;
  tokens: Token[];
  loading?: boolean;
}

export function TokenList({ title, tokens, loading }: TokenListProps) {
  return (
    <div className="flex flex-col h-full border-r border-border last:border-r-0 bg-background min-w-[320px]">
      {/* Column Header */}
      <div className="p-3 border-b border-border flex justify-between items-center sticky top-0 bg-background z-10 h-10">
        <div className="flex items-center gap-2">
            <h2 className="text-sm font-bold text-white">{title}</h2>
            <span className="text-xs text-muted-foreground font-medium">{tokens.length}</span>
        </div>
        
        <div className="flex items-center gap-2">
             <div className="flex items-center gap-1 text-muted-foreground text-[10px]">
                 <Zap className="w-3 h-3" />
                 <span>0</span>
             </div>
             
             <div className="flex items-center bg-card border border-border rounded text-[10px] h-6">
                 <button className="px-2 hover:bg-muted/50 text-axiom-blue font-medium">P1</button>
                 <div className="w-px h-full bg-border" />
                 <button className="px-2 hover:bg-muted/50 text-muted-foreground">P2</button>
                 <div className="w-px h-full bg-border" />
                 <button className="px-2 hover:bg-muted/50 text-muted-foreground">P3</button>
             </div>

             <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                 <SlidersHorizontal className="w-3 h-3" />
             </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-2">
        <div className="flex flex-col gap-2">
          {loading ? (
             Array.from({ length: 3 }).map((_, i) => (
                 <div key={i} className="h-32 bg-card rounded-lg animate-pulse" />
             ))
          ) : (
            tokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
