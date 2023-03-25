import Image from "next/image"
import { Item, ItemProperties } from "./Item"
import {BeakerIcon, HomeIcon, TrophyIcon} from "@heroicons/react/24/solid"

export const SideBar = ({ routeList }: {routeList: ItemProperties[]}) => {
  return <div className="col-span-2 bg-slate-50 h-screen w-full py-8 px-4">
    <div className="flex gap-2 py-2 text-2xl font-bold text-slate-900"><TrophyIcon className="w-8 fill-orange-500"></TrophyIcon><span>KainTurnier</span></div>
    <div className="flex flex-col gap-2 mt-10">
    {
      routeList.map((elem) => <Item icon={elem.icon} route={elem.route} name={elem.name} key={Math.random().toString(23)} />)
    }
    </div>
  </div>
}