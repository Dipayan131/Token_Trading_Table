"use client";

import { useEffect, useState } from "react";
import { TokenList } from "./TokenList";
import { wsMock } from "@/lib/websocketMock";
import { Token, TokenCategory } from "@/types/token";
import { generateMockTokens as initialData } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Settings, LayoutGrid, List, HelpCircle, Monitor, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PulseDashboard() {
  const [data, setData] = useState<Record<TokenCategory, Token[]>>({
    newPairs: [],
    finalStretch: [],
    migrated: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initial = initialData();
    setData(initial);
    setLoading(false);

    wsMock.connect();
    
    const unsubscribe = wsMock.subscribe((updates) => {
      setData((prev) => {
        const newData = { ...prev };
        const categories: TokenCategory[] = ["newPairs", "finalStretch", "migrated"];
        
        // Apply updates to random tokens across categories
        updates.forEach(update => {
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const tokens = newData[randomCategory];
            if (tokens.length === 0) return;
            
            const randomTokenIndex = Math.floor(Math.random() * tokens.length);
            const token = tokens[randomTokenIndex];
            
            // Calculate new values
            const priceMultiplier = update.price || 1;
            const newPrice = token.price * priceMultiplier;
            const priceChangeDiff = (priceMultiplier - 1) * 100;
            
            tokens[randomTokenIndex] = {
                ...token,
                price: newPrice,
                marketCap: newPrice * 1000000, // Approximate MC update based on price
                priceChange: {
                    ...token.priceChange,
                    m5: parseFloat((token.priceChange.m5 + priceChangeDiff).toFixed(2)),
                    h1: update.priceChange?.h1 ? parseFloat(update.priceChange.h1.toFixed(2)) : token.priceChange.h1,
                    h6: update.priceChange?.h6 ? parseFloat(update.priceChange.h6.toFixed(2)) : token.priceChange.h6,
                    h24: update.priceChange?.h24 ? parseFloat(update.priceChange.h24.toFixed(2)) : token.priceChange.h24,
                },
                transactions: {
                    buy: token.transactions.buy + (update.transactions?.buy || 0),
                    sell: token.transactions.sell + (update.transactions?.sell || 0),
                    total: token.transactions.total + (update.transactions?.total || 0)
                },
                volume: token.volume + (update.volume || 0),
                holders: token.holders + (update.holders || 0),
                floor: token.floor ? token.floor + (update.floor || 0) : token.floor,
                analysis: update.analysis ? update.analysis : token.analysis
            };
        });
        
        return newData;
      });
    });

    return () => {
      unsubscribe();
      wsMock.disconnect();
    };
  }, []);

  const [sort] = useState<"mc" | "price" | "age">("mc");

  const sortTokens = (tokens: Token[]) => {
    return [...tokens].sort((a, b) => {
      if (sort === "mc") return b.marketCap - a.marketCap;
      if (sort === "price") return b.price - a.price;
      return 0;
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px-32px)]"> {/* Subtract Header and Footer height */}
      {/* Sub-Header */}
      <div className="h-12 border-b border-border flex items-center justify-between px-4 bg-background shrink-0">
          <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">Pulse</h1>
              <Badge variant="secondary" className="bg-axiom-blue/20 text-axiom-blue hover:bg-axiom-blue/30 rounded px-2">
                  <LayoutGrid className="w-3 h-3 mr-1" />
                  Default
              </Badge>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                  <HelpCircle className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
          </div>

          <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="h-8 gap-2 bg-card border-border text-white hover:bg-card-hover">
                  <List className="w-4 h-4" />
                  Display
              </Button>
              <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white">
                      <Monitor className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white">
                      <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white">
                      <Volume2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-white">
                      <Settings className="w-4 h-4" />
                  </Button>
              </div>
              <div className="flex items-center bg-card border border-border rounded h-8 px-2 gap-2 text-sm text-white">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                  <span>1</span>
                  <List className="w-4 h-4 text-muted-foreground" />
                  <span>0</span>
              </div>
          </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-1 overflow-hidden">
        <TokenList title="New Pairs" tokens={sortTokens(data.newPairs)} loading={loading} />
        <TokenList title="Final Stretch" tokens={sortTokens(data.finalStretch)} loading={loading} />
        <TokenList title="Migrated" tokens={sortTokens(data.migrated)} loading={loading} />
      </div>
    </div>
  );
}
