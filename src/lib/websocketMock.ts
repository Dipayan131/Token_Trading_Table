import { Token } from "@/types/token";

type Listener = (data: Partial<Token>[]) => void;

class WebSocketMock {
  private listeners: Listener[] = [];
  private intervalId: NodeJS.Timeout | null = null;

  connect() {
    console.log("Mock WebSocket connected");
    this.startSimulation();
  }

  disconnect() {
    console.log("Mock WebSocket disconnected");
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  subscribe(callback: Listener) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== callback);
    };
  }

  private startSimulation() {
    this.intervalId = setInterval(() => {
      const updates = this.generateRandomUpdates();
      this.listeners.forEach((listener) => listener(updates));
    }, 800); // Update every 800ms for more activity
  }

  private generateRandomUpdates(): Partial<Token>[] {
    // Simulate updates for a subset of tokens
    const count = Math.floor(Math.random() * 3) + 1; // Update 1-3 tokens at a time
    return Array.from({ length: count }).map(() => {
      const isPositive = Math.random() > 0.45; // Slightly biased towards green
      const changePercent = (Math.random() * 0.02); // Up to 2% change
      
      return {
        // We don't have IDs here easily, so we'll let the dashboard map them randomly
        // or we can just return the data structure and let dashboard apply it to random tokens
        priceChange: {
            m5: isPositive ? changePercent * 100 : -changePercent * 100,
            h1: (Math.random() * 10) - 5,
            h6: (Math.random() * 20) - 10,
            h24: (Math.random() * 50) - 25
        } as Partial<Token["priceChange"]>, 
        price: isPositive ? 1 + changePercent : 1 - changePercent, // Multiplier
        transactions: {
            buy: isPositive ? 1 : 0,
            sell: isPositive ? 0 : 1,
            total: 1
        },
        volume: Math.random() * 500,
        holders: Math.random() > 0.8 ? 1 : 0, // Occasional new holder
        floor: Math.random() > 0.9 ? (Math.random() * 0.1) - 0.05 : 0, // Occasional floor change
        analysis: {
            holdersChange: Math.floor(Math.random() * 200) - 100,
            devActivity: {
                action: Math.random() > 0.5 ? "bought" : "sold",
                percentage: Math.floor(Math.random() * 100),
                timeAgo: `${Math.floor(Math.random() * 60)}s`
            },
            snipers: Math.floor(Math.random() * 100),
            auditScore: Math.floor(Math.random() * 100),
            smartMoney: Math.floor(Math.random() * 100)
        }
      } as Partial<Token>;
    });
  }
}

export const wsMock = new WebSocketMock();
