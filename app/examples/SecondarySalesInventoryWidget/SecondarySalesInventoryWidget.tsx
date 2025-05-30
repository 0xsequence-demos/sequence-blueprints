/* starthide */
import { CollectibleOrder, OrderbookKind, OrderSide } from "@0xsequence/marketplace-sdk";
import {
	useBalanceOfCollectible,
	useCreateListingModal,
	useListCollectiblesPaginated,
	useMarketCurrencies,
	useMarketplaceConfig,
	useSellModal,
} from "@0xsequence/marketplace-sdk/react";
import type { Address } from "viem";
import { useAccount } from "wagmi";
import { Image } from "@0xsequence-demos/boilerplate-design-system";

/* endhide */
export const SecondarySalesInventoryWidget = ({
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
		chainId: Number(chainId),
		collectionAddress: collectionId,
		filter: {
			includeEmpty: true,
			inAccounts: [address!],
		},
		side: OrderSide.listing,
		query: {
			enabled: !!address,
			pageSize: 5,
			page: 1,
		},
		/* endhide */
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

	const { show: showListModal } = useCreateListingModal({
		/* starthide */
		onError,
		/* endhide */
	});

	const { show: showSellModal } = useSellModal({
		/* starthide */
		onError,
		onSuccess: showSellModalOnSuccess,
		/* endhide */
	});

	const collectiblesFlat = collectibles?.collectibles ?? [];

	const collectionData =
		data?.market?.collections.find(
			(collection) => collection.itemsAddress === collectionId
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
			<h1 className="text-[32px] font-semibold">Your Items</h1>
			{isLoadingCollectibles ? (
				<div className="flex flex-wrap gap-6 justify-center">Loading...</div>
			) : (
				<div className="flex flex-wrap gap-6 justify-center">
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
										currency.contractAddress === collectible.offer?.priceCurrencyAddress
								) || null
							}
						/>
					))}
				</div>
			)}
		</div>
	);
};

const UserInventoryCollectible = ({
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
	showListModal: any;
	showSellModal: any;
	address?: Address;
	isConnected: boolean;
	orderbookKind: OrderbookKind;
	offerPriceCurrencyData: any;
}) => {
	const { name, image, tokenId } = collectible.metadata;

	const { data: userBalanceResp } = useBalanceOfCollectible({
		/* starthide */
		chainId: Number(chainId),
		collectionAddress,
		collectableId: tokenId,
		userAddress: address,
		query: {
			enabled: !!isConnected && !!address,
		},
		/* endhide */
	});

	const tokenBalance = userBalanceResp?.balance;

	const onClickList = () => {
		showListModal({
			/* starthide */
			collectionAddress,
			chainId: Number(chainId),
			collectibleId: tokenId,
			orderbookKind,
			/* endhide */
		});
	};

	const onAcceptOffer = () => {
		showSellModal({
			/* starthide */
			collectionAddress,
			chainId: Number(chainId),
			tokenId,
			order: collectible!.offer!,
			/* endhide */
		});
	};

	const hasOffer = Boolean(collectible?.offer);
	const sellDisabled = !isConnected || !hasOffer || !tokenBalance;
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
						<dt className="text-11 font-medium text-grey-200 leading-[1em]">Token Id</dt>
						<dd className="text-white font-bold text-14">{tokenId || ""}</dd>
					</div>
					<div className="flex flex-col text-end items-end">
						<dt className="text-11 font-medium text-grey-200 leading-[1em]">Owned</dt>
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