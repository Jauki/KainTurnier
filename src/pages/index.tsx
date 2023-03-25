import { Bars3Icon, ChartBarIcon, Cog8ToothIcon, HandRaisedIcon, HomeIcon, SignalIcon, UsersIcon } from "@heroicons/react/24/solid";
import { SideBar } from "../../components/SideBar";
import { ItemProperties } from "../../components/SideBar/Item";
import dynamic from "next/dynamic";


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


const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/Tournament'),
  { ssr: false }
)

export default function Home() {
  
  return (
    <div className="grid grid-cols-12 gap-4 text-2xl">
      <SideBar routeList={routeList} />
      <DynamicComponentWithNoSSR/>
    </div>
  )
}
