import { SecondarySalesInventoryWidget } from "~/examples/SecondarySalesInventoryWidget";
import { useAccount, useReadContract } from "wagmi";
import { AuthenticationWidget } from "~/examples/AuthenticationWidget";
import { PlayCard } from "../../components/playcard/PlayCard";
import { Resources } from "~/components/resources/Resources";
import { Link } from "react-router";
import { useState } from "react";
import { CopyToClipboardButton } from "../../components/copy-to-clipboard-button/CopyToClipboardButton";
import { SecondarySalesWidget } from "~/examples/SecondarySalesWidget";
import { Divide } from "~/components/divide/Divide";
import { Collectibles } from "~/components/secondary-sales/Collectibles";
import { UserInventory } from "~/components/secondary-sales/UserInventory";
export const formatPriceWithDecimals = (
  price: bigint,
  tokenDecimals: number
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
  description:
    "Allow users to purchase NFTs through peer-to-peer transactions!",
} as const;

enum Tabs {
  secondarySales = "secondary-sales",
  inventory = "inventory",
}

const chainId = 421614;
const collectionId = "0x36631c1e690714192614364ae9629850b546d194";

function component() {
  const { address: userAddress } = useAccount();
  return (
    <>
      <div className="py-8 prose">
        <h2>Buy an NFT from a secondary sale</h2>
        <p>
          Secondary sales for NFTs allow your users to trade with each other.
        </p>
        <p>
          When users list their NFTs for sale, others can buy them — enabling
          peer-to-peer trading
        </p>
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
            !userAddress ? "dead" : "neutral"
          }
        >
          {userAddress ? (
            <Collectibles chainId={chainId} collectionId={collectionId}/>
          ) : (
            <AuthenticationWidget />
          )}
        </PlayCard.Preview>
        <PlayCard.Code
          copy={SecondarySalesWidget.String}
          steps={SecondarySalesWidget.steps}
        />
      </PlayCard>

      <Divide/>

      <PlayCard>
        <PlayCard.Preview
          botMood={
            !userAddress ? "dead" : "neutral"
          }
        >
          {userAddress ? (
            <UserInventory chainId={chainId} collectionId={collectionId}/>
          ) : (
            <AuthenticationWidget />
          )}
        </PlayCard.Preview>
        <PlayCard.Code
          copy={SecondarySalesInventoryWidget.String}
          steps={SecondarySalesInventoryWidget.steps}
        />
      </PlayCard>
      <Resources items={["marketplace-hooks-boilerplate"]} />
    </>
  );
}

export default { info, component };
