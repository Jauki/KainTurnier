import { Bars3Icon, ChartBarIcon, Cog8ToothIcon, HandRaisedIcon, HomeIcon, SignalIcon, UsersIcon } from "@heroicons/react/24/solid";
import { ItemProperties } from "../../components/SideBar/Item";
import { SideBar } from "../../components/SideBar";

const routeList: ItemProperties[] = [
  {
    route: "/admin/",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    route: "/admin/teams",
    name: "Teams",
    icon: <UsersIcon />,
  },
  {
    route: "/ref",
    name: "Referee",
    icon: <HandRaisedIcon />,
  },
  {
    route: "/admin/games",
    name: "Games",
    icon: <SignalIcon />,
  },
]

export default function Layout({ children }: {children?: React.ReactNode}) {
  return (
    <div className="grid grid-cols-8 gap-4">
      <SideBar routeList={routeList} />
      {children!}
    </div>
  )
}
