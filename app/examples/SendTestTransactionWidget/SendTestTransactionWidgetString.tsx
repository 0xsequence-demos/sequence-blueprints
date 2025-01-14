export const codeString =
  'import { useAccount, useSendTransaction } from "wagmi";\nimport { useEffect } from "react";\ninterface Props {\n  setData: (data: `0x${string}` | undefined) => void;\n}\nexport const SendTestTransactionWidget = (props: Props) => {\n  const { setData } = props;\n  const { address } = useAccount();\n  const { data, sendTransaction, isPending, error } = useSendTransaction();\n  useEffect(() => setData(data), []);\n  return address ? (\n    <>\n      <p>Connected as {address}</p>\n      {isPending ? (\n        <button className="ghost">Pending...</button>\n      ) : (\n        <button\n          onClick={() =>\n            sendTransaction({ to: address, value: BigInt(0), gas: null })\n          }\n        >\n          Send Transaction\n        </button>\n      )}\n      {data && <p className="breakword">Transaction hash: {data}</p>}\n      {error && <p>{error?.message}</p>}\n    </>\n  ) : (\n    <>\n      <p>Not connected</p>\n    </>\n  );\n};';
