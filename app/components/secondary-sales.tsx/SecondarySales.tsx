import { Collectibles } from "./Collectibles";
import { UserInventory } from "./UserInventory";

const chainId = 421614;
const collectionId = "0x36631c1e690714192614364ae9629850b546d194"

export function SecondarySales() {
  return (
    <div className="flex flex-col gap-10">
      <UserInventory chainId={chainId} collectionId={collectionId}/>
      <Collectibles chainId={chainId} collectionId={collectionId}/>
    </div>
  )
}