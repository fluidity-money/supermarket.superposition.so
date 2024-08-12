"use client";

import MarketplaceProvider from "@/hooks/useMarketplaceContext";

import { ProfileSection } from "@/components/profile-page/Profile";
import { client } from "@/consts/client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useActiveAccount, useConnectModal } from "thirdweb/react";

const Page = () => {
  const account = useActiveAccount();
  const { connect } = useConnectModal();
  useEffect(() => {
    if (!account) {
      connect({ client });
    }
  }, [account, connect]);
  if (!account)
    return (
      <Box>
        <Flex>
          <Heading m="auto">Log in to continue</Heading>
        </Flex>
      </Box>
    );
  return <ProfileSection address={account.address} />;
};

export default function CollectionPage() {
  return (
    <MarketplaceProvider
      chainId="98985"
      contractAddress="0xbcA5Ebd414b7c695A8db400Df231fA2A35bbD441"
    >
      <Page />
    </MarketplaceProvider>
  );
}
