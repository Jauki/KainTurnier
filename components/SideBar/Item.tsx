import { ReactNode } from "react"
import Link from "next/link";
import { useRouter } from "next/router";

export interface ItemProperties {
  icon: ReactNode;
  name: string;
  route: string;
}

export const Item = ({ icon, name, route }: ItemProperties) => {
  const router = useRouter();


  return <Link href={route} className={`px-4 py-2 flex gap-3 rounded-lg hover:bg-slate-100 items-center transition-colors ease-in text-gray-500 ${router.pathname === route && 'bg-slate-200'}`}>
    <span className="w-6">{icon}</span>
    <span className="text-lg">{name}</span>
  </Link>
}