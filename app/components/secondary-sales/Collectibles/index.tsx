import { OrderbookKind, OrderSide } from "@0xsequence/marketplace-sdk";
import {
  useBuyModal,
  useMarketCurrencies,
  useMakeOfferModal,
  useMarketplaceConfig,
  useListCollectiblesPaginated,
} from "@0xsequence/marketplace-sdk/react";
import { Collectible } from "./Collectible";
import type { Address } from "viem";
import { useAccount } from "wagmi";
import { useState } from "react";
import { PaginationBtns } from "../components/PaginationBtns";
import { CollectableSkeleton } from "../components/CollectableSkeleton";

export const Collectibles = ({
  collectionId,
  chainId,
}: {
  collectionId: Address;
  chainId: number;
}) => {
  const [page, setPage] = useState(1);
  const { address, isConnected } = useAccount();

  const {
    data: collectibles,
    isLoading: isLoadingCollectibles,
    refetch: refetchCollectibles,
  } = useListCollectiblesPaginated({
    chainId: Number(chainId),
    collectionAddress: collectionId,
    filter: {
      // # Optional filters
      includeEmpty: true,
      // searchText: text,
      // properties,
    },
    query: {
      pageSize: 1,
      page,
    },
    side: OrderSide.listing,
  });

  const { data } = useMarketplaceConfig();

  const onError = (error: Error) => {
    console.error(error.message);
  };

  const showBuyModalOnSuccess = ({ hash }: { hash?: `0x${string}` }) => {
    console.log("Buy transaction sent with hash: ", hash);
    if (hash)
      setTimeout(() => {
        refetchCollectibles();
      }, 3000);
  };

  const { show: showBuyModal } = useBuyModal({
    onSuccess: showBuyModalOnSuccess,
    onError,
  });

  const { show: showOfferModal } = useMakeOfferModal({
    onError,
  });

  const collectiblesFlat = collectibles?.collectibles || [];
  const hasMorePages = !!collectibles?.page?.more;
  const collectionData =
    data?.market?.collections?.find(
      (collection) => collection.itemsAddress === collectionId
    ) || null;

  const { data: currenciesData } = useMarketCurrencies({
    chainId: collectionData?.chainId || NaN,
    collectionAddress: collectionData?.itemsAddress as Address,
    includeNativeCurrency: true,
    query: {
      enabled: !!collectionData?.chainId && !!collectionData?.itemsAddress,
    },
  });

  const orderbookKind: OrderbookKind =
    (collectionData?.destinationMarketplace || "") as unknown as OrderbookKind;

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-[32px] font-semibold">Collectibles</h1>
      {isLoadingCollectibles ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <CollectableSkeleton />
        </div>
      ) : (
        <PaginationBtns
          onChangePage={setPage}
          currentPage={page}
          hasMorePages={hasMorePages}
        >
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
                      collectible.order?.priceCurrencyAddress
                  ) || null
                }
              />
            ))}
          </div>
        </PaginationBtns>
      )}
    </div>
  );
};
