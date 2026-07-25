/* eslint-disable @typescript-eslint/no-explicit-any */
/* starthide */
import { OrderbookKind, OrderSide } from "@0xsequence/marketplace-sdk";
import {
  useBuyModal,
  useMarketCurrencies,
  useMakeOfferModal,
  useMarketplaceConfig,
  useListCollectiblesPaginated,
} from "@0xsequence/marketplace-sdk/react";
import type { Address } from "viem";
import { useAccount } from "wagmi";
import { Image } from "@0xsequence-demos/boilerplate-design-system";
import type {
  CollectibleOrder,
  MarketplaceKind,
} from "@0xsequence/marketplace-sdk";
/* endhide */

export const SecondarySalesWidget = ({
  collectionId,
  chainId,
}: {
  collectionId: Address;
  chainId: number;
}) => {
  const { address, isConnected } = useAccount();

  const {
    data: collectibles,
    isLoading: isLoadingCollectibles,
    refetch: refetchCollectibles,
  } = useListCollectiblesPaginated({
    /* starthide */
    chainId,
    collectionAddress: collectionId,
    filter: {
      includeEmpty: true,
    },
    side: OrderSide.listing,
    query: {
      pageSize: 5,
      page: 1,
    },
    /* endhide */
  });

  const { data } = useMarketplaceConfig();

  const onError = (error: Error) => {
    /* starthide */
    console.error(error.message);
    /* endhide */
  };

  const showBuyModalOnSuccess = ({ hash }: { hash?: `0x${string}` }) => {
    /* starthide */
    console.log("Buy transaction sent with hash: ", hash);
    if (hash)
      setTimeout(() => {
        refetchCollectibles();
      }, 3000);
    /* endhide */
  };

  const { show: showBuyModal } = useBuyModal({
    onSuccess: showBuyModalOnSuccess,
    onError,
  });

  const { show: showOfferModal } = useMakeOfferModal({
    onError,
  });

  const collectiblesFlat = collectibles?.collectibles || [];

  const collectionData =
    data?.market?.collections?.find(
      (collection) => collection.itemsAddress === collectionId,
    ) || null;

  const { data: currenciesData } = useMarketCurrencies({
    /* starthide */
    chainId: collectionData?.chainId || NaN,
    collectionAddress: collectionData?.itemsAddress as Address,
    includeNativeCurrency: true,
    query: {
      enabled: !!collectionData?.chainId && !!collectionData?.itemsAddress,
    },
    /* endhide */
  });

  const orderbookKind: OrderbookKind =
    (collectionData?.destinationMarketplace || "") as unknown as OrderbookKind;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Collectibles</h1>
      {isLoadingCollectibles ? (
        <div className="flex flex-wrap gap-6 justify-center">Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {collectiblesFlat?.map((collectible) => (
            <Collectible
              key={collectible.metadata.tokenId}
              collectible={collectible}
              chainId={String(chainId)}
              collectionAddress={collectionId}
              showBuyModal={showBuyModal}
              showOfferModal={showOfferModal}
              address={address}
              isConnected={isConnected}
              orderbookKind={orderbookKind}
              priceCurrencyData={
                currenciesData?.find(
                  (currency) =>
                    currency.contractAddress ===
                    collectible.order?.priceCurrencyAddress,
                ) || null
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Collectible = ({
  collectible,
  chainId,
  collectionAddress,
  showBuyModal,
  showOfferModal,
  address,
  isConnected,
  orderbookKind,
  priceCurrencyData,
}: {
  collectible: CollectibleOrder;
  chainId: string;
  collectionAddress: Address;
  showBuyModal: any;
  showOfferModal: any;
  address?: Address;
  isConnected: boolean;
  orderbookKind: OrderbookKind;
  priceCurrencyData: any;
}) => {
  const { name, image, tokenId } = collectible.metadata;

  const onClickBuy = () =>
    showBuyModal({
      /* starthide */
      chainId: Number(chainId),
      collectionAddress,
      collectibleId: tokenId,
      orderId: collectible!.order!.orderId,
      marketplace: orderbookKind as unknown as MarketplaceKind,
      /* endhide */
    });

  const onClickOffer = () => {
    showOfferModal({
      /* starthide */
      collectionAddress,
      chainId: Number(chainId),
      collectibleId: tokenId,
      orderbookKind,
      /* endhide */
    });
  };

  const showActionButtons = address && isConnected;

  return (
    <div className="flex flex-col w-[350px] px-3 py-3 border border-transparent bg-[#14062a] text-left rounded-[1rem] overflow-clip">
      {image ? (
        <Image
          className=" w-full max-w-[28rem] mx-auto aspect-square rounded-lg"
          src={image}
        />
      ) : (
        <div className="w-full max-w-[28rem] mx-auto aspect-square rounded-[0.5rem] bg-grey-800 rounded-lg"></div>
      )}

      <div className="flex flex-col gap-4 pt-4">
        <div className="flex flex-col gap-1 px-4">
          <span className="text-20 font-bold leading-tight">{name || ""}</span>
        </div>

        <dl className="flex justify-between gap-4 border-t border-grey-800 px-6 py-3">
          <div className="flex flex-col">
            <dt className="text-11 font-medium text-grey-200 leading-[1em]">
              Token Id
            </dt>
            <dd className="text-white font-bold text-14">{tokenId || ""}</dd>
          </div>
        </dl>
      </div>

      {showActionButtons && (
        <div className="flex flex-col gap-2">
          {collectible.order && (
            <button
              className="py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer"
              onClick={onClickBuy}
            >
              Buy now for {collectible.order.priceAmountFormatted}{" "}
              {priceCurrencyData?.symbol || "unknown"}
            </button>
          )}
          <button
            className="py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer"
            onClick={onClickOffer}
          >
            Make offer
          </button>
        </div>
      )}
    </div>
  );
};
