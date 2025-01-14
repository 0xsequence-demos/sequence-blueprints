import type { KeyedTokensInfo } from "shiki-magic-move/types";

    export const steps = [{"code":"import { useAccount, useSendTransaction } from \"wagmi\";\nimport { useEffect } from \"react\";\ninterface Props {\n  setData: (data: `0x${string}` | undefined) => void;\n}\nexport const SendTestTransactionWidget = (props: Props) => {\n  const { setData } = props;\n  const { address } = useAccount();\n  const { data, sendTransaction, isPending, error } = useSendTransaction();\n  useEffect(() => setData(data), []);\n  return address ? (\n    <>\n      <p>Connected as {address}</p>\n      {isPending ? (\n        <button className=\"ghost\">Pending...</button>\n      ) : (\n        <button\n          onClick={() =>\n            sendTransaction({ to: address, value: BigInt(0), gas: null })\n          }\n        >\n          Send Transaction\n        </button>\n      )}\n      {data && <p className=\"breakword\">Transaction hash: {data}</p>}\n      {error && <p>{error?.message}</p>}\n    </>\n  ) : (\n    <>\n      <p>Not connected</p>\n    </>\n  );\n};","hash":"VXhcmel3PD","tokens":[{"key":"VXhcmel3PD-ln-1","content":" 1  ","offset":0,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":0,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-1"},{"content":" ","offset":6,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-2"},{"content":"{","offset":7,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-3"},{"content":" ","offset":8,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-4"},{"content":"useAccount","offset":9,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-5"},{"content":",","offset":19,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-6"},{"content":" ","offset":20,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-7"},{"content":"useSendTransaction","offset":21,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-8"},{"content":" ","offset":39,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-9"},{"content":"}","offset":40,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-10"},{"content":" ","offset":41,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-11"},{"content":"from","offset":42,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-12"},{"content":" ","offset":46,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-13"},{"content":"\"","offset":47,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-14"},{"content":"wagmi","offset":48,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-15"},{"content":"\"","offset":53,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-16"},{"content":";","offset":54,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-17"},{"content":"\n","offset":55,"key":"VXhcmel3PD-18"},{"key":"VXhcmel3PD-ln-2","content":" 2  ","offset":56,"htmlClass":"shiki-magic-move-line-number"},{"content":"import","offset":56,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-20"},{"content":" ","offset":62,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-21"},{"content":"{","offset":63,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-22"},{"content":" ","offset":64,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-23"},{"content":"useEffect","offset":65,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-24"},{"content":" ","offset":74,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-25"},{"content":"}","offset":75,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-26"},{"content":" ","offset":76,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-27"},{"content":"from","offset":77,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-28"},{"content":" ","offset":81,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-29"},{"content":"\"","offset":82,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-30"},{"content":"react","offset":83,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-31"},{"content":"\"","offset":88,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-32"},{"content":";","offset":89,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-33"},{"content":"\n","offset":90,"key":"VXhcmel3PD-34"},{"key":"VXhcmel3PD-ln-3","content":" 3  ","offset":91,"htmlClass":"shiki-magic-move-line-number"},{"content":"interface","offset":91,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-36"},{"content":" ","offset":100,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-37"},{"content":"Props","offset":101,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-38"},{"content":" ","offset":106,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-39"},{"content":"{","offset":107,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-40"},{"content":"\n","offset":108,"key":"VXhcmel3PD-41"},{"key":"VXhcmel3PD-ln-4","content":" 4  ","offset":109,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":109,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-43"},{"content":"setData","offset":111,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-44"},{"content":":","offset":118,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-45"},{"content":" ","offset":119,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-46"},{"content":"(","offset":120,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-47"},{"content":"data","offset":121,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-48"},{"content":":","offset":125,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-49"},{"content":" ","offset":126,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-50"},{"content":"`","offset":127,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-51"},{"content":"0x","offset":128,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-52"},{"content":"${","offset":130,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-53"},{"content":"string","offset":132,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-54"},{"content":"}`","offset":138,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-55"},{"content":" ","offset":140,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-56"},{"content":"|","offset":141,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-57"},{"content":" ","offset":142,"key":"VXhcmel3PD-58"},{"content":"undefined","offset":143,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-59"},{"content":")","offset":152,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-60"},{"content":" ","offset":153,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-61"},{"content":"=>","offset":154,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-62"},{"content":" ","offset":156,"key":"VXhcmel3PD-63"},{"content":"void","offset":157,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-64"},{"content":";","offset":161,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-65"},{"content":"\n","offset":162,"key":"VXhcmel3PD-66"},{"key":"VXhcmel3PD-ln-5","content":" 5  ","offset":163,"htmlClass":"shiki-magic-move-line-number"},{"content":"}","offset":163,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-68"},{"content":"\n","offset":164,"key":"VXhcmel3PD-69"},{"key":"VXhcmel3PD-ln-6","content":" 6  ","offset":165,"htmlClass":"shiki-magic-move-line-number"},{"content":"export","offset":165,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-71"},{"content":" ","offset":171,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-72"},{"content":"const","offset":172,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-73"},{"content":" ","offset":177,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-74"},{"content":"SendTestTransactionWidget","offset":178,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-75"},{"content":" ","offset":203,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-76"},{"content":"=","offset":204,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-77"},{"content":" ","offset":205,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-78"},{"content":"(","offset":206,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-79"},{"content":"props","offset":207,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-80"},{"content":":","offset":212,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-81"},{"content":" ","offset":213,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-82"},{"content":"Props","offset":214,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-83"},{"content":")","offset":219,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-84"},{"content":" ","offset":220,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-85"},{"content":"=>","offset":221,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-86"},{"content":" ","offset":223,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-87"},{"content":"{","offset":224,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-88"},{"content":"\n","offset":225,"key":"VXhcmel3PD-89"},{"key":"VXhcmel3PD-ln-7","content":" 7  ","offset":226,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":226,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-91"},{"content":"const","offset":228,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-92"},{"content":" ","offset":233,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-93"},{"content":"{","offset":234,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-94"},{"content":" ","offset":235,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-95"},{"content":"setData","offset":236,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-96"},{"content":" ","offset":243,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-97"},{"content":"}","offset":244,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-98"},{"content":" ","offset":245,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-99"},{"content":"=","offset":246,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-100"},{"content":" ","offset":247,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-101"},{"content":"props","offset":248,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-102"},{"content":";","offset":253,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-103"},{"content":"\n","offset":254,"key":"VXhcmel3PD-104"},{"key":"VXhcmel3PD-ln-8","content":" 8  ","offset":255,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":255,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-106"},{"content":"const","offset":257,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-107"},{"content":" ","offset":262,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-108"},{"content":"{","offset":263,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-109"},{"content":" ","offset":264,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-110"},{"content":"address","offset":265,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-111"},{"content":" ","offset":272,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-112"},{"content":"}","offset":273,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-113"},{"content":" ","offset":274,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-114"},{"content":"=","offset":275,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-115"},{"content":" ","offset":276,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-116"},{"content":"useAccount","offset":277,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-117"},{"content":"();","offset":287,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-118"},{"content":"\n","offset":290,"key":"VXhcmel3PD-119"},{"key":"VXhcmel3PD-ln-9","content":" 9  ","offset":291,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":291,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-121"},{"content":"const","offset":293,"color":"#A96BC0","fontStyle":0,"key":"VXhcmel3PD-122"},{"content":" ","offset":298,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-123"},{"content":"{","offset":299,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-124"},{"content":" ","offset":300,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-125"},{"content":"data","offset":301,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-126"},{"content":",","offset":305,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-127"},{"content":" ","offset":306,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-128"},{"content":"sendTransaction","offset":307,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-129"},{"content":",","offset":322,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-130"},{"content":" ","offset":323,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-131"},{"content":"isPending","offset":324,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-132"},{"content":",","offset":333,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-133"},{"content":" ","offset":334,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-134"},{"content":"error","offset":335,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-135"},{"content":" ","offset":340,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-136"},{"content":"}","offset":341,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-137"},{"content":" ","offset":342,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-138"},{"content":"=","offset":343,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-139"},{"content":" ","offset":344,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-140"},{"content":"useSendTransaction","offset":345,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-141"},{"content":"();","offset":363,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-142"},{"content":"\n","offset":366,"key":"VXhcmel3PD-143"},{"key":"VXhcmel3PD-ln-10","content":"10  ","offset":367,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":367,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-145"},{"content":"useEffect","offset":369,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-146"},{"content":"(()","offset":378,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-147"},{"content":" ","offset":381,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-148"},{"content":"=>","offset":382,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-149"},{"content":" ","offset":384,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-150"},{"content":"setData","offset":385,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-151"},{"content":"(","offset":392,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-152"},{"content":"data","offset":393,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-153"},{"content":"),","offset":397,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-154"},{"content":" ","offset":399,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-155"},{"content":"[]);","offset":400,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-156"},{"content":"\n","offset":404,"key":"VXhcmel3PD-157"},{"key":"VXhcmel3PD-ln-11","content":"11  ","offset":405,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":405,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-159"},{"content":"return","offset":407,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-160"},{"content":" ","offset":413,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-161"},{"content":"address","offset":414,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-162"},{"content":" ","offset":421,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-163"},{"content":"?","offset":422,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-164"},{"content":" ","offset":423,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-165"},{"content":"(","offset":424,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-166"},{"content":"\n","offset":425,"key":"VXhcmel3PD-167"},{"key":"VXhcmel3PD-ln-12","content":"12  ","offset":426,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":426,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-169"},{"content":"<>","offset":430,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-170"},{"content":"\n","offset":432,"key":"VXhcmel3PD-171"},{"key":"VXhcmel3PD-ln-13","content":"13  ","offset":433,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":433,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-173"},{"content":"<","offset":439,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-174"},{"content":"p","offset":440,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-175"},{"content":">","offset":441,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-176"},{"content":"Connected as","offset":442,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-177"},{"content":" ","offset":454,"key":"VXhcmel3PD-178"},{"content":"{","offset":455,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-179"},{"content":"address","offset":456,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-180"},{"content":"}</","offset":463,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-181"},{"content":"p","offset":466,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-182"},{"content":">","offset":467,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-183"},{"content":"\n","offset":468,"key":"VXhcmel3PD-184"},{"key":"VXhcmel3PD-ln-14","content":"14  ","offset":469,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":469,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-186"},{"content":"{","offset":475,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-187"},{"content":"isPending","offset":476,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-188"},{"content":" ","offset":485,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-189"},{"content":"?","offset":486,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-190"},{"content":" ","offset":487,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-191"},{"content":"(","offset":488,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-192"},{"content":"\n","offset":489,"key":"VXhcmel3PD-193"},{"key":"VXhcmel3PD-ln-15","content":"15  ","offset":490,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":490,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-195"},{"content":"<","offset":498,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-196"},{"content":"button","offset":499,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-197"},{"content":" ","offset":505,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-198"},{"content":"className","offset":506,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-199"},{"content":"=","offset":515,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-200"},{"content":"\"","offset":516,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-201"},{"content":"ghost","offset":517,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-202"},{"content":"\"","offset":522,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-203"},{"content":">","offset":523,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-204"},{"content":"Pending...","offset":524,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-205"},{"content":"</","offset":534,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-206"},{"content":"button","offset":536,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-207"},{"content":">","offset":542,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-208"},{"content":"\n","offset":543,"key":"VXhcmel3PD-209"},{"key":"VXhcmel3PD-ln-16","content":"16  ","offset":544,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":544,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-211"},{"content":")","offset":550,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-212"},{"content":" ","offset":551,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-213"},{"content":":","offset":552,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-214"},{"content":" ","offset":553,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-215"},{"content":"(","offset":554,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-216"},{"content":"\n","offset":555,"key":"VXhcmel3PD-217"},{"key":"VXhcmel3PD-ln-17","content":"17  ","offset":556,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":556,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-219"},{"content":"<","offset":564,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-220"},{"content":"button","offset":565,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-221"},{"content":"\n","offset":571,"key":"VXhcmel3PD-222"},{"key":"VXhcmel3PD-ln-18","content":"18  ","offset":572,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":572,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-224"},{"content":"onClick","offset":582,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-225"},{"content":"=","offset":589,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-226"},{"content":"{()","offset":590,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-227"},{"content":" ","offset":593,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-228"},{"content":"=>","offset":594,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-229"},{"content":"\n","offset":596,"key":"VXhcmel3PD-230"},{"key":"VXhcmel3PD-ln-19","content":"19  ","offset":597,"htmlClass":"shiki-magic-move-line-number"},{"content":"            ","offset":597,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-232"},{"content":"sendTransaction","offset":609,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-233"},{"content":"({","offset":624,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-234"},{"content":" ","offset":626,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-235"},{"content":"to","offset":627,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-236"},{"content":":","offset":629,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-237"},{"content":" ","offset":630,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-238"},{"content":"address","offset":631,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-239"},{"content":",","offset":638,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-240"},{"content":" ","offset":639,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-241"},{"content":"value","offset":640,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-242"},{"content":":","offset":645,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-243"},{"content":" ","offset":646,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-244"},{"content":"BigInt","offset":647,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-245"},{"content":"(","offset":653,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-246"},{"content":"0","offset":654,"color":"#B381C5","fontStyle":0,"key":"VXhcmel3PD-247"},{"content":"),","offset":655,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-248"},{"content":" ","offset":657,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-249"},{"content":"gas","offset":658,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-250"},{"content":":","offset":661,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-251"},{"content":" ","offset":662,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-252"},{"content":"null","offset":663,"color":"#FFE261","fontStyle":0,"key":"VXhcmel3PD-253"},{"content":" ","offset":667,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-254"},{"content":"})","offset":668,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-255"},{"content":"\n","offset":670,"key":"VXhcmel3PD-256"},{"key":"VXhcmel3PD-ln-20","content":"20  ","offset":671,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":671,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-258"},{"content":"}","offset":681,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-259"},{"content":"\n","offset":682,"key":"VXhcmel3PD-260"},{"key":"VXhcmel3PD-ln-21","content":"21  ","offset":683,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":683,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-262"},{"content":">","offset":691,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-263"},{"content":"\n","offset":692,"key":"VXhcmel3PD-264"},{"key":"VXhcmel3PD-ln-22","content":"22  ","offset":693,"htmlClass":"shiki-magic-move-line-number"},{"content":"          ","offset":693,"key":"VXhcmel3PD-266"},{"content":"Send Transaction","offset":703,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-267"},{"content":"\n","offset":719,"key":"VXhcmel3PD-268"},{"key":"VXhcmel3PD-ln-23","content":"23  ","offset":720,"htmlClass":"shiki-magic-move-line-number"},{"content":"        ","offset":720,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-270"},{"content":"</","offset":728,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-271"},{"content":"button","offset":730,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-272"},{"content":">","offset":736,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-273"},{"content":"\n","offset":737,"key":"VXhcmel3PD-274"},{"key":"VXhcmel3PD-ln-24","content":"24  ","offset":738,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":738,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-276"},{"content":")}","offset":744,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-277"},{"content":"\n","offset":746,"key":"VXhcmel3PD-278"},{"key":"VXhcmel3PD-ln-25","content":"25  ","offset":747,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":747,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-280"},{"content":"{","offset":753,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-281"},{"content":"data","offset":754,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-282"},{"content":" ","offset":758,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-283"},{"content":"&&","offset":759,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-284"},{"content":" ","offset":761,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-285"},{"content":"<","offset":762,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-286"},{"content":"p","offset":763,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-287"},{"content":" ","offset":764,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-288"},{"content":"className","offset":765,"color":"#EB64B9","fontStyle":0,"key":"VXhcmel3PD-289"},{"content":"=","offset":774,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-290"},{"content":"\"","offset":775,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-291"},{"content":"breakword","offset":776,"color":"#B4DCE7","fontStyle":0,"key":"VXhcmel3PD-292"},{"content":"\"","offset":785,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-293"},{"content":">","offset":786,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-294"},{"content":"Transaction hash:","offset":787,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-295"},{"content":" ","offset":804,"key":"VXhcmel3PD-296"},{"content":"{","offset":805,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-297"},{"content":"data","offset":806,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-298"},{"content":"}</","offset":810,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-299"},{"content":"p","offset":813,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-300"},{"content":">}","offset":814,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-301"},{"content":"\n","offset":816,"key":"VXhcmel3PD-302"},{"key":"VXhcmel3PD-ln-26","content":"26  ","offset":817,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":817,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-304"},{"content":"{","offset":823,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-305"},{"content":"error","offset":824,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-306"},{"content":" ","offset":829,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-307"},{"content":"&&","offset":830,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-308"},{"content":" ","offset":832,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-309"},{"content":"<","offset":833,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-310"},{"content":"p","offset":834,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-311"},{"content":">{","offset":835,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-312"},{"content":"error","offset":837,"color":"#FFF","fontStyle":0,"key":"VXhcmel3PD-313"},{"content":"?.","offset":842,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-314"},{"content":"message","offset":844,"color":"#40B4C4","fontStyle":0,"key":"VXhcmel3PD-315"},{"content":"}</","offset":851,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-316"},{"content":"p","offset":854,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-317"},{"content":">}","offset":855,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-318"},{"content":"\n","offset":857,"key":"VXhcmel3PD-319"},{"key":"VXhcmel3PD-ln-27","content":"27  ","offset":858,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":858,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-321"},{"content":"</>","offset":862,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-322"},{"content":"\n","offset":865,"key":"VXhcmel3PD-323"},{"key":"VXhcmel3PD-ln-28","content":"28  ","offset":866,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":866,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-325"},{"content":")","offset":868,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-326"},{"content":" ","offset":869,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-327"},{"content":":","offset":870,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-328"},{"content":" ","offset":871,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-329"},{"content":"(","offset":872,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-330"},{"content":"\n","offset":873,"key":"VXhcmel3PD-331"},{"key":"VXhcmel3PD-ln-29","content":"29  ","offset":874,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":874,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-333"},{"content":"<>","offset":878,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-334"},{"content":"\n","offset":880,"key":"VXhcmel3PD-335"},{"key":"VXhcmel3PD-ln-30","content":"30  ","offset":881,"htmlClass":"shiki-magic-move-line-number"},{"content":"      ","offset":881,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-337"},{"content":"<","offset":887,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-338"},{"content":"p","offset":888,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-339"},{"content":">","offset":889,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-340"},{"content":"Not connected","offset":890,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-341"},{"content":"</","offset":903,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-342"},{"content":"p","offset":905,"color":"#74DFC4","fontStyle":0,"key":"VXhcmel3PD-343"},{"content":">","offset":906,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-344"},{"content":"\n","offset":907,"key":"VXhcmel3PD-345"},{"key":"VXhcmel3PD-ln-31","content":"31  ","offset":908,"htmlClass":"shiki-magic-move-line-number"},{"content":"    ","offset":908,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-347"},{"content":"</>","offset":912,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-348"},{"content":"\n","offset":915,"key":"VXhcmel3PD-349"},{"key":"VXhcmel3PD-ln-32","content":"32  ","offset":916,"htmlClass":"shiki-magic-move-line-number"},{"content":"  ","offset":916,"color":"#FFFFFF","fontStyle":0,"key":"VXhcmel3PD-351"},{"content":");","offset":918,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-352"},{"content":"\n","offset":920,"key":"VXhcmel3PD-353"},{"key":"VXhcmel3PD-ln-33","content":"33  ","offset":921,"htmlClass":"shiki-magic-move-line-number"},{"content":"};","offset":921,"color":"#7B6995","fontStyle":0,"key":"VXhcmel3PD-355"},{"content":"\n","offset":923,"key":"VXhcmel3PD-356"}],"lineNumbers":false,"bg":"#27212e","fg":"#ffffff","themeName":"laserwave","lang":"jsx"}] as KeyedTokensInfo[]
