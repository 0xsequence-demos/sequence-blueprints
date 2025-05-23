import { Image } from "@0xsequence-demos/boilerplate-design-system";
import type {
  CurrencyData,
  ShowBuyModalArgs,
  ShowMakeOfferModalArgs,
} from "../../utils/types";
import type {
  CollectibleOrder,
  MarketplaceKind,
  OrderbookKind,
} from "@0xsequence/marketplace-sdk";
import type { Address } from "viem";

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
  showBuyModal: (args: ShowBuyModalArgs) => void;
  showOfferModal: (args: ShowMakeOfferModalArgs) => void;
  address?: Address;
  isConnected: boolean;
  orderbookKind: OrderbookKind;
  priceCurrencyData: CurrencyData | null;
}) => {
  const { name, image, tokenId } = collectible.metadata;

  const onClickBuy = () =>
    showBuyModal({
      chainId: Number(chainId),
      collectionAddress,
      collectibleId: tokenId,
      orderId: collectible!.order!.orderId,
      marketplace: orderbookKind as unknown as MarketplaceKind,
    });

  const onClickOffer = () => {
    showOfferModal({
      collectionAddress,
      chainId: Number(chainId),
      collectibleId: tokenId,
      orderbookKind,
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
