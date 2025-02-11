export const codeString = "import { useAccount, useSendTransaction } from \"wagmi\";\nimport { useEffect } from \"react\";\nimport { WalletConnectionDetail } from \"~/components/wallet-connection-detail/WalletConnectionDetail\";\ninterface Props {\n  setData: (data: `0x${string}` | undefined) => void;\n}\nexport const SendTestTransactionWidget = (props: Props) => {\n  const { setData } = props;\n  const { address } = useAccount();\n  const { data, sendTransaction, isPending, error } = useSendTransaction();\n  useEffect(() => setData(data), []);\n  return address ? (\n    <>\n      <WalletConnectionDetail address={address} />\n      {isPending ? (\n        <button className=\"ghost\">Pending...</button>\n      ) : (\n        <button\n          onClick={() =>\n            sendTransaction({ to: address, value: BigInt(0), gas: null })\n          }\n        >\n          Send Transaction\n        </button>\n      )}\n      {data ? (\n        <div className=\"flex flex-col gap-1 items-start px-12 py-1 mt-8\">\n          <span className=\"text-14 opacity-75\">Transaction hash</span>\n          <p className=\"break-all font-mono text-12\"> {data}</p>\n        </div>\n      ) : null}\n      {error && <p>{error?.message}</p>}\n    </>\n  ) : (\n    <>\n      <p>Not connected</p>\n    </>\n  );\n};"