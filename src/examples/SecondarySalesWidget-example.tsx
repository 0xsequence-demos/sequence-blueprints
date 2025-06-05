/* starthide */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useBuyModal,
  useMakeOfferModal,
  useListCollectiblesPaginated,
  useMarketCurrencies,
  useMarketplaceConfig,
} from "@0xsequence/marketplace-sdk/react";
import { OrderbookKind, OrderSide } from "@0xsequence/marketplace-sdk";
import { Image } from "@0xsequence-demos/boilerplate-design-system";
import { useAccount } from "wagmi";
import type { Address } from "viem";

/* endhide */
export const SecondarySalesWidget = ({
  collectionId,
  chainId,
}: {
  collectionId: Address;
  chainId: number;
}) => {
  /* starthide */
  const { address, isConnected } = useAccount();
  /* endhide */
  const {
    data: collectibles,
    isLoading,
    refetch,
  } = useListCollectiblesPaginated({
    chainId,
    collectionAddress: collectionId,
    filter: { includeEmpty: true },
    side: OrderSide.listing,
    query: { pageSize: 5, page: 1 },
  });

  const { show: showBuyModal } = useBuyModal({
    onSuccess: ({ hash }) => hash && setTimeout(refetch, 3000),
    onError: console.error,
  });

  const { show: showOfferModal } = useMakeOfferModal({
    onError: console.error,
  });
  const { data: marketConfig } = useMarketplaceConfig();
  /* starthide */
  const collection = marketConfig?.market?.collections?.find(
    (c) => c.itemsAddress === collectionId,
  );
  /* endhide */
  const { data: currencies } = useMarketCurrencies({
    /* starthide */
    chainId: collection?.chainId || NaN,
    collectionAddress: collection?.itemsAddress as Address,
    includeNativeCurrency: true,
    query: { enabled: !!collection?.chainId && !!collection?.itemsAddress },
    /* endhide */
  });
  /* starthide */
  const orderbookKind = collection?.destinationMarketplace as OrderbookKind;
  /* endhide */
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Collectibles</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {isLoading
          ? "Loading..."
          : collectibles?.collectibles?.map((c) => (
              <CollectibleCard
                key={c.metadata.tokenId}
                collectible={c}
                chainId={chainId}
                collectionAddress={collectionId}
                showBuyModal={showBuyModal}
                showOfferModal={showOfferModal}
                isConnected={!!address && isConnected}
                orderbookKind={orderbookKind}
                priceSymbol={
                  currencies?.find(
                    (cur) =>
                      cur.contractAddress === c.order?.priceCurrencyAddress,
                  )?.symbol
                }
              />
            ))}
      </div>
    </div>
  );
};

/* starthide */
const CollectibleCard = ({
  collectible,
  chainId,
  collectionAddress,
  showBuyModal,
  showOfferModal,
  isConnected,
  orderbookKind,
  priceSymbol,
}: {
  collectible: any;
  chainId: number;
  collectionAddress: Address;
  showBuyModal: any;
  showOfferModal: any;
  isConnected: boolean;
  orderbookKind: string;
  priceSymbol?: string;
}) => {
  const { name, image, tokenId } = collectible.metadata;

  return (
    <div className="flex flex-col w-[350px] px-3 py-3 bg-[#14062a] text-left rounded-[1rem] overflow-clip">
      {image ? (
        <Image
          className="w-full max-w-[28rem] mx-auto aspect-square rounded-lg"
          src={image}
        />
      ) : (
        <div className="w-full max-w-[28rem] mx-auto aspect-square rounded-lg bg-grey-800" />
      )}
      <div className="flex flex-col gap-4 pt-4 px-4">
        <span className="text-20 font-bold leading-tight">{name}</span>
        <div className="text-11 font-medium text-grey-200">Token Id</div>
        <div className="text-white font-bold text-14">{tokenId}</div>
        {isConnected && (
          <div className="flex flex-col gap-2">
            {collectible.order && (
              <button
                className="py-3 px-3 bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] font-bold text-14"
                onClick={() =>
                  showBuyModal({
                    chainId,
                    collectionAddress,
                    collectibleId: tokenId,
                    orderId: collectible.order.orderId,
                    marketplace: orderbookKind,
                  })
                }
              >
                Buy now for {collectible.order.priceAmountFormatted}{" "}
                {priceSymbol || "unknown"}
              </button>
            )}
            <button
              className="py-3 px-3 bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] font-bold text-14"
              onClick={() =>
                showOfferModal({
                  chainId,
                  collectionAddress,
                  collectibleId: tokenId,
                  orderbookKind,
                })
              }
            >
              Make offer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
/* endhide */
