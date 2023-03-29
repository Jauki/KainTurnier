import { useRouter } from 'next/router';
import React from 'react'
import RefGameModal from './RefGameModal';

export enum Status {
  notStarted="notStarted",
  onGoing="ongoing",
  finished="finished"
}

export type RefGameProperties = {
  teamA : {
    name : string,
    points : number,
    pic_url : string
  },
  teamB : {
    name : string,
    points : number,
    pic_url : string
  },
  phase : {
    name : string,
  },
  field : string,
  status : Status,
  start: Date,
  end : Date,
  pointsA: number,
  pointsB: number,
}

const RefGame = (props: RefGameProperties) => {
  const router = useRouter();

  return (
      <div className="w-full py-4 px-10 rounded-lg bg-slate-50 hover:bg-slate-100 flex items-center gap-10">
        <div className="flex flex-col">
          <span className="font-medium">{props.start.getUTCHours()} - {props.end.getUTCHours()}</span>
          <div className="text-sm text-gray-500">{props.status}</div>
        </div>
        <div className="ml-16 flex flex-col">
          <div className="flex flex-row gap-1 items-center">
            <div className="w-12 bg-slate-100 h-12 flex justify-center items-center rounded-full">
              <img src={props.teamA.pic_url} alt={props.teamA.name} className="object-cover" />
            </div>
            <div className="text-lg font-medium">{props.teamA.name}</div>
          </div>
          <span className="ml-14 text-lg text-orange-500 font-bold">{props.pointsA}</span>
        </div>
        <div className="text-gray-500">
          -
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center">
            <div className="w-12 bg-slate-100 h-12 flex justify-center items-center rounded-full">
              <img src={props.teamB.pic_url} alt={props.teamB.name} className="object-cover" />
            </div>
            <div className="text-lg font-medium">{props.teamB.name}</div>
          </div>
          <span className="ml-14 text-lg text-orange-500 font-bold">{props.pointsB}</span>
        </div>
  
        <div className="ml-16">
          Field: <span className="text-orange-500">{props.field}</span>
        </div>
        <div className="ml-16">
          Tournament Phase: <span className="text-orange-500">{props.phase.name}</span>
        </div>
  
        {router.pathname.includes("/admin") && <RefGameModal/>}
      </div>
    );
}

export default RefGame