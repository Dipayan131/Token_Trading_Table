export interface Token {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  marketCap: number;
  volume: number;
  liquidity: number;
  transactions: {
    buy: number;
    sell: number;
    total: number;
  };
  holders: number;
  age: string;
  socials: {
    website?: boolean;
    twitter?: boolean;
    telegram?: boolean;
    discord?: boolean;
  };
  badges: string[];
  audit: {
    mintAuthDisabled: boolean;
    freezeAuthDisabled: boolean;
    lpBurned: boolean;
    top10Holders: boolean;
  };
  analysis: {
    holdersChange: number; // User icon %
    devActivity: {
        action: "bought" | "sold";
        percentage: number;
        timeAgo: string;
    }; // Chef hat
    snipers: number; // Crosshair %
    auditScore: number; // Ghost %
    smartMoney: number; // Box %
  };
  floor?: number; // Floor price if applicable
  smartMoney?: {
    buy: number;
    sell: number;
  };
  devAction?: string; // e.g., "Dev sold"
}

export type TokenCategory = "newPairs" | "finalStretch" | "migrated";

export interface DashboardState {
  tokens: Record<TokenCategory, Token[]>;
  loading: boolean;
  error: string | null;
}
