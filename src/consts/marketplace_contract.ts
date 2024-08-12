import type { Chain } from "thirdweb";
import { superpositionTestnet } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x7a2e87642911F8518a1B749aD2C04568E3be4E18",
    chain: superpositionTestnet,
  },
];
