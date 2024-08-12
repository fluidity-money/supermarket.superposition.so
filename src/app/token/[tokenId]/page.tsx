"use client";

import { Token } from "@/components/token-page/TokenPage";
import MarketplaceProvider from "@/hooks/useMarketplaceContext";

export default function ListingPage({
  params,
}: {
  params: { tokenId: string };
}) {
  const { tokenId } = params;
  if (!tokenId || !/^[0-9]+$/.test(tokenId)) {
    throw new Error("Missing listingId");
  }
  return (
    <MarketplaceProvider
      chainId="98985"
      contractAddress="0xbcA5Ebd414b7c695A8db400Df231fA2A35bbD441"
    >
      <Token tokenId={BigInt(tokenId)} />;
    </MarketplaceProvider>
  );
}
