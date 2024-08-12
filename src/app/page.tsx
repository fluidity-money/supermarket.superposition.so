"use client";

import { Collection } from "@/components/collection-page/Collection";
import MarketplaceProvider from "@/hooks/useMarketplaceContext";

export default function CollectionPage() {
  return (
    <MarketplaceProvider
      chainId="98985"
      contractAddress="0xbcA5Ebd414b7c695A8db400Df231fA2A35bbD441"
    >
      <Collection />
    </MarketplaceProvider>
  );
}
