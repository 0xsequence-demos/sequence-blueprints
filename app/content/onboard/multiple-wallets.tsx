import { SendTestTransactionWidget } from "~/examples/SendTestTransactionWidget";
import { SignMessageWidget } from "~/examples/SignMessageWidget";
import { useAccount } from "wagmi";
import { useState } from "react";
import { AuthenticationWidget } from "~/examples/AuthenticationWidget";
import { PlayCard } from "../../components/playcard/PlayCard";
import { Resources } from "~/components/resources/Resources";
import { Divide } from "~/components/divide/Divide";
import { RequireWalletButton } from "~/components/require-wallet-button/RequireWalletButton";
import { useOpenConnectModal } from "@0xsequence/kit";

const info = {
  name: "multiple-wallets",
  path: "/onboard/multiple-wallets",
  title: "Wallet Linking for Better Wallet Management",
  shortname: "Multiple Wallets",
  image: {
    src: "multiple-wallets",
  },
  description: "Link Multiple Wallets to bring your players' assets together",
} as const;

const resources = ["wallet-linking-boilerplate"];

function component() {
  const { address } = useAccount();
  const { setOpenConnectModal } = useOpenConnectModal();
  const [transaction, setTransaction] = useState<`0x${string}` | undefined>();
  const [signedData, setSignedData] = useState<`0x${string}` | undefined>();

  const onClickConnect = () => {
    setOpenConnectModal(true);
  };

  return (
    <>
      <h2>Nobody has just one wallet anymore</h2>
      Make life easier for your users, by letting them link wallets together and
      stop shuffling assets back and forth
      <PlayCard>
        <button onClick={onClickConnect}>Connect another wallet</button>

        <PlayCard.Code
          copy={AuthenticationWidget.String}
          steps={AuthenticationWidget.steps}
        />
      </PlayCard>
      {/* <Divide /> */}
      {/* Now that you linked wallets, you can: */}
      {/* <h2>Pay for an item with funds from a linked wallet</h2> */}
      {/* <PlayCard> */}
      {/*   <PlayCard.Preview */}
      {/*     botMood={!address ? "dead" : signedData ? "happy" : "neutral"} */}
      {/*   > */}
      {/*     {address ? ( */}
      {/*       <SignMessageWidget setData={setSignedData} /> */}
      {/*     ) : ( */}
      {/*       <RequireWalletButton title="Connect a wallet test signing a message" /> */}
      {/*     )} */}
      {/*   </PlayCard.Preview> */}
      {/**/}
      {/*   <PlayCard.Code */}
      {/*     copy={SignMessageWidget.String} */}
      {/*     steps={SignMessageWidget.steps} */}
      {/*   /> */}
      {/* </PlayCard> */}
      <Resources items={resources} />
    </>
  );
}

export default {
  info,
  component,
};
