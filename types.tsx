export type BlockData = {
  blockHash: string;
  height: string;
  timestamp: { time: string };
};

export type BlockDetailsData = {
  blockHash: string;
  height: string;
  timestamp: { time: string };
  difficulty: string;
  transactionCount: string;
};

export type TransactionData = { index: string; date: { date: string } };
