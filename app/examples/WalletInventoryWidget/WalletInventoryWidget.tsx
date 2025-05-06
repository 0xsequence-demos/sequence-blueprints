import { useOpenWalletModal } from "@0xsequence/wallet-widget";
import { useOpenConnectModal } from "@0xsequence/connect";
import { useAccount } from "wagmi";
import { WalletConnectionDetail } from "~/components/wallet-connection-detail/WalletConnectionDetail";

export const WalletInventoryWidget = () => {
  const { address } = useAccount();
  const { setOpenConnectModal } = useOpenConnectModal();
  const { setOpenWalletModal } = useOpenWalletModal();

  return (
    <>
      {address ? (
        <div className="flex flex-col space-y-4">
          <WalletConnectionDetail address={address} />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              onClick={() =>
                setOpenWalletModal(true, {
                  defaultNavigation: { location: "search-tokens" },
                })
              }
              className="flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Open wallet tokens"
            >
              Open Wallet Tokens
            </button>

            <button
              onClick={() =>
                setOpenWalletModal(true, {
                  defaultNavigation: { location: "search-collectibles" },
                })
              }
              className="flex h-10 items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Open wallet collectibles"
            >
              Open Wallet Collectibles
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-3 py-4">
          <p>Not connected</p>
          <button onClick={() => setOpenConnectModal(true)}>Connect</button>
        </div>
      )}
    </>
  );
};
