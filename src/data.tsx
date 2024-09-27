import { CommonPageProps } from "./views/pages/common/Props";
import { PageAuthenticate } from "./views/pages/PageAuthenticate";
import { PageChainEventWebhooks } from "./views/pages/PageChainEventWebhooks";
import { PageCryptoOnramp } from "./views/pages/PageCryptoOnramp";
import { PageDisplayWalletInventory } from "./views/pages/PageDisplayWalletInventory";
import { PageDisplayWalletSubInventory } from "./views/pages/PageDisplayWalletSubInventory";
import { PageInGameMarketplace } from "./views/pages/PageInGameMarketplace";
import { PageLinkWallets } from "./views/pages/PageLinkWallets";
import { PageMintTokens } from "./views/pages/PageMintTokens";
import { PageNothingHere } from "./views/pages/PageNothingHere";
import { PagePrimaryOffChainSales } from "./views/pages/PagePrimaryOffChainSales";
import { PagePrimaryOnChainSales } from "./views/pages/PagePrimaryOnChainSales";

export const categories = ["Onboard", "Monetize", "Power"] as const;
export type Category = (typeof categories)[number];

export const categoryIcons: { [K in Category]: string } = {
  Onboard: "🚢",
  Monetize: "💰",
  Power: "⚡️",
};

export const demos = [
  "kit-embedded-wallet-react-boilerplate",
  "kit-embedded-wallet-nextjs-boilerplate",
  "kit-universal-wallet-nextjs-boilerplate",
  "kit-universal-wallet-react-boilerplate",
  "marketplace-boilerplate",
  "ingame-marketplace-boilerplate",
  "gift-wallet-inventory-boilerplate",
  "offchain-sales-boilerplate",
  "crypto-onramp-boilerplate",
  "nft-checkout-boilerplate",
  "primary-drop-sale-boilerplate",
] as const;

export type Demo = (typeof demos)[number];

export const niceDemoNames: { [K in Demo]: string } = {
  "kit-embedded-wallet-react-boilerplate": "Embedded Wallet for React",
  "kit-embedded-wallet-nextjs-boilerplate": "Embedded Wallet for Next.js",
  "kit-universal-wallet-nextjs-boilerplate": "Universal Wallet for Next.js",
  "kit-universal-wallet-react-boilerplate": "Universal Wallet for React",
  "marketplace-boilerplate": "White-label Marketplace",
  "ingame-marketplace-boilerplate": "In-Game Marketplace",
  "gift-wallet-inventory-boilerplate": "Inventory and Gifting",
  "offchain-sales-boilerplate": "Offchain Sales",
  "crypto-onramp-boilerplate": "Crypto Onramp",
  "nft-checkout-boilerplate": "NFT Checkout",
  "primary-drop-sale-boilerplate": "Primary Drop Sale",
};

class UserStory {
  constructor(
    public category: Category,
    public label: string,
    public summary: string,
    public page: (props: CommonPageProps) => JSX.Element = PageNothingHere,
    public demos?: Demo[],
  ) {
    //
  }
}
function us(...args: ConstructorParameters<typeof UserStory>) {
  return new UserStory(...args);
}

export const userStories: UserStory[] = [
  us(
    "Onboard",
    "Authenticate",
    "Authenticate users with email or social login using Embedded Wallet",
    PageAuthenticate,
    [
      "kit-embedded-wallet-react-boilerplate",
      "kit-embedded-wallet-nextjs-boilerplate",
    ],
  ),
  us(
    "Onboard",
    "Link Wallets",
    "Link multiple wallets to a single player profile",
    PageLinkWallets,
  ),
  us(
    "Onboard",
    "Display Wallet Inventory",
    "Display wallet inventory with Sequence Kit",
    PageDisplayWalletInventory,
    ["marketplace-boilerplate"],
  ),
  us(
    "Monetize",
    "In-Game Marketplace",
    "Launch an embedded marketplace",
    PageInGameMarketplace,
    ["ingame-marketplace-boilerplate"],
  ),
  us(
    "Monetize",
    "Primary On-Chain Sales",
    "Sell on-chain items, accept payments in credit/debit card or any cryptocurrency on any EVM chain",
    PagePrimaryOnChainSales,
    ["nft-checkout-boilerplate", "primary-drop-sale-boilerplate"],
  ),
  us(
    "Monetize",
    "Primary Off-Chain Sales",
    "Sell off-chain items, accept payments in any cryptocurrency on any EVM chain",
    PagePrimaryOffChainSales,
    ["offchain-sales-boilerplate"],
  ),
  us(
    "Monetize",
    "Crypto Onramp",
    "Fund wallets with easy onramp links for fiat to crypto",
    PageCryptoOnramp,
    ["crypto-onramp-boilerplate"],
  ),
  us(
    "Power",
    "Display Wallet Sub-Inventory",
    "Query wallet inventory for a specific contract",
    PageDisplayWalletSubInventory,
    ["marketplace-boilerplate", "gift-wallet-inventory-boilerplate"],
  ),
  us(
    "Power",
    "Mint Tokens",
    "Mint any token from your backend securely, leveraging Transaction APIs",
    PageMintTokens,
    ["gift-wallet-inventory-boilerplate"],
  ),
  us(
    "Power",
    "Chain Event Webhooks",
    "Listen to any blockchain event using webhooks count and list successful transactions",
    PageChainEventWebhooks,
    ["ingame-marketplace-boilerplate"],
  ),
];
