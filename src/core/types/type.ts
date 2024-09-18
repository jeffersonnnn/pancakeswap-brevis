export interface VolatilityMetrics {
  standardDeviation: number;
  averageTrueRange: number;
}

export interface PriceData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface TradingVolumeData {
  timestamp: number;
  volume: number;
}

export interface LiquidityData {
  poolAddress: string;
  totalLiquidity: number;
  token0Reserve: number;
  token1Reserve: number;
}

export interface MarketConditions {
  volatility: VolatilityMetrics;
  tradingVolume: number;
  liquidityDepth: number;
}

export interface FeeAdjustmentRules {
  baseRate: number;
  volatilityMultiplier: number;
  volumeThreshold: number;
}

export interface FeeTier {
  minVolatility: number;
  maxVolatility: number;
  feePercentage: number;
}

export interface LiquidityProviderData {
  address: string;
  contribution: number;
}

export interface IncentiveCalculation {
  baseIncentive: number;
  scalingFactor: number;
  finalIncentive: number;
}

export interface PoolPerformanceData {
  volume24h: number;
  fees24h: number;
  liquidityUtilization: number;
}

export interface VeCAKEStakingInfo {
  contractAddress: string;
  totalStaked: number;
  rewardRate: number;
}

export interface FeeDistribution {
  ecosystemShare: number;
  buybackShare: number;
}

export interface ZKProofData {
  proof: string;
  publicInputs: string[];
}

export interface CompetitiveFeeData {
  dex: string;
  fee: number;
}
