import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  LoaderFunctionArgs,
  useRouteLoaderData,
} from "react-router";
import type { LinksFunction } from "react-router";
import "./tailwind.css";
import { Toaster } from "sonner";
import {
  getDefaultWaasConnectors,
  SequenceConnectProvider,
} from "@0xsequence/connect";
import { SequenceWalletProvider } from "@0xsequence/wallet-widget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createConfig,
  http,
  WagmiProvider,
  cookieStorage,
  createStorage,
  deserialize,
  parseCookie,
} from "wagmi";

import chains from "~/utils/chains";
import { Favicon } from "~/components/favicon/Favicon";
import { useNonce } from "~/providers/nonce-provider";

import { SkipAhead } from "~/components/skip-ahead/SkipAhead";
import { useState } from "react";
import shiki from "./shiki.css?url";
import { SequenceCheckoutProvider } from "@0xsequence/checkout";
import { WindowController } from "~/components/window-controller/WindowController";
import { WindowRoot } from "~/components/window-controller/WindowRoot";
import { WindowPortal } from "~/components/window-controller/WindowPortal";
import dsbStyles from "@0xsequence-demos/boilerplate-design-system/styles/index.css?url";
import { ChainId } from "@0xsequence/network";
import type { SdkConfig } from '@0xsequence/marketplace-sdk';
import {
  MarketplaceProvider,
  ModalProvider,
} from "@0xsequence/marketplace-sdk/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: dsbStyles },

  { rel: "stylesheet", href: shiki },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "style",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function shouldRevalidate() {
  return true;
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const env = context.cloudflare.env;
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;

  // Define base meta
  const base_path = url.origin;
  const base_title = "Sequence Blueprints";
  const default_description =
    "The Sequence BluePrints is a collection of examples, guides, and tutorials to help you build with the Sequence SDK.";
  const base_image = "";

  // // Wagmi cookie to initial state adapted for React Router 7 (Remix)
  const cookie = request.headers.get("cookie");
  let initialState = null;
  if (cookie) {
    const serializedState = parseCookie(cookie, "wagmi.store");

    initialState = serializedState
      ? deserialize<any>(serializedState).state
      : null;
  }

  return {
    projectId: env.PROJECT_ID,
    projectAccessKey: env.PROJECT_ACCESS_KEY,
    waasConfigKey: env.WAAS_CONFIG_KEY,
    googleClientId: env.GOOGLE_CLIENT_ID,
    appleClientId: env.APPLE_CLIENT_ID,
    appleRedirectURI: origin + pathname,
    walletConnectProjectId: env.WALLET_CONNECT_ID,
    initialState,
    meta: {
      base_title,
      default_description,
      base_path,
      base_image,
    },
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const nonce = useNonce();

  return (
    <html
      lang="en"
      className="flex flex-col flex-1 min-h-full overflow-x-hidden bg-deep-purple-950"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col flex-1 bg-deep-purple-950 bg-body-complex">
        <SkipAhead>Skip to content</SkipAhead>
        {children}
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <Toaster />
      </body>
    </html>
  );
}

export function useConfig() {
  const {
    projectAccessKey,
    waasConfigKey,
    googleClientId,
    appleClientId,
    appleRedirectURI,
    walletConnectProjectId,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useRouteLoaderData<any>("root");

  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId,
    waasConfigKey,
    googleClientId,
    // Notice: Apple Login only works if deployed on https (to support Apple redirects)
    appleClientId,
    appleRedirectURI,
    defaultChainId: ChainId.ARBITRUM_SEPOLIA,
    appName: "WEB SDK Starter",
    projectAccessKey,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transports: { [key: number]: any } = {};

  chains.forEach((chain) => {
    transports[chain.id] = http();
  });

  return useState(() =>
    createConfig({
      ssr: true,
      transports,
      connectors,
      chains,
      storage: createStorage({
        storage: cookieStorage,
      }),
    }),
  );
}

export default function App() {
  const { projectAccessKey, projectId, walletConnectProjectId, initialState } = useLoaderData<typeof loader>();
  const [config] = useConfig();
  const [queryClient] = useState(() => new QueryClient());
  const kitConfig = {
    projectAccessKey,
  };

  const marketplaceSdk = {
    projectId,
    projectAccessKey,
    walletConnectProjectId,
  } satisfies SdkConfig;

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <SequenceConnectProvider config={kitConfig}>
          <SequenceWalletProvider>
            <SequenceCheckoutProvider>
              <MarketplaceProvider config={marketplaceSdk}>
                <WindowController>
                  <WindowRoot />
                  <WindowPortal />
                </WindowController>
                <ModalProvider />
              </MarketplaceProvider>
            </SequenceCheckoutProvider>
          </SequenceWalletProvider>
        </SequenceConnectProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
