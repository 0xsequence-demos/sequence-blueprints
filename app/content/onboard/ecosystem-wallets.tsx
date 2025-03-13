import { Resources } from "~/components/resources/Resources";
import { MultipleWalletConnectWidget } from "~/examples/MultipleWalletConnectWidget";
import { useAccount } from "wagmi";
import { ResourceName } from "../resources";

const info = {
  name: "ecosystem-wallets",
  path: "/onboard/ecosystem-wallets",
  title: "Ecosystem Wallets",
  shortname: "Ecosystem Wallets",
  // image: {
  //   src: "ecosystem-wallets",
  // },

  platforms: {
    web: "https://docs.sequence.xyz/solutions/wallets/ecosystem/overview",
  },
  description: "Create an ecosystem wallet - cross-app and native to your ecosystem.",
} as const;

const resources: ResourceName[] = ["ecosystem-wallet"];

const dependencies = [MultipleWalletConnectWidget];

function component() {
  const { address } = useAccount();

  const handleIframeClick = () => {
    // redirect to the web platform
    window.open("https://acme.ecosystem-demo.xyz/auth", "_blank");
  };

  return (
    <>
      <h2>Create an Ecosystem Wallet for your chain or app.</h2>
      <p>
        Experience a seamless, embedded UX for native applications in your ecosystem while enabling users to leverage their same address in applications beyond from external marketplaces to DEX's.
      </p>
      
      <p>
        Try out our ecosystem demo portal below with Acme by logging in. Play Mining Quest and mint items from the Discover tab for the cross-app experience. Then list or sell them on the marketplace for a native experience:
      </p>
      
      <div className="relative aspect-[calc(3/4)] lg:aspect-[calc(8/5)] w-full overflow-hidden mx-auto rounded-xl">
        <button
          className="absolute top-0 left-0 w-full h-full bg-transparent"
          onClick={handleIframeClick}
          rel="noreferrer"
        />

        <iframe
          className="rounded-xl w-full h-full"
          src="https://acme.ecosystem-demo.xyz/auth"
        />
      </div>
      <Resources items={resources} />
    </>
  );
}

export default {
  info,
  component,
  dependencies,
};
