import { Image } from "@0xsequence-demos/boilerplate-design-system";
import type {
  CurrencyData,
  ShowCreateListingModalArgs,
  ShowSellModalArgs,
} from "../types";
import type {
  CollectibleOrder,
  OrderbookKind,
} from "@0xsequence/marketplace-sdk";
import { useBalanceOfCollectible } from "@0xsequence/marketplace-sdk/react";
import type { Address } from "viem";

export const UserInventoryCollectible = ({
  collectible,
  chainId,
  collectionAddress,
  showListModal,
  showSellModal,
  address,
  isConnected,
  orderbookKind,
  offerPriceCurrencyData,
}: {
  collectible: CollectibleOrder;
  chainId: string;
  collectionAddress: Address;
  showListModal: (args: ShowCreateListingModalArgs) => void;
  showSellModal: (args: ShowSellModalArgs) => void;
  address?: Address;
  isConnected: boolean;
  orderbookKind: OrderbookKind;
  offerPriceCurrencyData: CurrencyData | null;
}) => {
  const { name, image, tokenId } = collectible.metadata;

  const { data: userBalanceResp } = useBalanceOfCollectible({
    chainId: Number(chainId),
    collectionAddress,
    collectableId: tokenId,
    userAddress: address,
    query: {
      enabled: !!isConnected && !!address,
    },
  });

  const tokenBalance = userBalanceResp?.balance;

  const onClickList = () => {
    showListModal({
      collectionAddress,
      chainId: Number(chainId),
      collectibleId: tokenId,
      orderbookKind,
    });
  };

  const onAcceptOffer = () => {
    showSellModal({
      collectionAddress,
      chainId: Number(chainId),
      tokenId,
      order: collectible!.offer!,
    });
  };

  const hasOffer = Boolean(collectible?.offer);
  const sellDisabled = !isConnected || !hasOffer || !tokenBalance;
  const showActionButtons = address && isConnected;

  return (
    <div className="flex max-w-[17rem] flex-col px-3 py-3 border border-transparent bg-[#14062a] text-left rounded-[1rem] overflow-clip">
      {image ? (
        <Image
          className=" w-full max-w-[15rem] mx-auto aspect-square rounded-lg"
          src={image}
        />
      ) : (
        <div className="w-full max-w-[15rem] mx-auto aspect-square rounded-[0.5rem] bg-grey-800 rounded-lg"></div>
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
          <div className="flex flex-col text-end items-end">
            <dt className="text-11 font-medium text-grey-200 leading-[1em]">
              Owned
            </dt>
            <dd className="text-white font-bold text-14">{tokenBalance}</dd>
          </div>
        </dl>
      </div>
      {showActionButtons && (
        <div className="flex flex-col gap-2">
          {tokenBalance && (
            <button
              className="py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer"
              onClick={onClickList}
            >
              List for Sale
            </button>
          )}
          {!sellDisabled && (
            <button
              className="py-3 px-3 border border-transparent bg-[linear-gradient(to_left,_#7537f9,_#5826ff)] rounded-[0.5rem] min-w-[50px] font-bold text-14 cursor-pointer"
              onClick={onAcceptOffer}
            >
              Sell Now for {collectible.offer?.priceAmountFormatted}{" "}
              {offerPriceCurrencyData?.symbol || "unknown"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
