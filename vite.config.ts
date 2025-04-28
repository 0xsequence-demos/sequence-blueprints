import { defineConfig, loadEnv } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tsconfigPaths from "vite-tsconfig-paths";
import { getLoadContext } from "./load-context";
import { envOnlyMacros } from "vite-env-only";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 4444,
    },
    plugins: [
      cloudflareDevProxy({
        getLoadContext,
      }),
      envOnlyMacros(),
      reactRouter(),
      tsconfigPaths(),
      cjsInterop({
        dependencies: ["react-copy-to-clipboard"],
      }),
    ],
    ssr: {
      noExternal: [
        "@0xsequence/connect",
        "@0xsequence/wallet-widget",
        "@0xsequence/checkout",
        "@0xsequence/hooks",
        "use-sound",
      ],
      resolve: {
        conditions: ["workerd", "worker", "browser"],
      },
    },
    optimizeDeps: {
      include: ["react-copy-to-clipboard"],
      // exclude: ["@0xsequence/kit-checkout"],
    },
    resolve: {
      mainFields: ["browser", "module", "main"],
    },
    define: {
      "import.meta.env.VITE_PROJECT_ACCESS_KEY": JSON.stringify(
        env.PROJECT_ACCESS_KEY,
      ),
    },
    build: {
      minify: true,
    },
  };
});
