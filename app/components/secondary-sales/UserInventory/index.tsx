import { OrderbookKind, OrderSide } from "@0xsequence/marketplace-sdk";
import {
  useCreateListingModal,
  useListCollectiblesPaginated,
  useMarketCurrencies,
  useMarketplaceConfig,
  useSellModal,
} from "@0xsequence/marketplace-sdk/react";
import type { Address } from "viem";
import { useAccount } from "wagmi";
import { UserInventoryCollectible } from "./UserInventoryCollectible";
import { useState } from "react";
import { PaginationBtns } from "../components/PaginationBtns";
import { CollectableSkeleton } from "../components/CollectableSkeleton";

export const UserInventory = ({
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
      inAccounts: [address!],
      // searchText: text,
      // properties,
    },
    side: OrderSide.listing,
    query: {
      enabled: !!address,
      pageSize: 1,
      page,
    },
  });

  const { data } = useMarketplaceConfig();

  const onError = (error: Error) => {
    console.error(error.message);
  };

  const showSellModalOnSuccess = ({ hash }: { hash?: `0x${string}` }) => {
    if (hash)
      setTimeout(() => {
        refetchCollectibles();
      }, 3000);
  };

  const { show: showListModal } = useCreateListingModal({ onError });
  const { show: showSellModal } = useSellModal({
    onError,
    onSuccess: showSellModalOnSuccess,
  });

  const collectiblesFlat = collectibles?.collectibles ?? [];
  const hasMorePages = !!collectibles?.page?.more;
  const collectionData =
    data?.market?.collections.find(
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
      <h1 className="text-[32px] font-semibold">Your Items</h1>
      {isLoadingCollectibles ? (
        <div className="flex flex-wrap gap-6 justify-center">
          <CollectableSkeleton />
        </div>
      ) : (
        <div className="flex flex-col flex-wrap gap-6 justify-center">
          {collectiblesFlat && collectiblesFlat?.length === 0 && (
            <div>No items to show</div>
          )}
          {collectiblesFlat && collectiblesFlat?.length > 0 && (
            <PaginationBtns
              onChangePage={setPage}
              currentPage={page}
              hasMorePages={hasMorePages}
            >
              {collectiblesFlat?.map((collectible) => (
                <UserInventoryCollectible
                  key={collectible.metadata.tokenId}
                  collectible={collectible}
                  chainId={String(chainId)}
                  collectionAddress={collectionId}
                  showListModal={showListModal}
                  showSellModal={showSellModal}
                  address={address}
                  isConnected={isConnected}
                  orderbookKind={orderbookKind}
                  offerPriceCurrencyData={
                    currenciesData?.find(
                      (currency) =>
                        currency.contractAddress ===
                        collectible.offer?.priceCurrencyAddress
                    ) || null
                  }
                />
              ))}
            </PaginationBtns>
          )}
        </div>
      )}
    </div>
  );
};
