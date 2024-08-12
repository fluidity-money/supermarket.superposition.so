import type { Chain } from "thirdweb";
import { superpositionTestnet } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xbcA5Ebd414b7c695A8db400Df231fA2A35bbD441",
    chain: superpositionTestnet,
    title: "Supercats",
    thumbnailUrl:
      "https://bcb3b752494fc3e049a27c0cb7ce1702.ipfscdn.io/ipfs/QmSe7SW1i8wvLcT2nJbNmHLeaVzNGCdyACu9aFX8jNc91D/0.png",
    type: "ERC1155",
  },
];
