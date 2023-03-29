import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import GameModal from "./GameModal";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 28.03.23
 Project: volleyballtournament
 **/

export enum Status {
  notStarted="notStarted",
  onGoing="ongoing",
  finished="finished"
}

export type GameProperties = {
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

function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

const Game = (props: GameProperties) => {
  const router = useRouter();

  const getStatus = (status: Status) => {
    switch (status){
      case Status.notStarted: return <div className=" w-12  relative pr-2 flex flex-row gap-0.5">
        <div className="w-2 h-2 bg-yellow-500 animate-[bounce_1.1s_ease-in-out_infinite] rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 animate-bounce rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 animate-[bounce_0.9s_ease-in-out_infinite] rounded-full"></div>
      </div>;
      case Status.onGoing: return <div className=" w-12 h-4 relative pr-2">
        <div className="w-4 h-4 bg-blue-600 animate-ping absolute rounded-full"></div>
        <div className="w-4 h-4 bg-blue-600 absolute rounded-full"></div>
      </div>;
      case Status.finished: return <div className="w-12 text-green-500 relative pr-2 flex justify-center items-center">
        <div className="w-8 rounded-full p-2 bg-green-50">
          <CheckIcon/>
        </div>
      </div>;
    }
  }

  return (
    <div className="w-full py-4 px-10 rounded-lg bg-slate-50 hover:bg-slate-100 justify-between sm:justify-start flex items-center gap-10">
      {getStatus(props.status)}
      <div className="flex-col hidden sm:flex">
        <span className="font-medium">{formatTime(props.start)} - {formatTime(props.end)}</span>
        <div className="text-sm text-gray-500">{props.status}</div>
      </div>
      <div className="sm:ml-16 flex flex-col">
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

      <div className="ml-16 hidden sm:block">
        Field: <span className="text-orange-500">{props.field}</span>
      </div>
      <div className="ml-16 hidden sm:block">
        Tournament Phase: <span className="text-orange-500">{props.phase.name}</span>
      </div>
    </div>
  );
};

export default Game;
