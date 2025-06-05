/* starthide */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAccount } from "wagmi";
import {
  useBalanceOfCollectible,
  useListCollectiblesPaginated,
  useMarketplaceConfig,
  useMarketCurrencies,
  useCreateListingModal,
  useSellModal,
} from "@0xsequence/marketplace-sdk/react";
import { OrderSide, OrderbookKind } from "@0xsequence/marketplace-sdk";
import type { Address } from "viem";
import { Image } from "@0xsequence-demos/boilerplate-design-system";
/* endhide */

export const SecondarySalesInventoryWidget = ({
  collectionId,
  chainId,
}: {
  collectionId: Address;
  chainId: number;
}) => {
  /* starthide */
  const { address, isConnected } = useAccount();
  /* endhide */
  const { data: collectiblesData } = useListCollectiblesPaginated({
    chainId,
    collectionAddress: collectionId,
    filter: { includeEmpty: true, inAccounts: [address!] },
    side: OrderSide.listing,
    query: { enabled: !!address, pageSize: 5, page: 1 },
  });

  const { show: showListModal } = useCreateListingModal();
  const { show: showSellModal } = useSellModal();

  const { data: config } = useMarketplaceConfig();
  /* starthide */
  const collection = config?.market?.collections.find(
    (c) => c.itemsAddress === collectionId,
  );
  /* endhide */

  const { data: currencies } = useMarketCurrencies({
    /* starthide */
    chainId: collection?.chainId || NaN,
    collectionAddress: collection?.itemsAddress as Address,
    includeNativeCurrency: true,
    query: { enabled: !!collection },
    /* endhide */
  });

  /* starthide */
  const orderbookKind = collection?.destinationMarketplace as OrderbookKind;
  /* endhide */

  /* starthide */
  const collectibles = collectiblesData?.collectibles ?? [];
  /* endhide */

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Your Items</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {collectibles.map((c) => (
          <UserInventoryCollectible
            key={c.metadata.tokenId}
            collectible={c}
            chainId={chainId}
            collectionAddress={collectionId}
            address={address}
            isConnected={isConnected}
            orderbookKind={orderbookKind}
            showListModal={showListModal}
            showSellModal={showSellModal}
            offerCurrency={
              currencies?.find(
                (cur) => cur.contractAddress === c.offer?.priceCurrencyAddress,
              ) || null
            }
          />
        ))}
      </div>
    </div>
  );
};

/* starthide */
const UserInventoryCollectible = ({
  collectible,
  chainId,
  collectionAddress,
  address,
  isConnected,
  orderbookKind,
  showListModal,
  showSellModal,
  offerCurrency,
}: {
  collectible: any;
  chainId: number;
  collectionAddress: Address;
  address?: Address;
  isConnected: boolean;
  orderbookKind: OrderbookKind;
  showListModal: any;
  showSellModal: any;
  offerCurrency: any;
}) => {
  const tokenId = collectible.metadata.tokenId;
  const { name, image } = collectible.metadata;

  const { data } = useBalanceOfCollectible({
    chainId,
    collectionAddress,
    collectableId: tokenId,
    userAddress: address,
    query: { enabled: !!isConnected && !!address },
  });

  const balance = data?.balance || 0;
  const hasOffer = !!collectible.offer;

  return (
    <div className="flex flex-col w-[350px] p-4 bg-[#14062a] rounded-2xl text-white">
      {image ? (
        <Image src={image} className="w-full aspect-square rounded-lg" />
      ) : (
        <div className="w-full aspect-square bg-grey-800 rounded-lg" />
      )}
      <div className="mt-4 font-bold text-lg">{name}</div>
      <div className="text-sm">Token ID: {tokenId}</div>
      <div className="text-sm mb-4">Owned: {balance}</div>

      {isConnected && balance && Number(balance) > 0 && (
        <div className="flex flex-col gap-2">
          <button
            className="py-2 px-3 bg-gradient-to-l from-purple-600 to-purple-800 rounded"
            onClick={() =>
              showListModal({
                collectionAddress,
                chainId,
                collectibleId: tokenId,
                orderbookKind,
              })
            }
          >
            List for Sale
          </button>

          {hasOffer && (
            <button
              className="py-2 px-3 bg-gradient-to-l from-purple-600 to-purple-800 rounded"
              onClick={() =>
                showSellModal({
                  collectionAddress,
                  chainId,
                  tokenId,
                  order: collectible.offer,
                })
              }
            >
              Sell Now for {collectible.offer.priceAmountFormatted}{" "}
              {offerCurrency?.symbol || "?"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
/* endhide */
