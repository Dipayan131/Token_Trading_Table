import { Token, TokenCategory } from "@/types/token";

const TOKENS: Partial<Token>[] = [
  {
    id: "gorilla",
    name: "Fat Gorilla",
    symbol: "GORILLA",
    image: "/placeholder.png",
    price: 0.031,
    priceChange: { m5: 0, h1: 0, h6: 0, h24: 0 },
    marketCap: 3860,
    volume: 3,
    liquidity: 3860,
    transactions: { buy: 1, sell: 0, total: 1 },
    holders: 1,
    age: "1s",
    badges: [],
    audit: {
      mintAuthDisabled: true,
      freezeAuthDisabled: true,
      lpBurned: true,
      top10Holders: false,
    },
    floor: 0.031,
  },
  {
    id: "google",
    name: "Google",
    symbol: "Google",
    image: "/placeholder.png",
    price: 0.041,
    priceChange: { m5: 98, h1: 0, h6: 20, h24: 0 },
    marketCap: 1390000,
    volume: 28000,
    liquidity: 1390000,
    transactions: { buy: 1526, sell: 527, total: 2053 },
    holders: 161,
    age: "15s",
    badges: [],
    audit: {
      mintAuthDisabled: true,
      freezeAuthDisabled: true,
      lpBurned: true,
      top10Holders: true,
    },
    floor: 0.022,
  },
];

export function generateMockTokens(): Record<TokenCategory, Token[]> {
  const createTokens = (count: number, baseIndex: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const baseToken = TOKENS[(baseIndex + i) % TOKENS.length];
      return {
        ...baseToken,
        id: `${baseToken.id}-${Math.random()}`,
        price: baseToken.price! * (1 + (Math.random() * 0.2 - 0.1)),
        marketCap: baseToken.marketCap! * (1 + (Math.random() * 0.2 - 0.1)),
        analysis: {
          holdersChange: Math.floor(Math.random() * 200) - 100, // -100 to 100
          devActivity: {
            action: Math.random() > 0.5 ? "bought" : "sold",
            percentage: Math.floor(Math.random() * 100),
            timeAgo: `${Math.floor(Math.random() * 60)}s`
          },
          snipers: Math.floor(Math.random() * 100),
          auditScore: Math.floor(Math.random() * 100),
          smartMoney: Math.floor(Math.random() * 100)
        }
      } as Token;
    });
  };

  return {
    newPairs: createTokens(4, 0),
    finalStretch: createTokens(4, 1),
    migrated: createTokens(4, 2),
  };
}
