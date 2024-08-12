import { defineChain } from "thirdweb";

/**
 * Define any custom chain using `defineChain`
 */
export const superpositionTestnet = defineChain({
  id: 98985,
  rpc: "https://testnet-rpc.superposition.so",
  nativeCurrency: {
    name: "Superposition Testnet",
    symbol: "SPN",
    decimals: 18
  }
});
