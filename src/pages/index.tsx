import { Bars3Icon, ChartBarIcon, Cog8ToothIcon, HandRaisedIcon, HomeIcon, SignalIcon, UsersIcon } from "@heroicons/react/24/solid";
import { SideBar } from "../../components/SideBar";
import { ItemProperties } from "../../components/SideBar/Item";


const routeList: ItemProperties[] = [
  {
    route: "/",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    route: "/teams",
    name: "Teams",
    icon: <UsersIcon />,
  },
  {
    route: "/ref",
    name: "Referee",
    icon: <HandRaisedIcon />,
  },
  {
    route: "/games",
    name: "Games",
    icon: <SignalIcon />,
  },
  {
    route: "/stats",
    name: "Statistics",
    icon: <ChartBarIcon />,
  },
  {
    route: "/settings",
    name: "Settings",
    icon: <Cog8ToothIcon />,
  },
]

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 text-2xl">
      <SideBar routeList={routeList}/>
    </div>
  )
}
