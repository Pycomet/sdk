export enum ChainId {
    ETH          = 1,
    OPTIMISM     = 10,
    CRONOS       = 25,
    BSC          = 56,
    POLYGON      = 137,
    FANTOM       = 250,
    BOBA         = 288,
    METIS        = 1088,
    MOONBEAM     = 1284,
    MOONRIVER    = 1285,
    ARBITRUM     = 42161,
    AVALANCHE    = 43114,
    AURORA       = 1313161554,
    HARMONY      = 1666600000,
    GODWOKEN     = 868455272153094,
    FTMTEST     = 4002,
}

export const supportedChainIds = (): number[] =>
    Object.keys(ChainId)
        .map(k => Number.isNaN(Number(k)) ? null : Number(k))
        .filter(c => c !== null);