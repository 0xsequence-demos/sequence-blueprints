export const codeString = "import { Session, SessionSettings } from \"@0xsequence/auth\";\nimport { ethers } from \"ethers\";\nimport { useOpenConnectModal } from \"@0xsequence/kit\";\nimport { findSupportedNetwork, networks } from \"@0xsequence/network\";\nimport { Dispatch, SetStateAction, useEffect, useState } from \"react\";\nimport { Form } from \"react-router\";\nimport { serverOnly$ } from \"vite-env-only/macros\";\nimport { useAccount } from \"wagmi\";\nimport { useWidgetActionData } from \"~/hooks/useWidgetActionData\";\nexport type MintStatus = \"notStarted\" | \"pending\" | \"success\" | \"failed\";\nexport const action = serverOnly$(async (req, formData) => {\n  if (formData.get(\"name\") !== \"MintTokenWidget\") {\n    return {};\n  }\n  const env = req.context.cloudflare.env;\n  const walletAddress = formData.get(\"walletAddress\");\n  const tokenId = parseInt(formData.get(\"tokenId\"));\n  const network = findSupportedNetwork(env.CHAIN_HANDLE)!;\n  const relayerUrl = `https://${env.CHAIN_HANDLE}-relayer.sequence.app`;\n  const settings: Partial<SessionSettings> = {\n    networks: [\n      {\n        ...networks[network.chainId],\n        rpcUrl: network.rpcUrl,\n        relayer: {\n          url: relayerUrl,\n          provider: {\n            url: network.rpcUrl,\n          },\n        },\n      },\n    ],\n  };\n  const session = await Session.singleSigner({\n    settings: settings,\n    signer: env.PKEY,\n    projectAccessKey: env.BUILDER_PROJECT_ACCESS_KEY,\n  });\n  const signer = session.account.getSigner(network.chainId);\n  const collectibleInterface = new ethers.Interface([\n    \"function mint(address to, uint256 tokenId, uint256 amount, bytes data)\",\n  ]);\n  const dataArgs = [walletAddress, tokenId, 1, \"0x00\"];\n  const data = collectibleInterface.encodeFunctionData(\"mint\", dataArgs);\n  return await signer.sendTransaction({\n    to: env.DEMO_ITEMS_CONTRACT_ADDRESS,\n    data,\n  });\n});\nexport const MintTokenWidget = (props: {\n  mintStatus: MintStatus;\n  setMintStatus: Dispatch<SetStateAction<MintStatus>>;\n}) => {\n  const { mintStatus, setMintStatus } = props;\n  const { address } = useAccount();\n  const { setOpenConnectModal } = useOpenConnectModal();\n  const [txHash, setTxHash] = useState(\"\");\n  const ad = useWidgetActionData(\"MintTokenWidget\");\n  useEffect(() => {\n    if (ad?.hash) {\n      setMintStatus(\"success\");\n      setTxHash(ad?.hash);\n    }\n  }, [ad, setMintStatus]);\n  return address ? (\n    <>\n      {mintStatus === \"notStarted\" ? (\n        <>\n          <Form\n            replace\n            method=\"post\"\n            onSubmit={() => {\n              setMintStatus(\"pending\");\n            }}\n          >\n            <input type=\"hidden\" name=\"walletAddress\" value={address} />\n            <input type=\"hidden\" name=\"tokenId\" value={7} />\n            <input type=\"hidden\" name=\"name\" value={\"MintTokenWidget\"} />\n            <button type=\"submit\">Mint</button>\n          </Form>\n        </>\n      ) : mintStatus === \"pending\" ? (\n        <div>Please wait...</div>\n      ) : (\n        <div>\n          An Iron PickAxe{\" \"}\n          <a\n            href={`https://sepolia.arbiscan.io/tx/${txHash}`}\n            target=\"_blank\"\n            rel=\"noreferrer\"\n          >\n            <b>is yours!</b>\n          </a>\n        </div>\n      )}\n    </>\n  ) : (\n    <>\n      <p>Not connected</p>\n      <button onClick={() => setOpenConnectModal(true)}>Connect</button>\n    </>\n  );\n};"