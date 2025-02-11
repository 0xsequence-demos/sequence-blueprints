export const codeString = "import { useAccount } from \"wagmi\";\nimport { useState } from \"react\";\nimport { decodeEventLog, formatUnits } from \"viem\";\nimport {\n  SequenceIndexer,\n  SubscribeEventsArgs,\n  SubscribeEventsReturn,\n  WebrpcError,\n} from \"@0xsequence/indexer\";\ntype DecodedEvent = {\n  eventData: {\n    args: {\n      from: string;\n      to: string;\n      value: bigint;\n    };\n    eventName: \"Transfer\";\n    txHash: string;\n  };\n};\nexport const Web3EventsWidget = () => {\n  const { address } = useAccount();\n  const [events, setEvents] = useState<DecodedEvent[]>([]);\n  const [isLoading, setIsLoading] = useState(false);\n  const indexer = new SequenceIndexer(\n    \"https://arbitrum-indexer.sequence.app\",\n    \"c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA\",\n  );\n  const req: SubscribeEventsArgs = {\n    filter: {\n      events: [\"Transfer(address,address,uint256)\"],\n      contractAddresses: [\"0xaf88d065e77c8cC2239327C5EDb3A432268e5831\"],\n    },\n  };\n  const subscribe = async () => {\n    try {\n      setIsLoading(true);\n      await indexer.subscribeEvents(req, {\n        onMessage: (msg: SubscribeEventsReturn) => {\n          const decoded = decodeEventLog({\n            abi: [\n              {\n                type: \"event\",\n                name: \"Transfer\",\n                inputs: [\n                  { indexed: true, name: \"from\", type: \"address\" },\n                  { indexed: true, name: \"to\", type: \"address\" },\n                  { indexed: false, name: \"value\", type: \"uint256\" },\n                ],\n              },\n            ],\n            data: msg.log.rawLog?.data,\n            topics: msg.log.rawLog?.topics,\n          });\n          setEvents((prev) => [\n            ...prev,\n            {\n              eventData: { ...decoded, txHash: msg.log.txnHash },\n            },\n          ]);\n        },\n        onError: (err: WebrpcError) => {\n          console.error(\"err\", err);\n        },\n      });\n    } catch (error) {\n      console.error(\"Failed to subscribe:\", error);\n    } finally {\n      setIsLoading(false);\n    }\n  };\n  return address ? (\n    <div className=\"m-4 space-y-4\">\n      <div className=\"flex items-center flex-col gap-4\">\n        <span>Listen to USDC transfers on Arbitrum</span>\n        <button\n          onClick={subscribe}\n          disabled={isLoading}\n          className=\"disabled:bg-gray-500/50 disabled:cursor-not-allowed\"\n        >\n          {isLoading ? (\n            <span className=\"flex items-center gap-2\">\n              <div className=\"size-4 border-2 border-white/20 border-t-white/80 rounded-full animate-spin\" />\n              Listening...\n            </span>\n          ) : (\n            \"Start Listening\"\n          )}\n        </button>\n      </div>\n      <div className=\"max-h-[400px] overflow-y-auto space-y-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]\">\n        {events.map((event) => (\n          <div\n            key={event.eventData.txHash}\n            className=\"m-2 p-4 bg-white/10 rounded-lg\"\n          >\n            <div className=\"grid gap-2\">\n              <div className=\"flex items-center justify-between gap-3\">\n                <span className=\"text-12 text-gray-400\">From</span>\n                <span className=\"font-mono text-12\">\n                  {event.eventData.args.from}\n                </span>\n              </div>\n              <div className=\"flex items-center justify-between gap-3\">\n                <span className=\"text-12 text-gray-400\">To</span>\n                <span className=\"font-mono text-12\">\n                  {event.eventData.args.from}\n                </span>\n              </div>\n              <div className=\"flex items-center justify-between gap-3\">\n                <span className=\"text-12 text-gray-400\">Amount</span>\n                <span\n                  className={`font-mono text-12 font-medium ${\n                    event.eventData.args.from.toLowerCase() ===\n                    address.toLowerCase()\n                      ? \"text-red-400\"\n                      : \"text-green-400\"\n                  }`}\n                >\n                  {formatUnits(event.eventData.args.value, 6)} USDC\n                </span>\n              </div>\n            </div>\n            <a\n              href={`https://arbiscan.io/tx/${event.eventData.txHash}`}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              className=\"text-12 underline self-start\"\n            >\n              View on Arbiscan\n            </a>\n          </div>\n        ))}\n      </div>\n    </div>\n  ) : (\n    <p className=\"text-12 text-gray-400\">\n      Connect wallet to view USDC transfers\n    </p>\n  );\n};"