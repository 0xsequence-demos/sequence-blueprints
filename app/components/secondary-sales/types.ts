import type {
  MarketplaceKind,
  Order,
  OrderbookKind,
  Step,
} from "@0xsequence/marketplace-sdk";
import type { Address, Hash, Hex } from "viem";

type ModalCallbacks = {
  onSuccess?: ({ hash, orderId }: { hash?: Hash; orderId?: string }) => void;
  onError?: (error: Error) => void;
  onBuyAtFloorPrice?: () => void;
};

declare enum CurrencyStatus {
  unknown = "unknown",
  created = "created",
  syncing_metadata = "syncing_metadata",
  active = "active",
  failed = "failed",
}

export type ShowBuyModalArgs = {
  orderId: string;
  chainId: number;
  collectionAddress: Address;
  collectibleId: string;
  marketplace: MarketplaceKind;
  customCreditCardProviderCallback?: (buyStep: Step) => void;
  skipNativeBalanceCheck?: boolean;
  nativeTokenAddress?: Address;
};

export type ShowCreateListingModalArgs = {
  collectionAddress: Hex;
  chainId: number;
  collectibleId: string;
  orderbookKind?: OrderbookKind;
  callbacks?: ModalCallbacks;
};
export type ShowMakeOfferModalArgs = {
  collectionAddress: Hex;
  chainId: number;
  collectibleId: string;
  orderbookKind?: OrderbookKind;
  callbacks?: ModalCallbacks;
};

export type ShowSellModalArgs = {
  collectionAddress: Hex;
  chainId: number;
  tokenId: string;
  order: Order;
  callbacks?: ModalCallbacks;
};

export type CurrencyData = {
  contractAddress: string;
  chainId: number;
  status: CurrencyStatus;
  name: string;
  symbol: string;
  decimals: number;
  imageUrl: string;
  exchangeRate: number;
  defaultChainCurrency: boolean;
  nativeCurrency: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};
