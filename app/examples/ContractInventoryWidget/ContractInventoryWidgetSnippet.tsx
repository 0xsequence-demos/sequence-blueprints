import type {
      KeyedTokensInfo,
    } from "shiki-magic-move/types";

    export const steps = [{"code":"import { useOpenWalletModal } from \"@0xsequence/kit-wallet\";\nimport { useOpenConnectModal } from \"@0xsequence/kit\";\nimport { useAccount } from \"wagmi\";\nimport { arbitrumSepolia } from \"wagmi/chains\";\nexport const ContractInventoryWidget = () => {\n  const { address } = useAccount();\n  const { setOpenConnectModal } = useOpenConnectModal();\n  const { setOpenWalletModal } = useOpenWalletModal();\n  return address ? (\n    <>\n      <p>Connected as {address}</p>\n      <button onClick={() => setOpenWalletModal(true, {\n        defaultNavigation: {\n          location: 'collection-details',\n          params: {\n            contractAddress: '0xdbac91902dce61d231154bbcbb16227dca31141c',\n            chainId: arbitrumSepolia.id\n          }\n        }\n        })}>\n        Open Wallet Inventory\n      </button>\n    </>\n  ) : (\n    <>\n      <p>Not connected</p>\n      <button onClick={() => setOpenConnectModal(true)}>Connect</button>\n    </>\n  );\n};","hash":"YJYK6Igx26","tokens":[{"key":"YJYK6Igx26-ln-1","content":" 1  ","offset":0,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":0,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-1"},{"content":" ","offset":6,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-2"},{"content":"{","offset":7,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-3"},{"content":" ","offset":8,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-4"},{"content":"useOpenWalletModal","offset":9,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-5"},{"content":" ","offset":27,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-6"},{"content":"}","offset":28,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-7"},{"content":" ","offset":29,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-8"},{"content":"from","offset":30,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-9"},{"content":" ","offset":34,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-10"},{"content":"\"","offset":35,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-11"},{"content":"@0xsequence/kit-wallet","offset":36,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-12"},{"content":"\"","offset":58,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-13"},{"content":";","offset":59,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-14"},{"content":"\n","offset":60,"key":"YJYK6Igx26-15"},{"key":"YJYK6Igx26-ln-2","content":" 2  ","offset":61,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":61,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-17"},{"content":" ","offset":67,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-18"},{"content":"{","offset":68,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-19"},{"content":" ","offset":69,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-20"},{"content":"useOpenConnectModal","offset":70,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-21"},{"content":" ","offset":89,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-22"},{"content":"}","offset":90,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-23"},{"content":" ","offset":91,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-24"},{"content":"from","offset":92,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-25"},{"content":" ","offset":96,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-26"},{"content":"\"","offset":97,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-27"},{"content":"@0xsequence/kit","offset":98,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-28"},{"content":"\"","offset":113,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-29"},{"content":";","offset":114,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-30"},{"content":"\n","offset":115,"key":"YJYK6Igx26-31"},{"key":"YJYK6Igx26-ln-3","content":" 3  ","offset":116,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":116,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-33"},{"content":" ","offset":122,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-34"},{"content":"{","offset":123,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-35"},{"content":" ","offset":124,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-36"},{"content":"useAccount","offset":125,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-37"},{"content":" ","offset":135,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-38"},{"content":"}","offset":136,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-39"},{"content":" ","offset":137,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-40"},{"content":"from","offset":138,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-41"},{"content":" ","offset":142,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-42"},{"content":"\"","offset":143,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-43"},{"content":"wagmi","offset":144,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-44"},{"content":"\"","offset":149,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-45"},{"content":";","offset":150,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-46"},{"content":"\n","offset":151,"key":"YJYK6Igx26-47"},{"key":"YJYK6Igx26-ln-4","content":" 4  ","offset":152,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":152,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-49"},{"content":" ","offset":158,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-50"},{"content":"{","offset":159,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-51"},{"content":" ","offset":160,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-52"},{"content":"arbitrumSepolia","offset":161,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-53"},{"content":" ","offset":176,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-54"},{"content":"}","offset":177,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-55"},{"content":" ","offset":178,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-56"},{"content":"from","offset":179,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-57"},{"content":" ","offset":183,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-58"},{"content":"\"","offset":184,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-59"},{"content":"wagmi/chains","offset":185,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-60"},{"content":"\"","offset":197,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-61"},{"content":";","offset":198,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-62"},{"content":"\n","offset":199,"key":"YJYK6Igx26-63"},{"key":"YJYK6Igx26-ln-5","content":" 5  ","offset":200,"htmlClass":"shiki-magic-move-line-number"},{"content":"export","offset":200,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-65"},{"content":" ","offset":206,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-66"},{"content":"const","offset":207,"color":"#A96BC0","fontStyle":0,"key":"YJYK6Igx26-67"},{"content":" ","offset":212,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-68"},{"content":"ContractInventoryWidget","offset":213,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-69"},{"content":" ","offset":236,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-70"},{"content":"=","offset":237,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-71"},{"content":" ","offset":238,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-72"},{"content":"()","offset":239,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-73"},{"content":" ","offset":241,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-74"},{"content":"=>","offset":242,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-75"},{"content":" ","offset":244,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-76"},{"content":"{","offset":245,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-77"},{"content":"\n","offset":246,"key":"YJYK6Igx26-78"},{"key":"YJYK6Igx26-ln-6","content":" 6  ","offset":247,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":247,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-80"},{"content":"const","offset":249,"color":"#A96BC0","fontStyle":0,"key":"YJYK6Igx26-81"},{"content":" ","offset":254,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-82"},{"content":"{","offset":255,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-83"},{"content":" ","offset":256,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-84"},{"content":"address","offset":257,"color":"#FFE261","fontStyle":0,"key":"YJYK6Igx26-85"},{"content":" ","offset":264,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-86"},{"content":"}","offset":265,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-87"},{"content":" ","offset":266,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-88"},{"content":"=","offset":267,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-89"},{"content":" ","offset":268,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-90"},{"content":"useAccount","offset":269,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-91"},{"content":"();","offset":279,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-92"},{"content":"\n","offset":282,"key":"YJYK6Igx26-93"},{"key":"YJYK6Igx26-ln-7","content":" 7  ","offset":283,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":283,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-95"},{"content":"const","offset":285,"color":"#A96BC0","fontStyle":0,"key":"YJYK6Igx26-96"},{"content":" ","offset":290,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-97"},{"content":"{","offset":291,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-98"},{"content":" ","offset":292,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-99"},{"content":"setOpenConnectModal","offset":293,"color":"#FFE261","fontStyle":0,"key":"YJYK6Igx26-100"},{"content":" ","offset":312,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-101"},{"content":"}","offset":313,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-102"},{"content":" ","offset":314,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-103"},{"content":"=","offset":315,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-104"},{"content":" ","offset":316,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-105"},{"content":"useOpenConnectModal","offset":317,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-106"},{"content":"();","offset":336,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-107"},{"content":"\n","offset":339,"key":"YJYK6Igx26-108"},{"key":"YJYK6Igx26-ln-8","content":" 8  ","offset":340,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":340,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-110"},{"content":"const","offset":342,"color":"#A96BC0","fontStyle":0,"key":"YJYK6Igx26-111"},{"content":" ","offset":347,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-112"},{"content":"{","offset":348,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-113"},{"content":" ","offset":349,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-114"},{"content":"setOpenWalletModal","offset":350,"color":"#FFE261","fontStyle":0,"key":"YJYK6Igx26-115"},{"content":" ","offset":368,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-116"},{"content":"}","offset":369,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-117"},{"content":" ","offset":370,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-118"},{"content":"=","offset":371,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-119"},{"content":" ","offset":372,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-120"},{"content":"useOpenWalletModal","offset":373,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-121"},{"content":"();","offset":391,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-122"},{"content":"\n","offset":394,"key":"YJYK6Igx26-123"},{"key":"YJYK6Igx26-ln-9","content":" 9  ","offset":395,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":395,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-125"},{"content":"return","offset":397,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-126"},{"content":" ","offset":403,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-127"},{"content":"address","offset":404,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-128"},{"content":" ","offset":411,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-129"},{"content":"?","offset":412,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-130"},{"content":" ","offset":413,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-131"},{"content":"(","offset":414,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-132"},{"content":"\n","offset":415,"key":"YJYK6Igx26-133"},{"key":"YJYK6Igx26-ln-10","content":"10  ","offset":416,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":416,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-135"},{"content":"<>","offset":420,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-136"},{"content":"\n","offset":422,"key":"YJYK6Igx26-137"},{"key":"YJYK6Igx26-ln-11","content":"11  ","offset":423,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":423,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-139"},{"content":"<","offset":429,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-140"},{"content":"p","offset":430,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-141"},{"content":">","offset":431,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-142"},{"content":"Connected as","offset":432,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-143"},{"content":" ","offset":444,"key":"YJYK6Igx26-144"},{"content":"{","offset":445,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-145"},{"content":"address","offset":446,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-146"},{"content":"}</","offset":453,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-147"},{"content":"p","offset":456,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-148"},{"content":">","offset":457,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-149"},{"content":"\n","offset":458,"key":"YJYK6Igx26-150"},{"key":"YJYK6Igx26-ln-12","content":"12  ","offset":459,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":459,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-152"},{"content":"<","offset":465,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-153"},{"content":"button","offset":466,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-154"},{"content":" ","offset":472,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-155"},{"content":"onClick","offset":473,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-156"},{"content":"=","offset":480,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-157"},{"content":"{()","offset":481,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-158"},{"content":" ","offset":484,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-159"},{"content":"=>","offset":485,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-160"},{"content":" ","offset":487,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-161"},{"content":"setOpenWalletModal","offset":488,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-162"},{"content":"(","offset":506,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-163"},{"content":"true","offset":507,"color":"#FFE261","fontStyle":0,"key":"YJYK6Igx26-164"},{"content":",","offset":511,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-165"},{"content":" ","offset":512,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-166"},{"content":"{","offset":513,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-167"},{"content":"\n","offset":514,"key":"YJYK6Igx26-168"},{"key":"YJYK6Igx26-ln-13","content":"13  ","offset":515,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":515,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-170"},{"content":"defaultNavigation","offset":523,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-171"},{"content":":","offset":540,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-172"},{"content":" ","offset":541,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-173"},{"content":"{","offset":542,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-174"},{"content":"\n","offset":543,"key":"YJYK6Igx26-175"},{"key":"YJYK6Igx26-ln-14","content":"14  ","offset":544,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":544,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-177"},{"content":"location","offset":554,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-178"},{"content":":","offset":562,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-179"},{"content":" ","offset":563,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-180"},{"content":"'","offset":564,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-181"},{"content":"collection-details","offset":565,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-182"},{"content":"'","offset":583,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-183"},{"content":",","offset":584,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-184"},{"content":"\n","offset":585,"key":"YJYK6Igx26-185"},{"key":"YJYK6Igx26-ln-15","content":"15  ","offset":586,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":586,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-187"},{"content":"params","offset":596,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-188"},{"content":":","offset":602,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-189"},{"content":" ","offset":603,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-190"},{"content":"{","offset":604,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-191"},{"content":"\n","offset":605,"key":"YJYK6Igx26-192"},{"key":"YJYK6Igx26-ln-16","content":"16  ","offset":606,"htmlClass":"shiki-magic-move-line-number"},{"content":"            ","offset":606,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-194"},{"content":"contractAddress","offset":618,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-195"},{"content":":","offset":633,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-196"},{"content":" ","offset":634,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-197"},{"content":"'","offset":635,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-198"},{"content":"0xdbac91902dce61d231154bbcbb16227dca31141c","offset":636,"color":"#B4DCE7","fontStyle":0,"key":"YJYK6Igx26-199"},{"content":"'","offset":678,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-200"},{"content":",","offset":679,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-201"},{"content":"\n","offset":680,"key":"YJYK6Igx26-202"},{"key":"YJYK6Igx26-ln-17","content":"17  ","offset":681,"htmlClass":"shiki-magic-move-line-number"},{"content":"            ","offset":681,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-204"},{"content":"chainId","offset":693,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-205"},{"content":":","offset":700,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-206"},{"content":" ","offset":701,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-207"},{"content":"arbitrumSepolia","offset":702,"color":"#FFF","fontStyle":0,"key":"YJYK6Igx26-208"},{"content":".","offset":717,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-209"},{"content":"id","offset":718,"color":"#40B4C4","fontStyle":0,"key":"YJYK6Igx26-210"},{"content":"\n","offset":720,"key":"YJYK6Igx26-211"},{"key":"YJYK6Igx26-ln-18","content":"18  ","offset":721,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":721,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-213"},{"content":"}","offset":731,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-214"},{"content":"\n","offset":732,"key":"YJYK6Igx26-215"},{"key":"YJYK6Igx26-ln-19","content":"19  ","offset":733,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":733,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-217"},{"content":"}","offset":741,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-218"},{"content":"\n","offset":742,"key":"YJYK6Igx26-219"},{"key":"YJYK6Igx26-ln-20","content":"20  ","offset":743,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":743,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-221"},{"content":"})}>","offset":751,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-222"},{"content":"\n","offset":755,"key":"YJYK6Igx26-223"},{"key":"YJYK6Igx26-ln-21","content":"21  ","offset":756,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":756,"key":"YJYK6Igx26-225"},{"content":"Open Wallet Inventory","offset":764,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-226"},{"content":"\n","offset":785,"key":"YJYK6Igx26-227"},{"key":"YJYK6Igx26-ln-22","content":"22  ","offset":786,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":786,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-229"},{"content":"</","offset":792,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-230"},{"content":"button","offset":794,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-231"},{"content":">","offset":800,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-232"},{"content":"\n","offset":801,"key":"YJYK6Igx26-233"},{"key":"YJYK6Igx26-ln-23","content":"23  ","offset":802,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":802,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-235"},{"content":"</>","offset":806,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-236"},{"content":"\n","offset":809,"key":"YJYK6Igx26-237"},{"key":"YJYK6Igx26-ln-24","content":"24  ","offset":810,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":810,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-239"},{"content":")","offset":812,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-240"},{"content":" ","offset":813,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-241"},{"content":":","offset":814,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-242"},{"content":" ","offset":815,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-243"},{"content":"(","offset":816,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-244"},{"content":"\n","offset":817,"key":"YJYK6Igx26-245"},{"key":"YJYK6Igx26-ln-25","content":"25  ","offset":818,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":818,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-247"},{"content":"<>","offset":822,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-248"},{"content":"\n","offset":824,"key":"YJYK6Igx26-249"},{"key":"YJYK6Igx26-ln-26","content":"26  ","offset":825,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":825,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-251"},{"content":"<","offset":831,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-252"},{"content":"p","offset":832,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-253"},{"content":">","offset":833,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-254"},{"content":"Not connected","offset":834,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-255"},{"content":"</","offset":847,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-256"},{"content":"p","offset":849,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-257"},{"content":">","offset":850,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-258"},{"content":"\n","offset":851,"key":"YJYK6Igx26-259"},{"key":"YJYK6Igx26-ln-27","content":"27  ","offset":852,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":852,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-261"},{"content":"<","offset":858,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-262"},{"content":"button","offset":859,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-263"},{"content":" ","offset":865,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-264"},{"content":"onClick","offset":866,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-265"},{"content":"=","offset":873,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-266"},{"content":"{()","offset":874,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-267"},{"content":" ","offset":877,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-268"},{"content":"=>","offset":878,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-269"},{"content":" ","offset":880,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-270"},{"content":"setOpenConnectModal","offset":881,"color":"#EB64B9","fontStyle":0,"key":"YJYK6Igx26-271"},{"content":"(","offset":900,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-272"},{"content":"true","offset":901,"color":"#FFE261","fontStyle":0,"key":"YJYK6Igx26-273"},{"content":")}>","offset":905,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-274"},{"content":"Connect","offset":908,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-275"},{"content":"</","offset":915,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-276"},{"content":"button","offset":917,"color":"#74DFC4","fontStyle":0,"key":"YJYK6Igx26-277"},{"content":">","offset":923,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-278"},{"content":"\n","offset":924,"key":"YJYK6Igx26-279"},{"key":"YJYK6Igx26-ln-28","content":"28  ","offset":925,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":925,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-281"},{"content":"</>","offset":929,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-282"},{"content":"\n","offset":932,"key":"YJYK6Igx26-283"},{"key":"YJYK6Igx26-ln-29","content":"29  ","offset":933,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":933,"color":"#FFFFFF","fontStyle":0,"key":"YJYK6Igx26-285"},{"content":");","offset":935,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-286"},{"content":"\n","offset":937,"key":"YJYK6Igx26-287"},{"key":"YJYK6Igx26-ln-30","content":"30  ","offset":938,"htmlClass":"shiki-magic-move-line-number"},{"content":"};","offset":938,"color":"#7B6995","fontStyle":0,"key":"YJYK6Igx26-289"},{"content":"\n","offset":940,"key":"YJYK6Igx26-290"}],"lineNumbers":false,"bg":"#27212e","fg":"#ffffff","themeName":"laserwave","lang":"jsx"}] as KeyedTokensInfo[]