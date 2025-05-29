import { BuyWithCryptoCardWidget } from "~/examples/BuyWithCryptoCardWidget";
import { useAccount, useReadContract } from "wagmi";
import { AuthenticationWidget } from "~/examples/AuthenticationWidget";
import { PlayCard } from "../../components/playcard/PlayCard";
import { Resources } from "~/components/resources/Resources";
import { SALES_CONTRACT_ABI } from "~/utils/primary-sales/abis/salesContractAbi";
import { useSalesCurrency } from "~/hooks/useSalesCurrency";
import { saleConfiguration } from "~/utils/primary-sales/helpers";
import { ERC20_ABI } from "~/utils/primary-sales/ERC20/ERC20_abi";
import { NFT_TOKEN_CONTRACT_ABI } from "~/utils/primary-sales/abis/nftTokenContractAbi";
import { Link } from "react-router";
import { useState } from "react";
import { Divider } from "@0xsequence-demos/boilerplate-design-system";
import { CopyToClipboardButton } from "../../components/copy-to-clipboard-button/CopyToClipboardButton";
import { SecondarySales } from "~/components/secondary-sales.tsx/SecondarySales";

export const formatPriceWithDecimals = (
	price: bigint,
	tokenDecimals: number,
): string => {
	if (!price) {
		return "";
	}
	const divisor = BigInt(10 ** tokenDecimals);

	const integerPart = price / divisor;
	const decimalPart = price % divisor;

	let formattedDecimal = decimalPart.toString().padStart(tokenDecimals, "0");

	formattedDecimal = formattedDecimal.replace(/0+$/, "");

	return formattedDecimal
		? `${integerPart.toString()}.${formattedDecimal}`
		: integerPart.toString();
};

const info = {
	name: "secondary-sale-nft",
	path: "/monetize/secondary-sale-nft",
	title: "Secondary Sale for NFTs",
	shortname: "Secondary Sale for NFTs",
	platforms: {
		web: "https://docs.sequence.xyz/solutions/marketplaces/custom-marketplace/overview",
	},
	image: {
		src: "primary-sale-nft",
	},
	description: "Allow users to purchase NFTs through peer-to-peer transactions!",
} as const;

interface GlobalSalesDetailsData {
	cost: bigint;
	endtime: bigint;
	merkleRoot: string;
	startTime: bigint;
	supplyCap: bigint;
}

function component() {
	// return <h2>🚧 Coming soon! 🚧</h2>;
	const { address: userAddress, chainId } = useAccount();

	const { data: currencyData, isLoading: currencyDataIsLoading } =
		useSalesCurrency(saleConfiguration);
	const {
		data: tokenSaleDetailsData,
		// isLoading: tokenSaleDetailsDataIsLoading,
	} = useReadContract({
		abi: SALES_CONTRACT_ABI,
		functionName: "globalSaleDetails",
		chainId: saleConfiguration.chainId,
		address: saleConfiguration.salesContractAddress as `0x${string}`,
	});

	// Fetch the user payment currency balance
	const {
		data: userPaymentCurrencyBalance,
		// isLoading: userPaymentCurrencyBalanceIsLoading,
	} = useReadContract(
		currencyData?.address && userAddress
			? {
					abi: ERC20_ABI,
					functionName: "balanceOf",
					chainId: saleConfiguration.chainId,
					address: currencyData.address as `0x${string}`,
					args: [userAddress],
					query: {
						refetchInterval: 30000,
						enabled: Boolean(currencyData?.address && userAddress),
					},
				}
			: undefined,
	);

	// Fetch the total minted NFTs
	const {
		// isLoading: nftsMintedIsLoading,
		refetch: refetchTotalMinted,
	} = useReadContract({
		abi: NFT_TOKEN_CONTRACT_ABI,
		functionName: "totalSupply",
		chainId: chainId,
		address: saleConfiguration.nftTokenAddress,
	});

	const price =
		(tokenSaleDetailsData as GlobalSalesDetailsData)?.cost || BigInt(0);

	const currencyDecimals: number | undefined = currencyData?.decimals;

	const [somethingBought, setSomethingBought] = useState(false);

	return (
		<>
			<div className="py-8 prose">
				<h2>Buy an NFT from a secondary sale</h2>
				<p>
					Secondary sales for NFTs allow your users to trade with each other.
				</p>
				<p>When users list their NFTs for sale, others can buy them — enabling peer-to-peer trading</p>
				<span>
					<Link
						className="underline"
						to="https://faucet.circle.com/"
						target="_blank"
						referrerPolicy="no-referrer"
					>
						Get some USDC on arbitrum sepolia to try the demo 👈
					</Link>
					{userAddress ? (
						<>
							{" - "}
							<CopyToClipboardButton
								value={userAddress.toString()}
								className="inline underline"
							>
								Copy wallet address
							</CopyToClipboardButton>
						</>
					) : null}
				</span>
			</div>

			<PlayCard>
				<PlayCard.Preview
					botMood={
						!userAddress ? "dead" : somethingBought ? "happy" : "neutral"
					}
				>
					{userAddress ? (
						<SecondarySales />
					) : (
						<AuthenticationWidget />
					)}
					{/* </Group> */}
				</PlayCard.Preview>

				<PlayCard.Code
					copy={BuyWithCryptoCardWidget.String}
					steps={BuyWithCryptoCardWidget.steps}
				/>
			</PlayCard>
			<Resources
				items={[
					"marketplace-hooks-boilerplate"
				]}
			/>
		</>
	);
}

export default { info, component };
