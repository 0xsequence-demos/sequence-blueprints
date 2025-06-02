import { Collectibles } from "./Collectibles";
import { UserInventory } from "./UserInventory";

const chainId = 421614;
const collectionId = "0x36631c1e690714192614364ae9629850b546d194";

enum Tabs {
  secondarySales = "secondary-sales",
  inventory = "inventory",
}

export function SecondarySales({ currentTab }: { currentTab: Tabs }) {

  const isSecondarySalesTabEnabled = currentTab === Tabs.secondarySales;
  const isInventoryTabEnabled = currentTab === Tabs.inventory;

  return (
    <div className="flex flex-col gap-10">
      {isInventoryTabEnabled && <UserInventory chainId={chainId} collectionId={collectionId}/>}
      {isSecondarySalesTabEnabled && <Collectibles chainId={chainId} collectionId={collectionId}/>}
    </div>
  )
}