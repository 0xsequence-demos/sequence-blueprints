import { useOpenWalletModal } from "@0xsequence/wallet-widget";
import { useOpenConnectModal } from "@0xsequence/connect";
import { useAccount } from "wagmi";
import { WalletConnectionDetail } from "~/components/wallet-connection-detail/WalletConnectionDetail";
import { arbitrumSepolia } from "viem/chains";
export const ContractInventoryWidget = () => {
  const { address } = useAccount();
  const { setOpenConnectModal } = useOpenConnectModal();
  const { setOpenWalletModal } = useOpenWalletModal();
  return address ? (
    <>
      <WalletConnectionDetail address={address} />
      <button
        onClick={() =>
          setOpenWalletModal(true, {
            defaultNavigation: {
              location: "search-collectibles",
              params: {
                selectedCollection: {
                  contractAddress: "0x36631c1e690714192614364ae9629850b546d194",
                  chainId: arbitrumSepolia.id,
                },
              },
            },
          })
        }
      >
        Open Wallet Inventory
      </button>
    </>
  ) : (
    <>
      <p>Not connected</p>
      <button onClick={() => setOpenConnectModal(true)}>Connect</button>
    </>
  );
};
